const getTheHtmlId = document.getElementById("demo");
const display = document.getElementById("display");

function displayText(){
    const text = "Other languages include java";
    getTheHtmlId.innerHTML= text;
}
display.addEventListener("click", displayText);

function hideText(){
    getTheHtmlId.hidden= text;
}
display.addEventListener("click", displayText);