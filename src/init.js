import { initState } from './state';

export function initMixin(vm) {
    vm.prototype._init = function _init(options) {
        const vm = this;
        vm.$options = options;


        initState(vm); // 给Vue原型添加_init方法
    }
}