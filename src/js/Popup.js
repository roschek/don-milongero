export default class Popup {
    constructor(popup) {
        this.popup = popup;
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    openPopup() {
        this.popup.classList.add('is__active')
    }

    closePopup() {
        this.popup.classList.remove('is__active')
    }
}