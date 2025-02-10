function pauseVideo() {
  const video = document.querySelector("video");
  if (video && !video.paused) {
    video.pause();
  }
}

function resumeVideo() {
  const video = document.querySelector("video");
  if (video) {
    video.play();
  }
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'pause') {
    pauseVideo();
  } else if (message.action === 'resume') {
    resumeVideo();
  }
});