"use strict";

function renderInput(submit) {
    if (localStorage.getItem('name')) {
        renderWelcomeMessage(localStorage.getItem('name'))
    } else {
        const question = document.createElement('h4')
        question.innerText = 'Hi, what is your name?'

        const input = document.createElement('input')
        input.type = 'text'
        input.placeholder = 'Enter your name'

        const button = document.createElement('button')
        button.innerText = 'OK'
        button.onclick = submit

        const container = document.createElement('div')
        document.body.prepend(container)
        container.appendChild(question)
        container.appendChild(input)
        container.appendChild(button)
    }

}

function renderWelcomeMessage(name) {
    const div = document.querySelector('div')
    if (div) {
        div.remove()
    }

    const greetingDiv = document.createElement('div')
    const greeting = document.createElement('h3')
    
    greeting.textContent = `Hello, ${name}`
    localStorage.setItem('name', name)

    document.body.prepend(greetingDiv)
    greetingDiv.appendChild(greeting)
}

export {
    renderInput,
    renderWelcomeMessage
}