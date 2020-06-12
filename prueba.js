let sumar = (num1, num2) => num1 + num2
let restar = (num1, num2) => num1 - num2


let calculadora = (operacion, num1, num2) => operacion (num1,num2);

console.log (calculadora(sumar, 34, 32));
console.log (calculadora(restar, 34, 32));