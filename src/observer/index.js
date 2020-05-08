import {
    isObject
} from '../utils/index';

class Observer{
    constructor(value) {
        this.walk(value)
    }
    walk(data) {
        console.log(data);
        let keys = Object.keys(data);
        for (let i = 0; i < keys.length; i ++) {
            let key = keys[i];
            let value = data[key];
            defineReactive(data, key, value);
        }
    }
}

function defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
        get() {
            return value
        },
        set(newValue) {
            console.log('值变化了')
            if (newValue === value) return;
            value = newValue;
        }
    })
}

export function observe(data) {
    if (!isObject(data)) {
        return null;
    }
    console.log(data);
    return new Observer(data);
}