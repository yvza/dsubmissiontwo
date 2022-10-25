import { loadBook } from '../modules/loadBook.js'
import { clearBook } from '../utils/clearBook.js'

export async function editBook(bookId){
    let books = JSON.parse(localStorage.getItem('books'))
    let searchedIdIndex = await books.findIndex(res => {
        return res.id === parseInt(bookId)
    })
    let newTitle = prompt("Masukkan judul baru!")
    if (newTitle) {
        let newBook = {
            id: books[searchedIdIndex].id,
            title: newTitle.toString(),
            author: books[searchedIdIndex].author,
            year: books[searchedIdIndex].year,
            isComplete: books[searchedIdIndex].isComplete // adding ! to force reverse
        }
        books.splice(searchedIdIndex, 1)
        books.push(newBook)
        localStorage.removeItem('books')
        localStorage.setItem('books', JSON.stringify(books))
        clearBook()
        loadBook()
    } else {
        // null
        alert('Ubah judul dibatalkan!')
    }
}