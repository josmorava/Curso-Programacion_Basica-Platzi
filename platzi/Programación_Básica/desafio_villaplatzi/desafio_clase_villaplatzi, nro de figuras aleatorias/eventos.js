var d = document.getElementById("dibujo_villaplatzi");
var papel = d.getContext("2d");

/*definiendo fondo*/
var fondo = {
  url: "tile.png",
  cargaOK:false
};
/*definiendo vaca*/
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
/* definiendo pollo*/
var pollo = {
  url: "pollo.png",
  cargaOK:false
};
/*definiendo cerdo*/
var cerdo = {
  url: "cerdo.webp",
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
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarvaca);
function cargarvaca()
{
  vaca.cargaOK= true;
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
  cerdo.cargaOK = true;
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
    for( var a=0; a <40; a++ )
    {
      var x = aleatoria(0, 420);
      var y = aleatoria(0, 420);
      papel.drawImage(pollo.imagen,x,y);
    }
  }
  if(vaca.cargaOK)
  {
    for( var e=0; e <30; e++ )
    {
      var x = aleatoria(0, 420);
      var y = aleatoria(0, 420);
      papel.drawImage(vaca.imagen,x,y);
    }

  }
  if(cerdo.cargaOK)
  {
    for( var i=0; i <30; i++ )
    {
      var x = aleatoria(0, 420);
      var y = aleatoria(0, 420);
      papel.drawImage(cerdo.imagen,x,y);
    }
  }
}

/*funcion de numeros aleatorios*/
function aleatoria(min, maxi)
{
  var resultado;
  resultado =Math.floor( Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
