import { moveRack } from '../modules/moveRack.js'
import { deleteBook } from '../modules/deleteBook.js'
import { editBook } from '../modules/editBook.js'

export function reinitControlListener(){
    // listening to move rack button
    let getMoveRackButton = document.querySelectorAll('.moveRack')
    getMoveRackButton.forEach(button => {
        button.addEventListener('click', () => {
            let idBook = button.value
            moveRack(idBook)
        })
    })

    // listening to delete book button
    let getDeleteBookButton = document.querySelectorAll('.deleteBook')
    getDeleteBookButton.forEach(button => {
        button.addEventListener('click', () => {
            let idBook = button.value
            deleteBook(idBook)
        })
    })

    // listening to edit book button
    let getEditButton = document.querySelectorAll('.editTitle')
    getEditButton.forEach(button => {
        button.addEventListener('click', () => {
            let idBook = button.value
            editBook(idBook)
        })
    })
}