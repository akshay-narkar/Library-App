const books = document.getElementById('books');

const myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary(e) {
  e.preventDefault();
  const li = document.createElement('li');

  li.className = 'collection-item';
  const [title, author, pages] = e.target.elements;
  const book = new Book(title.value, author.value, pages.value);

  li.innerHTML = `
  <h5>Author: <span id="author">${book.author}</span></h5>
  <p>Title: ${book.title} </p>
  <p>Pages: ${book.pages}</span></p>
  <a class="delete"><i class="far fa-trash-alt"></i></a>
  <label>
  <input type="checkbox" />
  <span>Read</span>
</label>
  `;
  console.log(li);
  books.appendChild(li);
  myLibrary.push([title.value, author.value, pages.value]);

  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}
