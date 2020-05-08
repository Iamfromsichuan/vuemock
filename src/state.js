import {
    initMixin
} from "./init";
import { observe } from './observer/index'

export function initState(vm) {
    const opts = vm.$options;

    if (opts.props) {
        initProps(vm)
    }
    if (opts.methods) {
        initMethod(vm)
    }
    if (opts.data) {
        initData(vm)
    }
    if (opts.computed) {
        initcomputed(vm)
    }
    if (opts.watch) {
        initWatch(vm)
    }
}

function initWatch(vm) {}

function initcomputed(vm) {}

function initData(vm) {
    let data = vm.$options.data;
    data = vm._data = typeof data === 'function' ?
        data.call(vm) : data;
        console.log(data);
    observe(data)
}

function initMethod(vm) {}

function initProps(vm) {}