import { loadBook } from '../modules/loadBook.js'
import { clearBook } from '../utils/clearBook.js'

export async function deleteBook(bookId) {
    let books = JSON.parse(localStorage.getItem('books'))
    let searchedIdIndex = await books.findIndex(res => {
        return res.id === parseInt(bookId)
    })
    books.splice(searchedIdIndex, 1)
    localStorage.removeItem('books')
    localStorage.setItem('books', JSON.stringify(books))
    clearBook()
    loadBook()
}