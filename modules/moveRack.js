import { loadBook } from '../modules/loadBook.js'
import { clearBook } from '../utils/clearBook.js'

export async function moveRack(bookId){
    let books = JSON.parse(localStorage.getItem('books'))
    let searchedIdIndex = await books.findIndex(res => {
        return res.id === parseInt(bookId)
    })
    let newRack = {
        id: books[searchedIdIndex].id,
        title: books[searchedIdIndex].title,
        author: books[searchedIdIndex].author,
        year: books[searchedIdIndex].year,
        isComplete: !books[searchedIdIndex].isComplete // adding ! to force reverse
    }
    books.splice(searchedIdIndex, 1)
    books.push(newRack)
    localStorage.removeItem('books')
    localStorage.setItem('books', JSON.stringify(books))
    clearBook()
    loadBook()
}