let cantidad, numHermanas, total;
cantidad=prompt('Introduce un precio');
numHermanas=prompt('¿Cuantas hermanas tienes?');

if(numHermanas>0)
{
    if(numHermanas>=3)
    {
        total= (cantidad*15)/100;
        total=cantidad-total;
        alert(total);
    }
    else{
        total= (cantidad*5)/100;
        total=cantidad-total;
        alert(total);
    }
}
else{
    alert(cantidad);
}