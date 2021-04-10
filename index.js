
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
    // pass in the API URL
   return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json()) // returning the URL to the JSON
  .then(json => renderBooks(json)); // Chain method to avoke the function then into console log
  
  
 }
  
 function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
 }
  
 document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
 });
 