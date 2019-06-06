var d = document.getElementById("canvas_dibujando_click");
var trazo = d.getContext("2d");
var xinic, yinic, xfinal, yfinal;
var estado = false;
var color = "pink";

document.addEventListener("mousedown", dibujoMouse);
document.addEventListener("mouseup", dibujoMouseFinal);
document.addEventListener("mousemove", dibujoMouseMove);

function dibujarLinea (color, xinic, yinic, xfinal, yfinal, trazo)
{
  trazo.beginPath();
  trazo.strokeStyle = color;
  trazo.lineWidth = 5;
  trazo.moveTo(xinic, yinic);
  trazo.lineTo(xfinal, yfinal);
  trazo.closePath();
  trazo.stroke();
}

function dibujoMouse(evento)
{
  console.log(evento);
    if (estado = true);
    xinic = evento.clientX;
    yinic = evento.clientY;
}

function dibujoMouseMove(evento)
{
    console.log(evento);
    if (estado == true)
    {
    dibujarLinea(color, xinic, yinic, evento.clientX, evento.clientY, trazo);
    }
    xinic = evento.clientX;
    yinic = evento.clientY;
}

function dibujoMouseFinal(evento)
{
    console.log(evento);
    if (estado = false);
    xinic = evento.clientX;
    yinic = evento.clientY;
}
