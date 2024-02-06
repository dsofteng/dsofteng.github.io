let menuVisible = false;
//Funcion que muestra o oculta el menu

function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

//funcion para ocultar el menu una vez se selecciona una opcion

function seleccionar() {
    document.getElementById("nav").classList=""
    menuVisible = false;
}

//funcion que aplica las animaciones a las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("csharp");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("docker");
        habilidades[6].classList.add("database");
        habilidades[7].classList.add("programming");
        habilidades[8].classList.add("managment");
        habilidades[9].classList.add("business");
        habilidades[10].classList.add("requirement");
        habilidades[11].classList.add("test");
        habilidades[12].classList.add("software");
        habilidades[13].classList.add("english");
    }
}
//detecto el scrolling para aplicar la animacion a la barra de habilidades 
window.onscroll = function() {
    efectoHabilidades();
    
}