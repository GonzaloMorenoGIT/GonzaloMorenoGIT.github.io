//Funciones de modo oscuro
function temaOscuro(){
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("#cambio").setAttribute("class","bi bi-sun-fill");
    console.log(document.querySelector("body").getAttribute("data-bs-theme"));
    sessionStorage.setItem("tema",document.querySelector("body").getAttribute("data-bs-theme"));

}
function temaClaro(){
    document.querySelector("body").setAttribute("data-bs-theme","light");
    document.querySelector("#cambio").setAttribute("class","bi bi-moon-fill");
    console.log(document.querySelector("body").getAttribute("data-bs-theme"));
    sessionStorage.setItem("tema",document.querySelector("body").getAttribute("data-bs-theme"));
}
function cambiarTema(){
    /// Fase de pruebas aun por depurar
    if(document.querySelector("body").getAttribute("data-bs-theme")==="light"){
        temaOscuro();
    }else{
        temaClaro();
    }
}
function comprobarTema(){
    if(document.querySelector("body").getAttribute("data-bs-theme")==="light"){
        temaOscuro();
    }else{
        temaClaro();
    }
}
window.addEventListener("load",function(){
    if(sessionStorage.getItem("tema")==null){
        temaClaro();
    }else{
        document.querySelector("body").setAttribute("data-bs-theme",sessionStorage.getItem("tema"));
    }
})
//funciones de seleccion de lista