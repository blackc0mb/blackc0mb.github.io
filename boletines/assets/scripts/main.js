// obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

// recorrerlos
links.forEach(function(link){

   // agregar un evento click a cada uno de ellos
   link.addEventListener("click",function(ev){
      ev.preventDefault();
      let container = document.querySelector('.content');

      // quitarle las clases de animación que ya tiene
      container.classList.remove("animate__animated");
      container.classList.remove("animate__fadeInDown");            

      // agregar clases para animar su salida
      container.classList.add("animate__animated");
      container.classList.add("animate__fadeOutUp");      
      
      setTimeout(function(){
         location.href = "/boletines";
      },600);
      
      return false;
   })
});

/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
   icono.classList.remove('fa-star');
});
*/