function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

let library = [];

function addBook() {
    let title = document.getElementById('titleInput').value;
    let author = document.getElementById('authorInput').value;
    let pages = parseInt(document.getElementById('pagesInput').value);
    let book = new Book(title, author, pages);
    library.push(book);
    displayLibrary();
}

function searchByTitle() {
    let title = document.getElementById('searchTitleInput').value;
    let results = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    displayResults(results);
}

function searchByAuthor() {
    let author = document.getElementById('searchAuthorInput').value;
    let results = library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    displayResults(results);
}

function filterBooksByPages() {
    let results = library.filter(book => book.pages > 100);
    displayResults(results);
}

function mapBooksInfo() {
    let results = library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`
    }));
    displayMappedResults(results);
}

function displayLibrary() {
    let libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';
    library.forEach(book => {
        let bookInfo = document.createElement('p');
        bookInfo.textContent = book.displayInfo();
        libraryDiv.appendChild(bookInfo);
    });
}

function displayResults(results) {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    results.forEach(book => {
        let bookInfo = document.createElement('p');
        bookInfo.textContent = book.displayInfo();
        resultsDiv.appendChild(bookInfo);
    });
}

function displayMappedResults(results) {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    results.forEach(book => {
        let bookInfo = document.createElement('p');
        bookInfo.textContent = `${book.title}, ${book.author}`;
        resultsDiv.appendChild(bookInfo);
    });
}
