var searchInput = document.querySelector('.search__input')
var bookList = document.querySelector('.book__list') //ul
var wrapper = document.querySelector('.wrapper');
var addInput = document.querySelector('.add__input')

var books = checkLocaleStorage() || ['HTML','Css','Javascript'];

function checkLocaleStorage() {
    var localBooks = JSON.parse(localStorage.getItem('books'));
    if (localBooks) {
        return localBooks;
    }
    return false;
};

function addBook(books) {

    bookList.innerHTML = '';

    for (i = 0; i < books.length; i++) {
        bookList.innerHTML += `
        <li class="book__item">
                        <span>${books[i]}</span>
                        <button class="delete__icon" onclick="deleteItem(${[i]})">
                            <img src="./assets/images/Ic_delete_48px.svg (1).svg" alt="Delete Icon">
                        </button>
                    </li> 
        `
    }
};

addBook(books);

function add(e) {
    e.preventDefault();
    if (addInput.value === "") {
        return;
    }

    var bookTitle = addInput.value;
    
    books.push(bookTitle);

    addBook(books);

    addInput.value = '';
};

function deleteItem(e) {
    books.splice(e, 1);
    addBook(books);
};

function preventSubmit(e) {
    e.preventDefault();
};

searchInput.addEventListener("input", (e) => {
    var text = e.target.value.toLowerCase();
    var matchedBooks = [];
    console.log(text)

    if (!text) {
      addBook(books);
    }
    
    matchedBooks = books.filter( book => {
        return book.toLowerCase().includes(text)
    })
    console.log (matchedBooks)
    addBook(matchedBooks);
} );
