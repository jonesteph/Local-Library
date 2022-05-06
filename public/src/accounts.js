function findAccountById(accounts, id) {
  /* function to find user with matching id */
  let ans = accounts.find((user) => user.id === id)
  return ans
}

function sortAccountsByLastName(accounts) {
  /* Sort by last name*/
  let sorted = accounts.sort((userA, userB) => userA.name.last.toLowerCase() > userB.name.last.toLowerCase() ? 1 : -1)
  return sorted
}

function getTotalNumberOfBorrows(account, books) {
  /* Counts number of borrows for a specified user */
  const keyId = account.id
  let count = 0
  books.forEach((book) => {
    const borrowList = book.borrows
    borrowList.forEach((entry) => {
      if(entry.id === keyId){
        count++
        }
      }
      )})
  return count
}


function getBooksPossessedByAccount(account, books, authors) {
  /* book and author info for books currently checked out by an account */
  let ans = books.filter((book) =>{
    return book.borrows.find((entry) =>{
      return (entry.id === account.id && !entry.returned)
    })
  })
  ans.forEach((book) => {
    return book.author = authors.find((person) => {
      return person.id === book.authorId
    })
  })
  return ans
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
