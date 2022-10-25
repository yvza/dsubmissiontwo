import { renderBooksToDom } from '../utils/renderBooksToDom.js'

export function loadBook(){
    if (localStorage.getItem('books')) {
        let books = JSON.parse(localStorage.getItem('books'))
        renderBooksToDom(books, 1)
    } else {
        renderBooksToDom([], 0)
    }
}