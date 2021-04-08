function findAuthorById(authors, id) {
  let found = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) {
      found = author;
    }
  }
  return found;
}




function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}




function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const checkedOut = books.filter((book) =>
    book.borrows[0].returned === false);
  result.push(checkedOut);
  const returnedYes = books.filter((book) => 
    book.borrows[0].returned === true);
  result.push(returnedYes);
  return result;
}




function getBorrowersForBook(book, accounts) {
  //map over book.borrows
  return book.borrows.map(matchedAccount => {
    // for each borrowed book find the accountId that matches the borrowsId
    const borrowerArray = accounts.find(account => matchedAccount.id === account.id);
      // return object containing everything in the borrowerArray AND 
      // add a new key 'reutrned' with the returned status of matchedAccount as a value
    return {...borrowerArray, returned: matchedAccount.returned};
    }).slice(0, 10);
}





module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
