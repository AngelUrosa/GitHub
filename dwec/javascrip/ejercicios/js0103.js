"use strict";

var factorial = prompt("5");

var sum = 1;

while (factorial!=1) {
    sum = sum*factorial;
    factorial--;
}
console.log(sum);