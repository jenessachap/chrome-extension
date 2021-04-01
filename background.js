let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

const quotes = {
  1: "You got this!!!",
  2: "You are learning",
  3: "You can do hard things",
}