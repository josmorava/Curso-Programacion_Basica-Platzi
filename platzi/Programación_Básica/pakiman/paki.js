var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.webp";

document.write("agregando imagenes a través de javascrip, mediante objetos");

/*crear un mismo objeto pakiman y modificar sus clases, vida, nombre, poder*/
/*Clase es la definición de objeto */


 /*creanado un array vacío */
var coleccion = [];
coleccion.push(new pakiman("cauchin",100, 30));
coleccion.push(new pakiman("tocinauro", 120,40));
coleccion.push(new pakiman("pokacho", 80, 50));
    /*metiendo dentro del array valores con ".push"  */


/*ciclo que itera depende de los elementos que tenga el array */
for (var pakin of coleccion)
{
    pakin.mostrar();
}