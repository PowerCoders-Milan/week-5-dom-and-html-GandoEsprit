function loadBooks(array) {

}

// Paste here your array
var books = [
    { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false }, 
    { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true }, 
    { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true }
  ];

  //var body = document.getElementsByTagName('body')[0];

  books.forEach(function(item){
      var bookTitle = document.createElement('p');
      var textTitle = document.createTextNode(item.title);
      bookTitle.appendChild(textTitle);
      bookTitle.style.backgroundColor = 'green';
      bookTitle.style.marginBottom = 0;
      bookTitle.style.color = 'white';
      bookTitle.style.fontSize = '1.3em';
      bookTitle.style.fontWeight = 'bold';

      document.body.appendChild(bookTitle);
    
      var author = document.createElement('p');
      textTitle = document.createTextNode(item.author);
      author.appendChild(textTitle);
      author.style.backgroundColor = 'yellow';
      author.style.marginTop = 0;

      document.body.appendChild(author);
  });

// This function will execute when the window loads
//window.onload = loadBooks(array);
