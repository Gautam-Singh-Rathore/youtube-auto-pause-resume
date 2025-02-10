chrome.windows.onFocusChanged.addListener((windowId) => {
  // Check if no window is focused (i.e. focus lost)
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // Window lost focus → pause video
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab && tab.url && tab.url.includes("youtube.com/watch")) {
        chrome.tabs.sendMessage(tab.id, { action: 'pause' });
      }
    });
  } else {
    // Window gained focus → resume video
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab && tab.url && tab.url.includes("youtube.com/watch")) {
        chrome.tabs.sendMessage(tab.id, { action: 'resume' });
      }
    });
  }
});