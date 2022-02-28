/*
* File: script.js
* Author: Balogh Csenge
* Copyright: 2022, Balogh Csenge
* Group: Szoft_I_N
* Date: 2022-02-28
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/

const cl = console.log
const sideInput = document.getElementById('side')
const alphaInput = document.getElementById('alpha')
const submitButton = document.getElementById('submitButton')
const resultBox = document.getElementById('resultInput')
const resetButton = document.getElementById('resetButton')
const pi = Math.PI

submitButton.addEventListener('click', () => {
    let sideValue = sideInput.value 
    let alphaValue = alphaInput.value 

    const regExp = /^[0-9]+$/

    if (sideValue.match(regExp) && alphaValue.match(regExp)) {
    } else {
        alert("Hiba! Csak szám adható meg!")

        return 
    }

    let side = Number(sideValue)
    let alpha = Number(alphaValue)

    let alphaRad = alpha * (pi/180)

    let radius = (side * Math.sin(alphaRad)) / 2

    resultBox.value = radius.toLocaleString()

})

resetButton.addEventListener('click', () => {
    sideInput.value = ""
    alphaInput.value = ""
    resultBox.value = ""
})