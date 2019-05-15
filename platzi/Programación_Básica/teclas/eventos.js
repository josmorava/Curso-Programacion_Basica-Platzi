/*Interacciones*/
document.addEventListener("keyup", dibujarTeclado);
var d = document.getElementById("area_del_dibujo");

/*Variables*/
var lienzo = d.getContext("2d");

var teclas = {/*variable dentro de una variable*/
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};
console.log(teclas);


/*Funciones*/
function dibujarTeclado(evento)
{
  switch(evento.keyCode)
  {
    case teclas.UP:
      console.log("arriba");
    break;
    case teclas.DOWN:
      console.log("abajo");
    break;
    case teclas.LEFT:
      console.log("izquierda");
    break;
    case teclas.RIGHT:
      console.log("derecha");
    break;
    default:
      console.log("otra tecla");
    break;
  }
}

function dibujarLinea(color, xinicial , yinicial , xfinal , yfinal)
{
  lienzo.beginPath();/*iniciar un trazo en js*/
  lienzo.strokeStyle = color; /*variable que permite elegir tipo de trazo y color*/
  lienzo.moveTo(xinicial, yinicial); /*funcion de js para iniciar el trazo*/
  lienzo.lineTo(xfinal, yfinal);/*funcion para trazar la linea*/
  lienzo.stroke();/*realizar linea, circulo, forma, etc*/
  lienzo.closePath();/*terminar un trazo*/
}
/*--Dibujo--*/
/*Bordes*/
dibujarLinea("black", 0,0,0, 300);
dibujarLinea("black", 0 , 300, 300,300);
dibujarLinea("black" ,0,0,300, 0 );
dibujarLinea("black", 300,0 , 300, 300);
