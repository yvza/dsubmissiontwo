import { clearBook } from '../utils/clearBook.js'
import { renderBooksToDom } from '../utils/renderBooksToDom.js'
import { loadBook } from './loadBook.js'

export async function searchBook(userInput) {
    if (userInput != '') {
        if (localStorage.getItem('books')) {
            let books = JSON.parse(localStorage.getItem('books'))
            let searchedStringIndex = await books.findIndex(res => {
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
    } else {
        clearBook()
        loadBook()
    }
}