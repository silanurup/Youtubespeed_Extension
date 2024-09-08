// content.js
console.log('Content script loaded on YouTube');

function skipAds() {
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
  }
}

function speedUpAds() {
  const video = document.querySelector('video');
  if (video && video.src.includes('ad')) {
    video.playbackRate = 20;
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  skipAds();
  speedUpAds();
});

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      skipAds();
      speedUpAds();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
