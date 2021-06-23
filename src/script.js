const btnStart = document.querySelector('.btn-start')
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const btn4 = document.querySelector('.btn-4')
const btnRestart = document.querySelector('.btn-restart')

const field0 = document.querySelector('.calculator-field--0')
const field1 = document.querySelector('.calculator-field--1')
const field2 = document.querySelector('.calculator-field--2')
const field3 = document.querySelector('.calculator-field--3')
const field4 = document.querySelector('.calculator-field--4')


const radio1 = document.getElementById('radio1')
const radio2 = document.getElementById('radio2')
const radio3 = document.getElementById('radio3')
const radio4 = document.getElementById('radio4')

const age = document.getElementById('age')
const weight = document.getElementById('weight')

let user = {
  pregnantWoman: false,
  age: Number,
  exercise: false,
  weight: Number,

}

//console.log(radioInput.value);

const getAnswer = () => {
  field0.classList.add('hide')
  field4.classList.add('hide')
  field1.classList.remove('hide')

  
  btn1.addEventListener('click', function(){
    if(radio1.checked){
      user.pregnantWoman = true
      getWeight()
    } if (radio2.checked) {
      getAge()
    }
  })
}

const getWeight = () => {
  field1.classList.add('hide')
  field3.classList.add('hide')
  field4.classList.remove('hide')
  
  let grams
  let resultText = document.querySelector('.result-text')

  btn4.addEventListener('click', function() {

  if (weight.value === ""){
  
    swal("Ups...", "Para continuar ingresa un valor", "error");
  } else {

      if(user.pregnantWoman === true) {
        grams = 1.5
        let result = grams * parseFloat(weight.value)
        resultText.textContent = `Debes consumir ${result} gramos de proteina al día`
        //console.log(`Debes consumir ${result} gramos de proteina al día`);
      } else if (user.age <= 5) {
        grams = 2
        let result = grams * parseFloat(weight.value)
        resultText.textContent = `Debes consumir ${result} gramos de proteina al día`
        //console.log(`Debes consumir ${result} gramos de proteina al día`);
      } else if (user.age > 5 && user.age<= 18) {
        grams = 1.5
        let result = grams * parseFloat(weight.value)
        resultText.textContent = `Debes consumir ${result} gramos de proteina al día`
        //console.log(`Debes consumir ${result} gramos de proteina al día`);
      } else if (user.age >= 50){
        grams = 1.5
        let result = grams * parseFloat(weight.value)
        resultText.textContent = `Debes consumir ${result} gramos de proteina al día`
        //console.log(`Debes consumir ${result} gramos de proteina al día.`);
      } else if (user.age > 18 && user.age < 50){
        if(user.exercise == true) {
          grams = 1.4
          grams2 = 1.7
          let result = grams * parseFloat(weight.value)
          let result2 = grams2 * parseFloat(weight.value)
          resultText.textContent = `Debes consumir entre ${result} y ${result2} gramos de proteina al día.`
          //console.log(`Debes consumir entre ${result} y ${result2} gramos de proteina al día.`);
        } else {
          grams = 1
          let result = grams * parseFloat(weight.value)
          resultText.textContent = `Debes consumir ${result} gramos de proteina al día ya que no haces ejercicio, sin embargo deberias empezar a hacerlo si quieres cuidar mejor tu salud.`
          //console.log(`Debes consumir ${result} gramos de proteina al día ya que no haces ejercicio, sin embargo deberias empezar a hacerlo si quieres cuidar mejor tu salud.`);
        }
      }
    }

    let calculatorResult = document.querySelector('.calculator-result')
    let advices = document.querySelector('.advices-container')

    calculatorResult.classList.remove('hide')
    advices.classList.remove('hide')
  })
}

const getAge = () => {
  field1.classList.add('hide')
  field2.classList.remove('hide')
  btn2.addEventListener('click', function(){
    if (age.value === "") {
      swal("Ups...", "Para continuar ingresa un valor", "error")
    } else {
      user.age = parseInt(age.value)
      haveExercise()  
    }
  })
}

const haveExercise = () => {
  field2.classList.add('hide')
  field3.classList.remove('hide')
  btn3.addEventListener('click', function(){
    if(radio3.checked) {
      user.exercise = true
    }
    if(radio4.checked) {
      user.exercise = false
    }
    getWeight()
  })
}



btnStart.addEventListener('click', getAnswer)
btnRestart.addEventListener('click', getAnswer)




