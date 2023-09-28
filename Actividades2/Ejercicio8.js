let num, texto;
texto='Los numero pares entre 25 y 1 son: ';
for(i=25 ; i > 0; i--)
{
    if( i % 2 ===0 )
    {
        texto+= i +' ';
    }
}
alert(texto)