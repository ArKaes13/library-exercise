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
    const bookCard = document.createElement('div');
    const bookName = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');

    bookCard.classList.add('book-card');
    readButton.classList.add('read-button');
    removeButton.classList.add('remove-button');

    bookName.textContent = nameInput.value;
    author.textContent = authorInput.value;
    pages.textContent = pageInput.value;
    readButton.setAttribute('id', 'readButton');
    removeButton.textContent = 'Remove';

    if (haveReadInput.checked) {
        readButton.textContent = 'Read';
        readButton.classList.add('light-green');
    } else {
        readButton.textContent = 'Not Read';
        readButton.classList.add('light-red');
    }

    bookContainer.appendChild(bookCard);
    bookCard.appendChild(bookName);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);

    let newBook = new book(nameInput.value, authorInput.value, pageInput.value, haveReadInput.checked);
    addBookToLibrary(newBook);

    nameInput.value = '';
    authorInput.value = '';
    pageInput.value = '';
    haveReadInput.checked = false;
    formContainer.style.display = 'none';
    overlay.style.display = 'none';
})

// Enables the read button and remove button, remove button also deletes library item

bookContainer.addEventListener('click', (event) => {
    if (event.target.id === 'readButton') {
        if (event.target.textContent === 'Read') {
            event.target.textContent = 'Not Read';
            event.target.classList.add('light-red');
            event.target.classList.remove('light-green');
        } else {
            event.target.textContent = 'Read';
            event.target.classList.add('light-green');
            event.target.classList.remove('light-red');
        }
    } else if (event.target.className === 'remove-button') {
        var bookCard = event.target.parentElement;
        var parent = bookCard.parentNode;
        var indexNumber = Array.prototype.indexOf.call(parent.children, bookCard)

        library.splice(indexNumber, 1);
        event.target.parentElement.remove();
    }
})  



