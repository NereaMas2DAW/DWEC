let numero, mult3, mult5, divisible;
numero=prompt('Introduce un numero')

divisible = (numero%2==0) ? ' es par' : ' es impar';
mult3 = (numero%3==0) ? ' es múltiplo de tres' : '';
mult5 = (numero%5==0) ? ' es múltiplo de cinco. ' : '';

alert('El numero '+ numero + divisible + mult3 + mult5)