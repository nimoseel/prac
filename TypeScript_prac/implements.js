// class 타입 확인하고 싶을 때 interface 문법 사용 + implements
var 에어컨 = /** @class */ (function () {
    function 에어컨(a) {
        this.price = 1000;
        this.model = a;
    }
    return 에어컨;
}());
var 비스포크에어컨 = new 에어컨('newmodel');
var 냉장고 = /** @class */ (function () {
    function 냉장고() {
    }
    냉장고.prototype.tax = function (x) {
        return x * 0.2;
    };
    return 냉장고;
}());
