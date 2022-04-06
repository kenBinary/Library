//take input from user
//take that input and push it to array


let myManga = [];

function Manga(title, author, chapters, volumes) {
    this.title = title;
    this.author = author;
    this.chapters = chapters;
    this.volumes = volumes;
}

function addMangatoLibrary() {
    var title = window.prompt("Enter your title: ");
    var author = window.prompt("Enter your author: ");
    var chapters = window.prompt("Enter your chapters: ");
    var volumes = window.prompt("Enter your volumes: ");
    const newManga = new Manga(title, author, chapters, volumes);
    myManga.push(newManga);
    // do stuff here
}