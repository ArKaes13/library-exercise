// Constructor and add to array

let library = [];

function book(name, author, pages, haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(book) {
    library.push(book);
}

// Enables form and overlay to add new book

const newButton = document.querySelector('.new-button');
const formContainer = document.querySelector('.form-container');
const overlay = document.querySelector('.overlay');

newButton.addEventListener('click', () => {
    formContainer.style.display = 'flex';
    overlay.style.display = 'block';
})

// Takes info from form and creates book object, resets values, and adds book card to the library.

const submitButton = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const authorInput = document.querySelector('#author');
const pageInput = document.querySelector('#pages');
const haveReadInput = document.querySelector('#haveRead');
const bookContainer = document.querySelector('.books-container');



submitButton.addEventListener('click', () => {
    let newBook = new book(nameInput.value, authorInput.value, pageInput.value, haveReadInput.checked);
    addBookToLibrary(newBook);

    for (i = 0; i < library.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        const bookName = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const readButton = document.createElement('button');
        readButton.classList.add('read-button');
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove';

        bookName.textContent = library[i].name;
        author.textContent = library[i].author;
        pages.textContent = library[i].pages;
        if (library[i].haveRead) {
            readButton.textContent = 'Read';
        } else {
            readButton.textContent = 'Not Read';
        }

        bookContainer.appendChild(bookCard);
        bookCard.appendChild(bookName)
        bookCard.appendChild(author)
        bookCard.appendChild(pages)
        bookCard.appendChild(readButton)
        bookCard.appendChild(removeButton)
    }

    nameInput.value = '';
    authorInput.value = '';
    pageInput.value = '';
    haveReadInput.checked = false;
    formContainer.style.display = 'none';
    overlay.style.display = 'none';
})



