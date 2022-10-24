export function addBook(judul, penulis, tahun, status){
    let book = [
        {
            judul: judul,
            penulis: penulis,
            tahun: tahun,
            status: status
        }
    ];

    if (localStorage.getItem('books')) {
        let books = JSON.parse(localStorage.getItem('books'))
        let searchExistingTitle = books.find(res => res.judul === judul)
        if (typeof searchExistingTitle == 'undefined') {
            let exitingBookConstruct = {
                judul: judul,
                penulis: penulis,
                tahun: tahun,
                status: status
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