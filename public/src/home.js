
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
return books.reduce((acc, book) => (acc += (!book.borrows[0].returned)), 0);
// simplify the books array using .reduce and store the result in acc
  // acc starts at 0
  // check if the first index of book.borrows has NOT been returned
    // add 1 to acc  
}




function getMostCommonGenres(books) {
  //map over books to get an array of book genres
  const bookGenres = books.map((book) => book.genre);
  let result = [];
  //map over book genres
  bookGenres.map((genre) => {
    //for each genre, first check to see if genre already exists in array
    const genreLocation = result.findIndex((element) => element.name === genre);
    //second, if it exists, increase count by 1
    if (genreLocation >= 0) {
      result[genreLocation].count = result[genreLocation].count + 1;
      //else, if it doesn't exist, push a new genre object onto array with count of 1
    } else {
      result.push({ name: genre, count: 1 });
    }
  });
  result.sort((resultA, resultB) => resultB.count - resultA.count);
    return result.slice(0, 5);
  
}









function getMostPopularBooks(books) {
  return books.map(book => {
    return {name: book.title, count: book.borrows.length}
    
  }).sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0,5);
}





// It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

// Each object in the returned array has two keys:

// - The `name` key which represents the first and last name of the author.
// - The `count` key which represents the number of times the author's books have been borrowed.

function getMostPopularBooks(books) {
  return books.map(book => {
    return {name: book.title, count: book.borrows.length}
    
  }).sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0,5);
}





// It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

// Each object in the returned array has two keys:

// - The `name` key which represents the first and last name of the author.
// - The `count` key which represents the number of times the author's books have been borrowed.

function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];

  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const authorObject = { name: authorName, count: count };
    popularAuthors.push(authorObject);
  }

  return topFive(popularAuthors);
}

// Helper function
// Returns the top five items in the array
function topFive(array) {
  let result = array
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);

  return result;
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
