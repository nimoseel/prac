var Person = /** @class */ (function () {
    function Person(a, b) {
        this.name = a;
        this.age = b;
    }
    Person.prototype.add = function (숫자) {
        return 숫자 + 1;
    };
    return Person;
}());
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.name = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자배열 = [];
        var 문자배열 = [];
        param.forEach(function (i) {
            if (typeof i === 'number') {
                숫자배열.push(i);
            }
            else {
                문자배열.push(i);
            }
        });
        this.num = 숫자배열;
        this.str = 문자배열;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 77, 'wwwwww', 'park');
console.log(obj.num);
console.log(obj.str);
//type키워드와 차이점
// extends 가능 
var 네모 = { color: 'red', width: 100 };
var 학생 = { name: 'kim' };
var 선생 = { name: 'kim', age: 20 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var Prac = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
// private 부여된 속성을 클래스 밖에서 수정하고 싶을 때
var User = /** @class */ (function () {
    function User(a) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
    }
    User.prototype.성변경함수 = function () {
        this.familyName = 'lee';
    };
    return User;
}());
var 유저 = new User('소영');
유저.성변경함수();
// public 사용하여 this.어쩌구 생략가능
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var 자식 = new Person2('kim');
var 전문가 = /** @class */ (function () {
    function 전문가() {
        this.intro = 전문가.skill + '전문가입니다';
    }
    전문가.skill = 'js';
    return 전문가;
}());
var 영희 = new 전문가();
var 숙제2 = /** @class */ (function () {
    function 숙제2() {
    }
    숙제2.addOne = function (a) {
        return 숙제2.x + a;
    };
    숙제2.printX = function () {
        console.log(숙제2.x);
    };
    숙제2.x = 10;
    숙제2.y = 20;
    return 숙제2;
}());
