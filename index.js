"use strict";
class RangeValidator {
    constructor(from, to) {
        this.from = from
        this.to = to
    }
    get from() {
        return this._from
    }
    set from(value) {
        if(isNaN(value) || typeof value !== "number") {
            throw TypeError("from must be a number")
        }
        if (value > this.to) {
            throw RangeError("from must be less than to")
        }
        this._from = value
    }
    get to() {
        return this._to
    }
    set to(value) {
        if(isNaN(value) || typeof value !== "number") {
            throw TypeError("to must be a number")
        }
        if (value < this.from) {
            throw RangeError("to must be more than from")
        }
        this._to = value
    }
    get range() {
        return [`${this.from}`, `${this.to}`]
    }
    get betterRange() {
        let range = []
        for (let i = this._from ; i <= this._to ; i++) {
            range.push(i)
        }
        return range
    }
    validate (number) {
        if (number > this.to || number < this.from) {
            throw RangeError("number is not in range")
        }
        return number
    }
}
    
const myRange1 = new RangeValidator(5, 25)

