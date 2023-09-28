let numero, estado;
numero = prompt('Introduce un número:');

estado = (numero%2==0) ? 'par' : 'impar';

alert('Hola ' + numero + ' es ' + estado);