function fecha_del_dia(){
    var fecha_completa = new Date();
    var mes = fecha_completa.getMonth() + 1;
    var dia = fecha_completa.getDate();
    var elemento = document.getElementById("fecha_cambio");
    elemento.innerHTML = (dia) + "/" + (mes) + " - " + "Argentina";
    elemento.style.fontFamily = "Georgia";
}

function dolar(){
    var li_dolar = document.getElementsByName("dolar");
    var url = "https://dolarapi.com/v1/dolares";
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function(){
        answer = JSON.parse(this.responseText);
        for(let i = 0; i < 5; i++){
            li_dolar[i].innerHTML = `${answer[i].nombre}: $${answer[i].venta}`
        }
    };
    request.send();
}

function navbar_cambiar_fecha(){
    var bajar = window.scrollY;
    if (bajar > 90){
        var elemento = document.getElementById("fecha_cambio");
        elemento.innerHTML = "DIARIO X";
        elemento.style.fontFamily = "Arial, Helvetica, sans-serif";
    } else {
        fecha_del_dia();
    }
}

function menu_buscar(){
    var menu = document.getElementById("Logo_sidebar");
    menu.addEventListener("click", mostrar_menu_buscar);
}

function mostrar_menu_buscar(){
    var menu = document.getElementById("Menu_desplegable");
    menu.classList.toggle("Mostrar_menu");
}

function menu_user(){
    var user = document.getElementById("foto_perfil");
    user.addEventListener("click", mostrar_menu_user);
}

function mostrar_menu_user(){
    var menu_perfil = document.getElementById("menu_perfil");
    menu_perfil.classList.toggle("Mostrar_menu_user");
}

window.addEventListener("load", fecha_del_dia);
window.addEventListener("load", dolar);
window.addEventListener("load", menu_buscar);
window.addEventListener("load", menu_user);
window.addEventListener("keydown", navbar_cambiar_fecha);
window.addEventListener("mousewheel", navbar_cambiar_fecha);