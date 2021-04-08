
function findAccountById(accounts, id) {
  let found = accounts.find(account => account.id === id);
    return found;
}




function sortAccountsByLastName(accounts) {
  
  accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1 ));
  return accounts;
}




function getTotalNumberOfBorrows(account, books) {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    return book.borrows.length;
}
}



// helper function for getBooksPossessedByAccount

function addAuthor (authors, books) {
  for ( let i = 0; i < books.length; i++) {     // iterate through books array 
    for ( let j = 0; j < authors.length; j++) { // iterate through authors array 
    if ( books[i].authorId === authors[j].id) { // check if authorID in current book matches current author.id
      books[i].author = authors[j]; // adds to current book:         key: books[i].author     value: authors[j]
    } 
  }
    } 
    return books; 
  }



    

// return books: 


function getBooksPossessedByAccount(account, books, authors) {
  let result = books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) {  
    if ( book.borrows[i].id === account.id && book.borrows[i].returned === false) { acc.push(book); }
    } return acc;
    }, []);
    let author = addAuthor(authors, result);

return author; 


// declare new variable

// simplify the books array

// iterate over the borrow section of the books array

// add the current book to a new array if the borrows ID matches the given account ID and the book is still checked out

// return the new array
}





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
