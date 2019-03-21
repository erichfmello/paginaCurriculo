function navegando (url, seletor) {
    if(!url || !seletor) return
    const elemento = document.querySelector(seletor)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            elemento.innerHTML = html
        })
}

document.querySelectorAll('[pagina-link]').forEach(links => {
    const url = links.attributes['pagina-link'].value
    const seletorDestino = links.attributes['pagina-destino'].value

    links.onclick = () => {
        navegando(url, seletorDestino)
    }
})