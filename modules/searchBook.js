export function searchBook(userInput) {
    if (localStorage.getItem('books')) {
        let books = JSON.parse(localStorage.getItem('books'))
        let searchedStringIndex = books.findIndex(res => {
            return res.title === userInput
        })
        if (typeof books[searchedStringIndex] != 'undefined') {
            console.log(books[searchedStringIndex])
            clearBook()
            renderBooksToDom(books)
        } else {
            console.log('Buku tidak ditemukan')
        }
    } else {
        console.log('Data buku masih kosong')
        // data buku masih kosong
    }
}

function clearBook(){
    let unread = document.getElementById('unread-data')
    let legible = document.getElementById('legible-data')
    while (unread.firstChild) unread.removeChild(unread.firstChild)
    while (legible.firstChild) legible.removeChild(legible.firstChild)
}

function renderBooksToDom(books){
    books.map(res => {

    })
}