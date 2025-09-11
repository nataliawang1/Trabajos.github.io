const elementos = document.querySelector("#elementos");

function crearimagen(event){
    console.log(event.target.value);
    for(let i = 0; i< event.target.value; i++){
    
    const imagen = new Image ();
    imagen.src = "../img.jpg";
    imagen.classList.add("imagen-nueva");
    elementos.appendChild(imagen);

    }
    /*const imagen = '<img src="img.jpg" alt="Imagen" />';
    elementos.innerHTML += imagen; */

   /* const imagen = document.createElement("img");
    imagen.src = "../img.jpg";
    imagen.classList.add("imagen-nueva");
    elementos.appendChild(imagen);
    console.log(imagen);*/

   
}

