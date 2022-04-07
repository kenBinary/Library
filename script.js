let myManga = [];

function Manga(title, author, chapters, volumes) {
    this.title = title;
    this.author = author;
    this.chapters = chapters;
    this.volumes = volumes;
    this.finished = false;
}

function addMangatoLibrary(title, author, chapters, volumes) {
    const newManga = new Manga(title, author, chapters, volumes);
    myManga.push(newManga);
    addMangaToPage(newManga);
    // createContentCard();
    // do stuff here
}



function addMangaToPage(object) {
    const content = document.querySelector(".content-container");
    const div = document.createElement("div");
    div.classList.add("content-card");
    content.appendChild(div);
    const heading = document.createElement("h4");
    heading.textContent = `Title: ${object.title}`;
    div.appendChild(heading);
    const heading2 = document.createElement("h4");
    heading2.textContent = `Author: ${object.author}`;
    div.appendChild(heading2);
    const heading3 = document.createElement("h4");
    heading3.textContent = `Chapters: ${object.chapters}`;
    div.appendChild(heading3);
    const heading4 = document.createElement("h4");
    heading4.textContent = `Volumes: ${object.volumes}`;
    div.appendChild(heading4);
    const heading5 = document.createElement("h4");
    heading5.textContent = `Read: Yes`;
    div.appendChild(heading5);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener('click', (e) => {
        console.log(e.target.parentElement.remove());
    });
    div.appendChild(removeButton);
    const finishButton = document.createElement("button");
    finishButton.classList.add("finished-button");
    finishButton.textContent = "Finished";
    div.appendChild(finishButton);
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
addMangaButton.addEventListener('click', showForm);

function showForm() {
    const mangaForm = document.querySelector(".manga-form");
    if (mangaForm.classList.contains("manga-form-appear")) {
        mangaForm.classList.remove("manga-form-appear");
    } else {
        mangaForm.classList.add("manga-form-appear");
    }
}

const addNewManga = document.querySelector(".add-manga-button");

addNewManga.addEventListener("click", () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const chapters = document.querySelector("#chapters");
    const volumes = document.querySelector("#volumes");
    addMangatoLibrary(title.value, author.value, chapters.value, volumes.value);
    showForm();
});