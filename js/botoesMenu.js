window.onhashchange = function (e) {
    const oldUrl = e.oldURL.split('#')[1]
    const newUrl = e.newURL.split('#')[1]
    console.log(newUrl)
    const oldMenu = document.querySelector(`.navegacao a[href='#${oldUrl}']`)
    const newMenu = document.querySelector(`.navegacao a[href='#${newUrl}']`)
    
    oldMenu && oldMenu.classList.remove('selected')
    newMenu && newMenu.classList.add('selected')
    console.log(oldUrl, newUrl)
    console.log(oldMenu)
}
