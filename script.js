'use strict'

import { addBook } from './modules/addBook.js'
import { searchBook } from './modules/searchBook.js'
import { loadBook } from './modules/loadBook.js'

window.addEventListener('DOMContentLoaded', (event) => {
    let imgSocialLink = document.getElementsByClassName('link')
    imgSocialLink[0].addEventListener('click', function(){
        window.open('http://github.com/yvza', '_blank').focus()
    })
    imgSocialLink[1].addEventListener('click', function(){
        window.open('https://stackoverflow.com/users/8111050/yuza', '_blank').focus()
    })

    let getAddBookButton = document.getElementById('addBook')
    getAddBookButton.addEventListener('click', function(e){
        e.preventDefault()
        let getJudul = document.getElementById('judul').value
        let getPenulis = document.getElementById('penulis').value
        let getTahun = document.getElementById('tahun').value
        let getStatus = document.getElementById('legible-checkbox').checked
        addBook(getJudul, getPenulis, getTahun, getStatus)
    })

    let getSearchBookButton = document.getElementById('searchBook')
    getSearchBookButton.addEventListener('click', function(e){
        e.preventDefault()
        let getSearchedString = document.getElementById('search').value
        searchBook(getSearchedString)
    })

    loadBook()
})