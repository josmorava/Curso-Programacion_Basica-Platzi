
var z;


/*----CICLO DE 10 NUMEROS RAMDOM SEPARADOS POR "COMAS"----*/
/*declarando un "for" = ciclo; que dentro cumple 3 variables primcipales
el primer valor va a ser la variable que itera o cambia
el segundo valor es la condición
el tercer valor es lo que va a suceder*/

/*variable que itera en 0, que sea un ciclo de 10, y que en cada cilo sume 1.*/
for (var i=0; i<10; i++)
{
  var z = aleatoria(10,20);
  document.write(z + ",");

}

/*---FUNCION MATEMATICA DE NUMEROS ALEATORIOS----/
/*declarando funcion "aleatoria" que tenga dos valores dentro
min y maxi*/
function aleatoria(min, maxi)
{ /* las variables definidas dentro de llaves sólo viven dentro de las mismas
  una variable declarada de ntro de llaves llamada fuera de ellas no existe*/
  var resultado;

  /*función matemática para obtener un número ramdom en cierto rango*/
  resultado =Math.floor( Math.random() * (maxi - min + 1)) + min;


  /*palabra reservada para devolver "algo"*/
  return resultado;
}
