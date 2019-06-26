var d = document.getElementById("dibujo_villaplatzi");
var papel = d.getContext("2d");
/*definiendo fondo*/
var fondo = {
  url: "tile.png",
  cargaOK:false
};
/*def vaca*/
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
/* def pollo*/
var pollo ={
  url: "pollo.png",
  cargaOK: false
};
/*def cerdo*/
var cerdo ={
  url: "cerdo.webp" ,
  cargaOK: false
};
/*cargando imagen fondo*/
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarfondo);

function cargarfondo()
{
  fondo.cargaOK = true;
  dibujar();
}

/*cargando vaca*/
vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarvaca);
function cargarvaca()
{
  vaca.cargaOK = true;
  dibujar();
}
/*cargando pollo*/
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarpollo);
function cargarpollo()
{
  pollo.cargaOK= true;
  dibujar();
}
/*cargando cerdo*/
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarcerdo);
function cargarcerdo()
{
  cerdo.cargaOK= true;
  dibujar();
}
/*agregado de imagenes*/
function dibujar()
{
  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
    if(pollo.cargaOK)
    {
      papel.drawImage(pollo.imagen, 50,50);
    }
      if(vaca.cargaOK)
      {
        papel.drawImage(vaca.imagen, 0,0);
      }
        if(cerdo.cargaOK)
        {
          papel.drawImage(cerdo.imagen, x,y);
        }

}

/*movimiento de cerdo con el teclado*/
    /*definiiendo keydown para el movimiento*/
document.addEventListener("keydown",moviendo_cerdo);
    /*variables de posiciones*/
var x = 150;
var y = 150;

var teclas = {/*variable dentro de una variable*/
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

    /*estrutura de toma de desiciones*/
function moviendo_cerdo(evento)
{
  var movimiento = 15;
  switch(evento.keyCode)
  {
    case teclas.UP:
    console.log("arriba");
    y = y - movimiento;
    dibujar();
    break;

    case teclas.DOWN:
    console.log("abajo");
    y = y + movimiento;
    dibujar();
    break;

    case teclas.RIGHT:
    console.log("derecha");
    x = x + movimiento;
    dibujar();
    break;

    case teclas.LEFT:
    console.log("izquierda");
    x = x - movimiento;
    dibujar();
    break;

    default:
    console.log("otra tecla");
    break;
  }
}
