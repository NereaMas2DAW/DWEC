let res,num,i;
num=prompt('Introduce un número');
res=1;
i = num;
while(i>0)
{
    res *= i;
    i--;
}
alert(res);