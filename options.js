let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
let addQuote = document.getElementById("addQuote").value;
let quotes = document.getElementById("quotes")

const handleButtonClick = (quotes, addQuote) => {
  quotes[quotes.length] = addQuote;
} 
  addQuote.addEventListener("click", handleButtonClick);
  // console.log(quotes)

//want to create functionalty to add a new quote to the quotes object in popup.js


