const prices = document.querySelector('.popup__prices')
const openPrice = document.querySelector('.open-price')
const closePricePopup = document.querySelector('.popup-price__close')

openPrice.addEventListener('click', function() { prices.classList.add('is__active') })
closePricePopup.addEventListener('click', () => { prices.classList.remove('is__active') })