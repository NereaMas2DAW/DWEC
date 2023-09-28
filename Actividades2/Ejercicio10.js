let numSecreto, numPrueba;
numSecreto=prompt("Introduce un numero secreto");
while(numPrueba!==numSecreto)
{
    numPrueba=prompt("Intenta adivinar el número");
    if(numPrueba>numSecreto)
    {
        alert('Prueba un número más pequeño');
    }
    if(numPrueba<numSecreto)
    {
        alert('Prueba un número más grande');
    }
    
}
alert('Enhorabuena '+ numSecreto +' era el número secreto ');