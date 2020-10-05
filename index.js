function Book(title, author, nbre_page, read) {
    this.title = title;
    this.author = author;
    this.nbre_page = nbre_page;
    this.read = read;
}

Book.prototype.info = function() {
    if (read == "yes") {
        return (
            "The" + this.title + " by " + author + ", " + this.nbre_page + " read yet"
        );
    } else {
        return (
            "The" +
            this.title +
            " by " +
            author +
            ", " +
            this.nbre_page +
            " not read yet"
        );
    }
};

let library = [];

let book1 = new Book(
    "livre1 azertyyuipkpoc,znconolzncol",
    "auteur1 nlihlhblibl",
    50,
    "yes"
);
let book2 = new Book(
    "livre1 azertyyuipkpoc,znconolzncol",
    "auteur1 nlihlhblibl",
    50,
    "yes"
);
let book3 = new Book(
    "livre1 azertyyuipkpoc,znconolzncol",
    "auteur1 nlihlhblibl",
    50,
    "yes"
);
library.splice(0, book1, book2, book3);
afficher();

function addBookToLibrary() {}

function isFunction(variableToCheck) {
    //If our variable is an instance of "Function"
    if (variableToCheck instanceof Function) {
        return true;
    }
    return false;
}

function afficher() {
    let table = document.getElementById("library");
    for (let book in library) {
        let tr = document.createElement("tr");
        myBook = library[book];
        for (attr in myBook) {
            if (!isFunction(myBook[attr])) {
                let td = document.createElement("td");
                td.textContent = String(myBook[attr]);
                td.style.cssText = "text-align:center;";
                tr.append(td);
            }
        }
        table.append(tr);
    }
}

let btn_add = document.getElementById("btn-add");
let formulaire = document.getElementById("myDIV");
formulaire.style.display = "none";

btn_add.addEventListener("click", afficher_form);

function afficher_form() {
    if (formulaire.style.display == "none") {
        formulaire.style.display = "block";
    } else {
        formulaire.style.display = "none";
    }
}

let btn_submit = document.getElementById('btn_submit');
btn_submit.addEventListener('click', check);

function check() {

}