let myManga = [];

function Manga(title, author, chapters, volumes, finished) {
    this.title = title;
    this.author = author;
    this.chapters = chapters;
    this.volumes = volumes;
    this.finished = finished;
}

function addMangatoLibrary(title, author, chapters, volumes, finished) {
    const newManga = new Manga(title, author, chapters, volumes, finished);
    myManga.push(newManga);
    addMangaToPage(newManga);
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
    heading5.textContent = `Read: ${object.finished? "yes":"no"}`;
    div.appendChild(heading5);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener('click', (e) => {
        console.log(e.target.parentElement.remove());
    });

    div.appendChild(removeButton);
    div.dataset.title = `${object.title}`;
    const finishButton = document.createElement("button");
    finishButton.classList.add("finished-button");

    finishButton.addEventListener('click', () => {
        if (finishButton.classList.contains("is-finished")) {
            finishButton.classList.remove("is-finished")
        } else {
            finishButton.classList.add("is-finished")
        }
    });








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

const addNewMangaButton = document.querySelector(".add-new-manga");
addNewMangaButton.addEventListener('click', showForm);

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
    const hasRead = document.querySelector("#is-finished");
    console.log(hasRead.checked);
    addMangatoLibrary(title.value, author.value, chapters.value, volumes.value, hasRead.checked);
    title.value = "";
    author.value = "";
    chapters.classList = "";
    volumes.value = "";
    chapters.value = "";
    hasRead.checked = false;
    showForm();
});
const removeAll = document.querySelector(".remove-all");
removeAll.addEventListener("click", () => {
    const cards = document.querySelectorAll(".content-card");
    cards.forEach((element) => {
        element.remove();
    });
});