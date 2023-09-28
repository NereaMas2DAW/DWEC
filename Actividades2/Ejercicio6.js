let num1, num2, caracter,res;
num1=parseFloat(prompt('Introduce un número'));
num2=parseFloat(prompt('Introduce otro número'));
caracter=prompt('Introduce un carácter');
switch (caracter){
    case '*':
        res=num1*num2;
        alert(res);
        break;
    case '/':
        res=num1/num2;
        alert(res);
        break;
    case '+':
        res=num1+num2;
        alert(res);
        break;
    case '-':
        res=num1-num2;
        alert(res);
        break;
    default:
        alert('Prueba con otro carácter');
}