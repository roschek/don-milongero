import "./vendor/normalize.css";
import "./style.css";
// core version + navigation, pagination modules:
/*import Swiper, { Navigation, Pagination } from 'swiper';*/
import Swiper from 'swiper/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Inputmask, { isValid } from 'inputmask';



const telMAsk = document.querySelector('.input__tel')
const inputMask = new Inputmask('+7 (999) 999-99-99')

inputMask.mask(telMAsk)
    //  блок управления слайдерами
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// константы попапов
const prices = document.querySelector('.popup__prices')
const openPrice = document.querySelector('.open-price')
const closePricePopup = document.querySelector('.popup-price__close')
const openRegBttn = document.querySelectorAll('.reg-bttn')
const openReg = document.querySelector('.popup__form')
const closeReg = document.querySelector('.popup-form__close')
const submit = document.querySelector('.form__submit')
const form = document.forms.sign
const inputs = form.querySelectorAll('.form__input')
    // инстансы классов



//слушатели попапов
openPrice.addEventListener('click', () => { prices.classList.add('is__active') });
closePricePopup.addEventListener('click', () => { prices.classList.remove('is__active') });

openRegBttn.forEach(el => {
    el.addEventListener('click', () => {
        form.reset()
        openReg.classList.add('is__active')
        inputs.forEach((input) => {
            input.nextElementSibling.textContent = ' '
        })
        submit.removeAttribute('disabled', 'disabled')
    })
});
closeReg.addEventListener('click', () => { openReg.classList.remove('is__active') })

//плавная прокрутка к якорям
const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach((elem) => {
        elem.addEventListener('click', (evt) => {
            evt.preventDefault()
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
    //валидация 

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputName = form.querySelector('.input__name')
    const inputTel = form.querySelector('.input__tel')
    const inputMail = form.querySelector('.input__mail')
    if (inputName.value.trim().length !== 0 && inputTel.value.trim().length !== 0 && !inputMail.validity.typeMismatch) {
        submit.removeAttribute('disabled', 'disabled')
        openReg.classList.remove('is__active')
    }
    if (inputName.value.trim().length === 0) {
        inputName.nextElementSibling.textContent = 'Это обязательное поле'
        submit.setAttribute('disabled', true)
    }
    if (inputTel.value.trim().length === 0) {
        inputTel.nextElementSibling.textContent = 'Это обязательное поле'
        submit.setAttribute('disabled', true)
    }
    if (inputMail.value.trim().length === 0) {
        inputMail.nextElementSibling.textContent = 'Это обязательное поле'
        submit.setAttribute('disabled', true)
    }

    const formData = new FormData(form);
    fetch('mail.php', {
            method: "POST",
            body: formData
        })
        .then((data) => {
            console.log(data)
            console.log('отправлено')
        })

})


inputs.forEach((input) => {
    input.addEventListener('click', () => {
        input.nextElementSibling.textContent = '';
        submit.removeAttribute('disabled', 'disabled')

    })
})



AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

})