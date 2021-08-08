"use strict";
class RangeValidator {
    constructor(from, to) {
        if(isNaN(from) || typeof from !== "number") {
            throw TypeError("from must be a number")
        }
        if(isNaN(to) || typeof to !== "number") {
            throw TypeError("to must be a number")
        }
        if (from > to) {
            throw RangeError("from must be less than to")
        }
        if (to < from) {
            throw RangeError("to must be more than from")
        }
        this._from = from
        this._to = to
    }
    get from() {
        return this._from
    }
    set from(value) {
        this._from = value
    }
    get to() {
        return this._to
    }
    set to(value) {
        this._to = value
    }
    getterRange () {
        let range = []
        for (let i = this._from ; i <= this._to ; i++) {
            range.push(i)
        }
        return range
    }
    validate (number) {
        let range = this.getterRange()
        for (let i = 0 ; i <= range.length ; i++) {
            if (number === range[i]) {
                return number
            }
            if (number !== range[i] && range[i] === this[this._to] ) {
                throw RangeError("number is not in range")
            }
        }
    }
}
    
const myRange1 = new RangeValidator(5, 25)

