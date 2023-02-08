class CounterController {

    #currentDate;
    #interval;
    #inputDateEl;
    #buttonStartEl;
    #resetButtonEl;
    #localeBr;

    constructor(inputDateEl, buttonStartEl, buttonResetEl) {
        this.setInputDateEl = inputDateEl 
        this.setButtonStartEl = buttonStartEl
        this.setButtonResetEl = buttonResetEl
        this.setLocale = "pt-BR"

        this.saveCurrentDate()
        this.startButton()
        this.resetButton()
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

    resetButton() {
        this.getButtonResetEl.addEventListener('click', e => {
            this.reset()
        })
    }

    start() {
        let inputValue = this.getInputDateEl.value
        let targetDate = new Date(inputValue).getTime() 
        let dateNow = new Date()
        let currentDate = new Date(dateNow.getTime() - dateNow.getTimezoneOffset() * 60000);

        if(targetDate < currentDate) {
            alert("Você deve inserir uma data maior que a atual!")
            this.saveCurrentDate()
        } else {
            this.setInterval = setInterval(() => {
                this.countDays(targetDate, currentDate, dateNow, inputValue)
            });

            document.querySelector(".home").style.display = "none"
            document.querySelector(".counter").style.display = "flex"
        }
    }

    countDays(targetDate, currentDate, dateNow, inputValue) {
        targetDate = new Date(inputValue).getTime();
        dateNow = new Date();
        currentDate = new Date(dateNow.getTime() - dateNow.getTimezoneOffset() * 60000);

        let secondsDiff = (targetDate - currentDate) / 1000
        let days = Math.floor(secondsDiff / 86400) 
        secondsDiff = secondsDiff % 86400;

        let hours = Math.floor(secondsDiff / 3600)
        secondsDiff = secondsDiff % 3600;

        let minutes = Math.floor(secondsDiff / 60)
        let seconds = Math.floor(secondsDiff % 60)

        days = document.getElementById("days").innerHTML = days
        hours = document.getElementById("hours").innerHTML = hours
        minutes = document.getElementById("minutes").innerHTML = minutes
        seconds = document.getElementById("seconds").innerHTML = seconds
    }

    setTimeInPlace(value) {
        this.getInputDateEl.value = value;
    }
    
    reset() {
        clearInterval(this.getInterval)
        document.querySelector(".home").style.display = "flex"
        document.querySelector(".counter").style.display = "none"
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

    get getButtonResetEl() {
        return this.#resetButtonEl
    }
    set setButtonResetEl(value) {
        this.#resetButtonEl = value
    }

    get getLocale() {
        return this.#localeBr
    }
    set setLocale(value) {
        this.#localeBr = value
    }

    get getInterval() {
        return this.#interval
    }
    set setInterval(value) {
        this.#interval = value
    }

}