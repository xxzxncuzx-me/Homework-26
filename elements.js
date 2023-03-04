"use strict";

const container = document.createElement('div')
document.body.prepend(container)

function renderInput(submit) {
    if (container) {
        container.innerHTML= ""
    }
        const question = document.createElement('h4')
        question.innerText = 'Hi, what is your name?'

        const input = document.createElement('input')
        input.type = 'text'
        input.placeholder = 'Enter your name'

        const button = document.createElement('button')
        button.innerText = 'OK'
        button.onclick = submit
        
        container.appendChild(question)
        container.appendChild(input)
        container.appendChild(button)
}

function renderWelcomeMessage(name) {
    if (container) {
        container.innerHTML= ""
    }

    const greeting = document.createElement('h3')
    
    greeting.textContent = `Hello, ${name}`
    localStorage.setItem('name', name)

    container.appendChild(greeting)
}

export {
    renderInput,
    renderWelcomeMessage
}