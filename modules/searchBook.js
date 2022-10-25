import { clearBook } from '../utils/clearBook.js'
import { renderBooksToDom } from '../utils/renderBooksToDom.js'

export function searchBook(userInput) {
    if (localStorage.getItem('books')) {
        let books = JSON.parse(localStorage.getItem('books'))
        let searchedStringIndex = books.findIndex(res => {
            return res.title === userInput
        })
        if (typeof books[searchedStringIndex] != 'undefined') {
            console.log(books[searchedStringIndex])
            clearBook()
            renderBooksToDom([books[searchedStringIndex]], 1)
        } else {
            clearBook()
            renderBooksToDom(books, 0)
            // console.log('Buku tidak ditemukan')
        }
    } else {
        clearBook()
        renderBooksToDom([], 0)
        // console.log('Data buku masih kosong')
        // data buku masih kosong
    }
}