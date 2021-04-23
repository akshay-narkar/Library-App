const books = document.getElementById('books');
const form = document.getElementById('form');

const myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function displayForm() {
  if (form.style.display === '') {
    form.style.display = 'block';
  } else {
    form.style.display = '';
  }
}

function addBookToLibrary(e) {
  e.preventDefault();
  const li = document.createElement('li');

  li.className = 'collection-item';
  const [title, author, pages] = e.target.elements;
  const book = new Book(title.value, author.value, pages.value);

  myLibrary.push(book);

  myLibrary.forEach(e => {
      li.innerHTML = `
  <h5>Author: <span id="author">${e.author}</span></h5>
  <p>Title: ${e.title} </p>
  <p>Pages: ${e.pages}</span></p>
  <a class="delete"><i class="far fa-trash-alt"></i></a>
  <label>
  <input type="checkbox" />
  <span>Read</span>
  </label>
  `;
  books.appendChild(li);
    
  });

  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}

function loadEventListners() {
  document.querySelector('#form').addEventListener('submit', addBookToLibrary);
  document.getElementById('addbtn').addEventListener('click', displayForm);
  document.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('delete')) {
      e.target.parentElement.parentElement.remove();
    }
  });
}

loadEventListners();
