const input = document.querySelector('#input-box')
const result = document.querySelector('#result-box')
const inputSelect = document.querySelector('#input-dropdown')
const resultSelect = document.querySelector('#result-dropdown')

inputSelect.addEventListener('change', resultChange)
resultSelect.addEventListener('change', insertChange)

function resultChange() {
    if(
        inputSelect.selectedOptions[0].value ===
        resultSelect.selectedOptions[0].value
    ) {
        if(resultSelect.selectedIndex < 2) {
            resultSelect.selectedIndex +- 1
        } else {
            resultSelect.selectedIndex = 0
        }
    }
}

function insertChange() {
    if(
    resultSelect.selectedOptions[0].value ===
    inputSelect.selectedOptions[0].value
    ){
        if(inputSelect.selectedIndex < 2){
            inputSelect.selectedIndex +- 1
        }else {
            inputSelect.selectedIndex = 0
        }
    }
}

function converter() {
    if(input.value === '') {
        result.value = ''
        alert('Please enter a valid value in the inputbox')
    }
    else if(
        inputSelect.selectedOptions[0].value === 'Celcius' &&
        resultSelect.selectedOptions[0].value === 'Farenheit'
    ) {
        result.value = ((Number(input.value) * 9) / 5 + 32).toFixed(2) + ' ' + 'F'
        console.log(result.value)
    }
    else if(
        inputSelect.selectedOptions[0].value === 'Farenheit' &&
        resultSelect.selectedOptions[0].value === 'Celcius'
    ){
        result.value = 
            (((Number(input.value) - 32) * 5) / 9).toFixed(2) + ' ' + 'C'
            console.log(result.value)
    }
    else if(
        inputSelect.selectedOptions[0].value === 'Celcius' &&
        resultSelect.selectedOptions[0].value === 'Kelvin'
    ){
        result.value = (Number(input.value) + 273.15).toFixed(2) + ' ' + 'K'
        console.log(result.value)
    }
    
    else if(
        inputSelect.selectedOptions[0].value === 'Kelvin' &&
        resultSelect.selectedOptions[0].value === 'Celcius'
    ){
        result.value = (Number(input.value) - 273.15).toFixed(2) + ' ' + 'C'
        console.log(result.value)
    }

    else if(
        inputSelect.selectedOptions[0].value === 'Farenheit' &&
        resultSelect.selectedOptions[0].value === 'Kelvin'
    ){
        result.value = (((Number(input.value) - 32) * 5) / 9 + 273.15).toFixed(2) + ' ' + 'K'
        console.log(result.value)
    }

    else if(
        inputSelect.selectedOptions[0].value === 'Kelvin' &&
        resultSelect.selectedOptions[0].value === 'Farenheit'
    ){
        result.value = (((Number(input.value) - 273.15) * 9) / 5 + 32).toFixed(2) + ' ' + 'F'
        console.log(result.value)
    }
}
let CelciusInput = document.querySelector('#Celcius>input')
let FahrenheitInput = document.querySelector('#Fahrenheit>input')
let btn = document.querySelector('.button button')
function roundNumber(number){
    return Math.round(number*100)/100
}
CelciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(CelciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    FahrenheitInput.value = roundNumber(fTemp)
})
FahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(FahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    CelciusInput.value = roundNumber(cTemp)
})
btn.addEventListener('click',()=>{
    CelciusInput.value = ""
    FahrenheitInput.value = ""
})