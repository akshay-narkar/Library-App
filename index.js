const books = document.getElementById('books');
const form = document.getElementById('form');

const myLibrary = [];

function displayForm() {
  if (form.style.display === '') {
    form.style.display = 'block';
  } else {
    form.style.display = '';
  }
}

function displaybooks(book) {
  const li = document.createElement('li');
  li.className = 'collection-item';

  li.innerHTML = `
  <h5>Author: <span id="author">${book[0]}</span></h5>
  <p>Title: ${book[1]} </p>
  <p>Pages: ${book[2]}</span></p>
  <a class="delete"><i class="far fa-trash-alt"></i></a>
  <label>
  <input type="checkbox" />
  <span>Read</span>
</label>
  `;
  books.appendChild(li);
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}

function addBookToLibrary(e) {
  e.preventDefault();

  const [title, author, pages] = e.target.elements;
  myLibrary.push([title.value, author.value, pages.value]);

  while (books.hasChildNodes()) {
    books.removeChild(books.firstChild);
  }
  myLibrary.forEach(displaybooks);
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
