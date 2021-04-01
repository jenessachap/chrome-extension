// Initialize button with users's prefered color
const quotes = {
  0: "DO IT!!!",
  1: "You got this!!!",
  2: "You are learning",
  3: "You can do hard things",
}

let changeColor = document.getElementById("changeColor");




chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });


  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

changeColor.addEventListener('click',() => {
    // if (i >= quotes.length) i = 0;
    changeColor.innerHTML = quotes[Math.floor(Math.random() * Object.keys(quotes).length)];
    console.log(Math.floor(Math.random() * quotes.length), quotes.length)
})
// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
