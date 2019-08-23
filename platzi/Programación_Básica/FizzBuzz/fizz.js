var numeros = 100;
/*ciclo de 100 numeros desde-hasta-en 1 cada vez*/
/*1-escribir numeros
2-Fizz/3
3-Buzz/5
4-FizzBuzz if % = !0*/
for(var i = 1; i <= 100; i++)
{

  if (esDivisible(i,3))
  {
    document.write("FIZZ");
  }

  if (esDivisible(i,5))
  {
    document.write("BUZZ");
  }

/*"!" = no esDivisible*/
  if (!esDivisible(i,3) && !esDivisible(i,5))
  {
    document.write(i);
  }
  document.write("<br>");
}
function esDivisible(num,divisor)
{
  if (num % divisor == 0)
  {
    return  true;
  }
  else
  {
    return false;
  }
}
