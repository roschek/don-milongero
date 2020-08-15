const prices = document.querySelector('.popup__prices')
const openPrice = document.querySelector('.open-price')
const closePricePopup = document.querySelector('.popup-price__close')
const openRegBttn = document.querySelectorAll('.reg-bttn')
const openReg = document.querySelector('.popup__form')
const closeReg = document.querySelector('.popup-form__close')

openPrice.addEventListener('click', function() { prices.classList.add('is__active') })
closePricePopup.addEventListener('click', () => { prices.classList.remove('is__active') })

openRegBttn.forEach(el => {
    el.addEventListener('click', () => { openReg.classList.add('is__active') })
});
closeReg.addEventListener('click', () => { openReg.classList.remove('is__active') })