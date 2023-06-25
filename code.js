let celciusInput = document.querySelector('#celcius > input')

let fahrehnhiteInput = document.querySelector('#fahrenhite > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

/* Celcious to fahrehnhite and kelvin */ 
celciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrehnhiteInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

/*fahrehnhite to celcius and kelvin */
fahrehnhiteInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrehnhiteInput.value)
    let cTemp = (fTemp -32)*(5/9) 
    let kTemp = (fTemp -32)*(5/9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})
/*kelvin to celcius and fahrenhite  */

kelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15)*(9/5)+32

    fahrehnhiteInput.value = roundNumber(fTemp)
    celciusInput.value = roundNumber(cTemp)
})

btn.addEventListener('click',()=>{
    celciusInput.value =" "
    fahrehnhiteInput.value =" "
    kelvinInput.value = " "
})