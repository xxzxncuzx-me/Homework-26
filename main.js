"use strict";

import nameValidator from "./validate.js";
import {
    renderInput,
    renderWelcomeMessage
} from "./elements.js";

if (localStorage.getItem('name')) {
    renderWelcomeMessage(localStorage.getItem('name'))
} else {
    renderInput(elementCreator)
}

function elementCreator() {
    const input = document.querySelector('input')
    const name = input.value

    if (nameValidator(name)) {
        renderWelcomeMessage(name)
    } else {
        input.value = ''
        input.style.borderColor = 'red'
    }
}