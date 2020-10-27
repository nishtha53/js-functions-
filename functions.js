// find even odd number//
function evenodd(num1) {
    if (num1 % 2 == 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}
evenodd(100);

// program to generate fibonacci series up to n terms//

let number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// check wether number is positive negative or zero.
function posNegZero() {
    let number = parseInt(prompt("Enter a number:"));
    if (number > 0) {
        console.log(" The number is positive");
    }
    else if (number == 0) {
        console.log("The Number is Zero");
    }
    else {
        console.log("The Number is Negative");
    }
}
posNegZero();

// area of triangle //
function area() {
    var baseValue = 20;
    var heightValue = 10;
    console.log((baseValue * heightValue) / 2);
}
area();

// kilo to miles //
var kilogram = 8;
function miles() {
    return kilogram * 0.62137;
}
console.log(miles());


// Area of rectangle //
var width = 8;
var length = 6;
function rect() {
    return width * length;
}
console.log(rect());

//area of Square //
var a = 8;
var a = 6;
function Square() {
    return a * a;
}
console.log(Square());


// area of parellogram //
var base = 20;
var verticalheight = 15;
function parr() {
    return base * verticalheight;
}
console.log(parr());

// area of circle //
var r1 = 10;
var r2 = 10;
function circle() {
    return 3.14 * r1 * r2
}
console.log(circle());

// celsius to  fahrenheit.
var celsius = 2.5;
var fahrenheit = 5;
function celcius() {
    return (celsius * 1.8) + 32
}

// variable swap
var a = 5
var b = 6
function swap() {
    a = a + b
    b = a - b
    a = a - b
    console.log(a);
    console.log(b);
}
swap();


// check Prime number //
function isPrime(num) {

    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {

            if (num % i !== 0) {
                return true;
            }
            else if (num === i * i) {
                return false
            }
            else {
                return false;
            }
        }
    } else {
        return false;
    }

}
console.log(isPrime(34));

// leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
// take input
let year = prompt('Enter a year:');

checkLeapYear(year);

// find square of number
function squareOfNo() {
    var a = prompt("Enter a value");
    console.log(a * a)
}
squareOfNo();

// reverse number //

function revInt(num) {

    let val = num.toString().split('').reverse().join('');

    if (val.endsWith('-')) {
        val = '-' + val;
        return parseInt(val);
    }
    return parseInt(val);
}

console.log(revInt(123));






















