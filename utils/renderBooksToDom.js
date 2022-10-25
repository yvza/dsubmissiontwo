export function renderBooksToDom(books, isFound){
    let unreadBookDom = document.getElementById('unread-data')
    let legibleBookDom = document.getElementById('legible-data')
    
    let unreadBookItemHtml = ""
    let legibleBookItemHtml = ""

    if (isFound) {
        books.map(res => {
            if (res.isComplete) {
                legibleBookItemHtml += "<section class='book'> \
                    <section> \
                        <h1>"+res.title+"</h1> \
                        <h6>Penulis: "+res.author+"</h6> \
                        <h6>Tahun: "+res.year+"</h6> \
                    </section> \
                    <section class='control'> \
                        <button type='button' class='moveRack' value='"+res.id+"'>Tandai Belum Dibaca</button> \
                        <button type='button' value='"+res.id+"'>Hapus Buku</button> \
                    </section> \
                </section>"
            } else {
                unreadBookItemHtml += "<section class='book'> \
                    <section> \
                        <h1>"+res.title+"</h1> \
                        <h6>Penulis: "+res.author+"</h6> \
                        <h6>Tahun: "+res.year+"</h6> \
                    </section> \
                    <section class='control'> \
                        <button type='button' class='moveRack' value='"+res.id+"'>Tandai Belum Dibaca</button> \
                        <button type='button' value='"+res.id+"'>Hapus Buku</button> \
                    </section> \
                </section>"
            }
        })
    }

    if (books.length == 0) {
        unreadBookItemHtml = "<section class='book'> \
            <section> \
                <h1>Data buku masih kosong</h1> \
            </section> \
        </section>"
        legibleBookItemHtml = "<section class='book'> \
            <section> \
                <h1>Data buku masih kosong</h1> \
            </section> \
        </section>"
    }

    if ( unreadBookItemHtml == '' ) unreadBookItemHtml = "<section class='book'> \
        <section> \
            <h1>-</h1> \
        </section> \
    </section>"

    if ( legibleBookItemHtml == '' ) legibleBookItemHtml = "<section class='book'> \
        <section> \
            <h1>-</h1> \
        </section> \
    </section>"

    unreadBookDom.insertAdjacentHTML("afterbegin", unreadBookItemHtml)
    legibleBookDom.insertAdjacentHTML("afterbegin", legibleBookItemHtml)
}