import { randomizeId } from '../utils/idRandomizer.js'
import { loadBook } from '../modules/loadBook.js'
import { clearBook } from '../utils/clearBook.js'

export function addBook(judul, penulis, tahun, status){
    let book = [
        {
            id: randomizeId(),
            title: judul,
            author: penulis,
            year: parseInt(tahun),
            isComplete: status
        }
    ];

    if (localStorage.getItem('books')) {
        let books = JSON.parse(localStorage.getItem('books'))
        let searchExistingTitle = books.find(res => res.title === judul)
        if (typeof searchExistingTitle == 'undefined') {
            let exitingBookConstruct = {
                id: randomizeId(),
                title: judul,
                author: penulis,
                year: parseInt(tahun),
                isComplete: status
            }
            localStorage.removeItem('books')
            books.push(exitingBookConstruct)
            localStorage.setItem('books', JSON.stringify(books))
            clearBook()
            loadBook()
            // trigger some notif, succes adding new book
        } else {
            // trigger some notif, error cz book was exist
        }
    } else {
        localStorage.setItem('books', JSON.stringify(book))
        clearBook()
        loadBook()
    }
}