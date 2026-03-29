const generateMemeBtn = document.querySelector(" .meme-btn");
const memeImg = document.querySelector("img");
const memeTitle = document.querySelector(" .meme-title");
const memeAuthor = document.querySelector(" .meme-author");

//a function to update our memes
const updateDetails = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

//to generate the meme and get it from an api on github using json format
const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);     //all the . from the api ref
        });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();