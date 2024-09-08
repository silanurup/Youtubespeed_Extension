// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes('youtube.com') && changeInfo.status === 'complete') {
    console.log('YouTube page loaded:', tab.url);
    chrome.tabs.executeScript(tabId, { file: 'content.js' });
  }
});
