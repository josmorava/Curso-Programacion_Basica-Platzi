class pakiman
{
    /*constructor es la función principal de pakiman, es decir que 
    cada elemento que se quiera ejecutar debe nombrarse o hacerce dentro de la
    "funcion " principal constructor */
    /*constructor = a una función pero sin nombre, la cual dispara una acción*/
    constructor(n, v, a )
    {
        /*this permite decirle a la clase que cirta variable pertenece
        a ella, dentro de clases las funciones simples : n = nom; --> no tienen 
        ningun valor, por ello se utiliza el "this"*/
        this.imagen = new Image();
            /*dandole el valor a la clase para agregar la imagen*/
        
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        
        /*atributo de la direccion de la imagen a agg */
        this.imagen.src = imagenes[this.nombre]; 
    }
    hablar()
    {
        alert(this.nombre);
    }

    mostrar()
    {   document.write("<p>");
        /*document."appendChild" --> agregando hijo: permite agg un elemento extra  */
        document.body.appendChild(this.imagen);
        document.write("<strong>" + this.nombre + "</strong> <br>");
        document.write("vida: " + this.vida + "<br>" );
        document.write("ataque: " + this.ataque + "<hr>");
        document.write("</p>");
    }
}
