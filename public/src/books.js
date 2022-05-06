function findAuthorById(authors, id) {
  /* Match author info to author id */
  let ans = authors.find((entry) => entry.id === id)
  return ans
}

function findBookById(books, id) {
  /* Match book info to book id */
  let ans = books.find((entry) => entry.id === id)
  return ans
}

function partitionBooksByBorrowedStatus(books) {
  /* Split up books into two list based on availability */
  const checkedOut = books.filter((book) => {
    return book.borrows.some((entry) => !entry.returned)
    })
  const notCheckedOut = books.filter((book) => {
    return book.borrows.every((entry) => entry.returned)
    })
  const ans = [[...checkedOut],[...notCheckedOut]]
  return ans
}

function getBorrowersForBook(book, accounts) {
  /* Returns the info for the last 10 borrowers for a book */
  let data = []
  book.borrows.forEach((borrow) => {
    let entry = accounts.find((user) =>{
      return user.id === borrow.id
    })
    entry.returned = borrow.returned
    data.push(entry)
  })
  const ans = data.slice(0,10)
  return ans
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
