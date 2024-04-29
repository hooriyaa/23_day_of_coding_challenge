"use strict";
// // QUESTION 67:
// function mixedTypes(val1:number,val2:string){
//     return val1+ Number(val2);
// }
// let answer=mixedTypes(10,"5");
// console.log(answer);
// // QUESTION 68:
// function multiplyingDecimal(num1:number,num2:number){
//     return Math.round((num1*num2)*100)/100;
// }
// let answer2=multiplyingDecimal(1.3,3.2);
// console.log(answer2);
// QUESTION 69:
function divindindAndReminder(divident, divisor) {
    let quotient = Math.floor(divident / divisor);
    let reminder = divident % divisor;
    return { quotient, reminder };
}
console.log(divindindAndReminder(2, 7));
