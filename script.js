let myManga = [];

function Manga(title, author, chapters, volumes) {
    this.title = title;
    this.author = author;
    this.chapters = chapters;
    this.volumes = volumes;
    this.finished = false;
}

function addMangatoLibrary(title, author, chapters, volumes) {
    // var title = window.prompt("Enter your title: ");
    // var author = window.prompt("Enter your author: ");
    // var chapters = window.prompt("Enter your chapters: ");
    // var volumes = window.prompt("Enter your volumes: ");
    const newManga = new Manga(title, author, chapters, volumes);
    myManga.push(newManga);
    addMangaToPage(newManga);
    // do stuff here
}



function addMangaToPage(object) {
    const content = document.querySelector(".content-container");
    const div = document.createElement("div");
    div.textContent = object.title + object.author + object.chapters + object.volumes;
    content.appendChild(div);
}

function addAllMangaToPage() {
    myManga.forEach(element => {
        const content = document.querySelector(".content-container");
        const div = document.createElement("div");
        div.textContent = object.title + object.author + object.chapters + object.volumes;
        content.appendChild(div);
    });
}

const addMangaButton = document.querySelector(".add-new-manga");
addMangaButton.addEventListener('click', () => {
    const mangaForm = document.querySelector(".manga-form");
    if (mangaForm.classList.contains("manga-form-appear")) {
        mangaForm.classList.remove("manga-form-appear");
    } else {
        mangaForm.classList.add("manga-form-appear");
    }
});

const addNewManga = document.querySelector(".add-manga-button");
addNewManga.addEventListener("click", () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const chapters = document.querySelector("#chapters");
    const volumes = document.querySelector("#volumes");
    addMangatoLibrary(title.value, author.value, chapters.value, volumes.value);
});