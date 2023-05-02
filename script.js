function cambiarId() {
    var imagen = document.getElementById("inodoro");
    imagen.id = "imagen-no";

    if ((boton = document.getElementsByClassName("cerrarcel")[0])) {
      boton.classList.remove("cerrarcel");
      boton.classList.add("boton-no");
    } else if ((boton = document.getElementsByClassName("cerrar")[0])) {
     boton.classList.remove("cerrar");
     boton.classList.add("boton-no");
    }

    var pagina = document.querySelector(".todo");
    pagina.style.filter = "none";
    
  }

