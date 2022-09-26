// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(async () => {
  let [color] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

