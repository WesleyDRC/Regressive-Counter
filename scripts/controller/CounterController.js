
class CounterController {

    #currentDate;
    #inputDateEl;
    #localeBr;

    constructor(inputDateEl, startCouting) {
        this.setInputDateEl = inputDateEl 
        this.setLocale = "pt-BR"

        this.saveCurrentDate()
    }

    formatTime(date) {

        function addZero(n) {
            return n < 10 ? "0"+n : n
        }
        var result = date.getFullYear() +"-"+addZero(date.getMonth()+1)+"-"+ addZero(date.getDate())

        return result
    }

    saveCurrentDate() {
        this.setLocalDate = this.formatTime(this.getCurrenteDate)
    }

    

    get getLocalDate() {
        return this.getInputDataEl
    }
    set setLocalDate(value) {
        this.getInputDataEl.value = value;
    }

    get getCurrenteDate() {
       return new Date()
    }
    set setCurrentDate(value) {
        this.#currentDate = value
    }

    get getInputDataEl() {
        return this.#inputDateEl
    }
    set setInputDateEl(value) {
        this.#inputDateEl = value
    }

    get getLocale() {
        return this.#localeBr
    }
    set setLocale(value) {
        this.#localeBr = value
    }

}