let nombre, apellidos, salario, edad, total;
nombre= prompt('Introduce un nombre');
apellidos= prompt('Introduce tus apellidos');
salario= parseFloat(prompt('Introduce tu salario'));
edad= parseInt(prompt('Introduce tu edad'));
total=parseInt(0);

if(salario<2000)
{
    if(salario>=1000 && edad>45)
    {
        total= salario + ((salario*3)/100);
    }
    if(salario>=1000 && edad<=45)
    {
        total= salario + ((salario*10)/100);
    }
    if(salario<1000 && edad<30)
    {
        total=1100;
    }
    if(salario<1000 && edad>=30 && edad<=45)
    {
        total= salario + ((salario*3)/100);
    }
    if(salario<1000 && edad>45)
    {
        total= salario + ((salario*15)/100);
    }
}
alert('Nombre: ' + nombre + ' Apellidos: ' + apellidos + ' Edad: '+ edad +'\n Salario: ' + total);