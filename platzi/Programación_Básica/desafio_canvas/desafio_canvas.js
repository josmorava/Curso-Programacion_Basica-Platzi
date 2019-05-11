var d = document.getElementById("desafio_canvas");
var lienzo = d.getContext("2d");

 /*------------------------------*/
 /*----------VARIABLES-----------*/
 /*-----------------------------*/
function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath()
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial)
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke()
  lienzo.closePath()
}
/*--------------------------------*/
/*------------BORDES-------------*/
/*-------------------------------*/
dibujar_linea("black",1,1,399,1) /*arriba*/
dibujar_linea("black",1,399,399,399)/*abajo*/
dibujar_linea("black",1,1,1,399)/*izquierda*/
dibujar_linea("black",399,1,399,399)/*derecha*/

/*---------------------------------*/
/*-----------DIBUJO---------------*/
/*--------------------------------*/
var lineas = 40;
var yi , xf;
l = 0;

while (l <lineas)
{
  /*line rigth-bottom*/
  yi = 10 * l;
  xf = 400 - (l * 10);
  dibujar_linea("grey",400,yi,xf,400)
  {
    /*line lefth-bottom*/
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujar_linea("yellow",0,yi,xf,400)
  }
  {
    /*line lefth-up*/
    yi = 400 - (l * 10);
    xf = 10* (l +1);
    dibujar_linea("red", 0, yi, xf, 0)
  }
  {
    /* line rigth-up*/
    yi = 400 - (l*10)
    xf = 400 - (l*10)
    dibujar_linea("blue",400, yi, xf, 0 )
  }
  console.log(lineas);
  l++;
}
