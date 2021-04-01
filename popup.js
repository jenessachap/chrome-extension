// Initialize button with users's prefered color
const quotes = {
  0: "DO IT!!!",
  1: "You got this!!!",
  2: "You are learning.",
  3: "You can do hard things.",
  4: "You're so much stronger than your excuses.",
  5: "Don't quit.",
  6: "Don't limit yourself.",
  7: "Your passion is waiting for your courage to catch up.",
  8: "You are worthy.",
  9: "You are enough.",
  10: "You are not trying, you are doing!",
}

let changeQuote = document.getElementById("changeQuote");


changeQuote.addEventListener('click',() => {
    // if (i >= quotes.length) i = 0;
    changeQuote.innerHTML = quotes[Math.floor(Math.random() * Object.keys(quotes).length)];
    console.log(Math.floor(Math.random() * quotes.length), quotes.length)
})
// The body of this function will be execuetd as a content script inside the
// current page

