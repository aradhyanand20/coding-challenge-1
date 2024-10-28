
let booklist = [
    {title:"book 1", author:"xyz", Year:2000},
    {title:"book 2", author:"ihg", Year:2005},
    {title:"book 3", author:"twu", Year:2011},
    {title:"book 4", author:"lkn", Year:2009},
];
  function EditedList(books){
  return books.filter(book => book.Year < 2010).map( book =>{
    book.author=book.author.split(' ').map(word =>word.toUpperCase()).join(''); 
  return book;
  });
}

 let editedList =EditedList(booklist);
 console.log(editedList);