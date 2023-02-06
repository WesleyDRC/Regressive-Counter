
class CounterController {

    #currentDate;
    #inputDateEl;
    #buttonStartEl;
    #localeBr;

    constructor(inputDateEl, buttonStartEl) {
        this.setInputDateEl = inputDateEl 
        this.setButtonStartEl = buttonStartEl
        this.setLocale = "pt-BR"

        this.saveCurrentDate()
        this.startButton()
    }

    formatTime(date) {

        function addZero(n) {
            return n < 10 ? "0"+n : n
        }
        var result = date.getFullYear() +"-"+addZero(date.getMonth()+1)+"-"+ addZero(date.getDate())

        return result
    }

    saveCurrentDate() {
        this.setTimeInPlace(this.formatTime(this.getCurrenteDate))
    }

    startButton() {
        this.getButtonStartEl.addEventListener('click', e => {
            this.start()
        })
    }

    start() {
        let inputValue = this.getInputDateEl.value
        let targetDate = new Date(inputValue).getTime() 
        let dateNow = new Date();
        let currentDate = new Date(dateNow.getTime() - dateNow.getTimezoneOffset() )

        if(targetDate < currentDate) {
            alert("oooo")
            this.saveCurrentDate()
        }
    }

    setTimeInPlace(value) {
        this.getInputDateEl.value = value;
    }

    get getCurrenteDate() {
       return new Date()
    }
    set setCurrentDate(value) {
        this.#currentDate = value
    }

    get getInputDateEl() {
        return this.#inputDateEl
    }
    set setInputDateEl(value) {
        this.#inputDateEl = value
    }

    get getButtonStartEl() {
        return this.#buttonStartEl
    }
    set setButtonStartEl(value) {
        this.#buttonStartEl = value
    }

    get getLocale() {
        return this.#localeBr
    }
    set setLocale(value) {
        this.#localeBr = value
    }

}