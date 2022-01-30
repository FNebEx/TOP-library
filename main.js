import { Book } from './js/book.js';
import { addBook } from './js/bookFunctions.js';

let form = document.querySelector("form");
let bookArea = document.querySelector(".book-area");
let bookArr = [];

function displayBooks() {
  bookArea.innerHTML = '';

  bookArr.forEach(book => {
    let card = document.createElement('div');
    let cardBody = document.createElement('div');
    let header = document.createElement('h3');
    let p = document.createElement('p');
    let button = document.createElement('button');
    let icon = document.createElement('i');

    let headerText = document.createTextNode(book.title);
    let pText = document.createTextNode(book.author);
    let buttonText = document.createTextNode(' Delete');

    let attr = document.createAttribute('data-feather');
    attr.value = 'trash-2';
    icon.setAttributeNode(attr);

    card.classList.add('card', 'mb-3');
    cardBody.classList.add('card-body');
    header.classList.add('card-title');
    p.classList.add('card-text');
    button.classList.add('btn', 'btn-danger');
    
    button.appendChild(icon);
    button.appendChild(buttonText);
    
    header.appendChild(headerText);
    p.appendChild(pText);
    
    cardBody.appendChild(header);
    cardBody.appendChild(p);
    cardBody.appendChild(button);

    card.appendChild(cardBody);

    bookArea.appendChild(card);

    button.onclick = () => {
      bookArr = bookArr.filter((item) => item.id !== book.id);
      displayBooks();
    };
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let fd = new FormData(form);
  let title = fd.get('title');
  let author = fd.get('author');

  if(title == '' || author == '') {
    alert('Please fill in fields.');
    return;
  }

  // addBook(title, author);
  addBook(bookArr, new Book(title, author));
  displayBooks();
  form.reset();
});