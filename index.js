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
    "no"
);
let book3 = new Book(
    "livre1 azertyyuipkpoc,znconolzncol",
    "auteur1 nlihlhblibl",
    50,
    "no"
);

//library.push(book1);
//library.push(book2);
//library.push(book3);
let formulaire = document.getElementById("myDIV");
let btn_submit = document.getElementById("btn_submit");
btn_submit.addEventListener('click', function() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let page = document.getElementById("page").value;
    let read = document.getElementById("read").value;

    let new_book = new Book(title, author, page, read);

    library.push(new_book);
    afficher();
});

afficher();


function addBookToLibrary(book) {
    library.push(book);
}

function isFunction(variableToCheck) {
    //If our variable is an instance of "Function"
    if (variableToCheck instanceof Function) {
        return true;
    }
    return false;
}

function afficher() {
    let table = document.getElementById("library");
    table.textContent = "";
    for (book in library) {
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
        create_button_delete(book, tr, table);
        create_button_read(book, tr, table);
    }
    remove_book();
    change_read_status();

}


function remove_book() {
    let btn_delete = document.getElementsByClassName("btn_delete");
    btn_delete = Array.from(btn_delete);
    btn_delete.forEach(btn_delete => {
        btn_delete.addEventListener('click', function() {
            let id = btn_delete.getAttribute("id");
            library.splice(id, 1);
            afficher();
        });
    });
}

function create_button_delete(index, line, table) {
    let td_button = document.createElement('td');
    td_button.innerHTML = "<button> Supprimer</button>";
    td_button.setAttribute("id", index);
    td_button.classList.add("btn_delete");
    line.append(td_button);
    table.append(line);
}

function create_button_read(index, line, table) {
    let td = document.createElement("td");
    td.innerHTML = "<button> (not)read</button>";
    td.classList.add("btn_read");
    td.setAttribute("id", index);
    line.append(td);
    table.append(line);
}

function change_read_status() {
    let btn_read = document.getElementsByClassName('btn_read');
    btn_read = Array.from(btn_read);
    btn_read.forEach(btn_read => {
        btn_read.addEventListener('click', function() {
            let id = btn_read.getAttribute('id');
            if (library[id]["read"] === "yes") {
                library[id]["read"] = "no";
            } else {
                library[id]["read"] = "yes";
            }
            afficher();
        });
    });
}

function save_library() {
    localStorage.setItem("library", library);
}