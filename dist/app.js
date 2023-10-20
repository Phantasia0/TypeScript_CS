"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let user1;
class Person {
    constructor(n) {
        this.age = 10;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
user1 = new Person();
console.log(user1);
user1.greet('Hi there - I am');
//# sourceMappingURL=app.js.map