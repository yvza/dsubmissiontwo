export function addBook(judul, penulis, tahun, status){
    let book = [
        {
            id: randomizeId(),
            title: judul,
            author: penulis,
            year: tahun,
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
                year: tahun,
                isComplete: status
            }
            localStorage.removeItem('books')
            books.push(exitingBookConstruct)
            localStorage.setItem('books', JSON.stringify(books))
            // trigger some notif, succes adding new book
        } else {
            // trigger some notif, error cz book was exist
        }
    } else {
        localStorage.setItem('books', JSON.stringify(book))
    }
}

function randomizeId(){
    return Math.floor(Math.random() * 1000000)
}