"use strict";

function nameValidator(name) {
    const nameValid = /^[a-zA-Z\s]+$/
    return nameValid.test(name)
  }
  
  export default nameValidator
  