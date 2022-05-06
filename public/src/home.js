function getTotalBooksCount(books) {
  /* Counts books in a list */
  ans = books.length
  return ans
}

function getTotalAccountsCount(accounts) {
  /* Counts Accounts in a list */
  ans = accounts.length
  return ans
}

function getBooksBorrowedCount(books) {
  /* Counts books that are checked out */
  const checkedOut = books.filter((book) => {
    return book.borrows.some((entry) => !entry.returned)
    })
  const ans = checkedOut.length
  return ans
}

function getCounts(string, field, array) {
  /* Helper function for getMostCommonGenres */
  /* Counts # of occurances in list of string*/
  let filtered = array.filter((row) => {
    return row.genre === string
  })
  let ans = filtered.reduce((total,val) => {
    return total +=1
    }, 0)
  return ans
}

function getMostCommonGenres(books) {
  /* Counts each genre and sorts and displays top 5 */
  /* Utilizes the getCounts function */
  let genres = []
  let genresCounts = []
  books.forEach((book) => {
    if(!genres.includes(book.genre)) {
      genres.push(book.genre)
      return genres
    }
  })
  genres.forEach((genre) => {
    const name = genre
    const count = getCounts(genre,"genre",books)
    const object = {name, count}
    genresCounts.push(object)
  })
  let sortedGenresCounts = genresCounts.sort((optionA, optionB) => (optionA.count > optionB.count ? -1 : 1))
  let ans = sortedGenresCounts.slice(0, 5)
  return ans
}

function getMostPopularBooks(books) {
  /* Orders books by # of checkouts and displays top 5 */
  let unsorted = []
  books.forEach((book)=>{
    const name = book.title
    const count = book.borrows.length
    unsorted.push({name,count})
  }
  )
  let sortedBooks = unsorted.sort((optionA, optionB) => (optionA.count > optionB.count ? -1 : 1))
  let ans = sortedBooks.slice(0,5)
  return ans
}

function getMostPopularAuthors(books, authors) {
  /* Gets book checkout count for each author, and displays top 5 */
  let unsorted = []
  authors.map((person) => {
    const name = `${person.name.first} ${person.name.last}`
    let count = 0
    books.forEach((book) =>{
      if(person.id === book.authorId){
        count += book.borrows.length
      }
    })
    unsorted.push({name,count})
  })
  let matchingAuthors = unsorted.sort((optionA, optionB) => (optionA.count > optionB.count ? -1 : 1))
  let ans = matchingAuthors.slice(0,5)
  return ans
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
