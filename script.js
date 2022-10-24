'use strict'

window.addEventListener('DOMContentLoaded', (event) => {
    let imgSocialLink = document.getElementsByClassName('link')
    imgSocialLink[0].addEventListener('click', function(){
        window.open('http://github.com/yvza', '_blank').focus()
    })
    imgSocialLink[1].addEventListener('click', function(){
        window.open('https://stackoverflow.com/users/8111050/yuza', '_blank').focus()
    })
})