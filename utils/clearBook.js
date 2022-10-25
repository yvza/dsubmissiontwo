export function clearBook(){
    let unread = document.getElementById('unread-data')
    let legible = document.getElementById('legible-data')
    while (unread.firstChild) unread.removeChild(unread.firstChild)
    while (legible.firstChild) legible.removeChild(legible.firstChild)
}