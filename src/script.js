const btnStart = document.querySelector('.btn-start')
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const btn4 = document.querySelector('.btn-4')

const field0 = document.querySelector('.calculator-field--0')
const field1 = document.querySelector('.calculator-field--1')
const field2 = document.querySelector('.calculator-field--2')
const field3 = document.querySelector('.calculator-field--3')
const field4 = document.querySelector('.calculator-field--4')


const hideShow = (hide, show) => {
  hide.classList.add('hide')
  show.classList.remove('hide')
}



btnStart.addEventListener('click', function() {hideShow(field0, field1)})
btn1.addEventListener('click', function() {hideShow(field1, field2)})
btn2.addEventListener('click', function() {hideShow(field2, field3)})
btn3.addEventListener('click', function() {hideShow(field3, field4)})
//btn4.addEventListener('click', function() {hideShow(field1, field2)})



