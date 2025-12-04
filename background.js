// background.js

const OS_API_KEY = "Tu9FaiAaLkKAzsALV9DF9WIaouK8NLxp"; // your API key

const COMMON_HEADERS = {
  "Api-Key": OS_API_KEY,
  "X-User-Agent": "SubtitleDownloaderPro v1.0.2",
  "Content-Type": "application/json"
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  // ======================================================
  //  SEARCH SUBTITLES
  // ======================================================
  if (request.action === "searchSubtitles") {
    (async () => {
      try {
        const url =
          "https://api.opensubtitles.com/api/v1/subtitles" +
          `?languages=en&order_by=download_count&query=${encodeURIComponent(
            request.query
          )}`;

        const response = await fetch(url, {
          method: "GET",
          headers: COMMON_HEADERS
        });

        if (!response.ok) {
          const body = await response.text();
          console.error("OpenSubtitles search error body:", body);
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const subtitles = Array.isArray(data.data) ? data.data : [];

        sendResponse({ subtitles });
      } catch (err) {
        console.error("Search error:", err);
        sendResponse({ error: err.message });
      }
    })();

    return true;
  }

  // ======================================================
  //  DOWNLOAD SUBTITLE
  // ======================================================
  if (request.action === "downloadSubtitle") {
    (async () => {
      try {
        const fileId = request.fileId;
        if (!fileId) throw new Error("No file_id provided");

        // Step 1 — Get download token
        const tokenResponse = await fetch(
          "https://api.opensubtitles.com/api/v1/download",
          {
            method: "POST",
            headers: COMMON_HEADERS,
            body: JSON.stringify({ file_id: fileId })
          }
        );

        if (!tokenResponse.ok) {
          const body = await tokenResponse.text();
          console.error("OpenSubtitles download token error body:", body);
          throw new Error(`Download token error: ${tokenResponse.status}`);
        }

        const tokenData = await tokenResponse.json();
        if (!tokenData.link) throw new Error("No download link returned");

        // Step 2 — Chrome downloads directly from link (MV3 safe)
        chrome.downloads.download({
          url: tokenData.link,
          filename: tokenData.file_name || `subtitle-${fileId}.srt`,
          saveAs: true
        });

        sendResponse({ success: true });

      } catch (err) {
        console.error("Download error:", err);
        sendResponse({ success: false, error: err.message });
      }
    })();

    return true;
  }

});
