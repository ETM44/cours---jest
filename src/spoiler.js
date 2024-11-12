let elements = document.querySelectorAll('.spoiler')

let createSpoilerButton = (element) => {
    // On crée la span.spoiler-content
    let span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = element.innerHTML

    // On crée le bouton
    let button = document.createElement('button')
    button.textContent = 'Afficher le spoiler'

    // On ajoute les éléments au DOM
    element.innerHTML = ''
    element.appendChild(button)
    element.appendChild(span)

    button.addEventListener('click', () => {
        button.parentNode.removeChild(button)
        span.classList.add('visible')
    })
}

for (let i = 0; i < elements.length; i++) {
    createSpoilerButton(elements[i])
}