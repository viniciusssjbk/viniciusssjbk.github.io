var escuro = true;
var retroAudio = new Audio("audio/retro_80s.mp3");
var jazzyAudio = new Audio("audio/lo-fi_jazz.mp3");
retroAudio.loop = true;
jazzyAudio.loop = true;

var conversando = false;
var robo_img = document.querySelector(".img_robo");

var musica;
const themeSwitch = document.querySelector(".switch input");
const body = document.body;


themeSwitch.addEventListener("change", function() {
    if (this.checked) {
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
        escuro = false;
    } else {
        body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
        escuro = true;
    }

   
    if (conversando) {
        if (musica) musica.pause();
        musica = escuro ? retroAudio : jazzyAudio;
        musica.play();
    }
});


function alerta() {
    Swal.fire({
        title: "SISTEMA J.A.R.V.I.S.",
        text: "Sistema ativado.",
        icon: "info",
        timer: 2000,
        showConfirmButton: false,
        background: "#030712",
        color: "#ffffff"
    });
}


function alerta_robo() {
    if (conversando == false) {
        conversando = true;
        robo_img.style.opacity = "1";
        robo_img.style.filter = "grayscale(0%)";
        robo_img.style.transform = "translateY(-10px)";
        alerta(); 
        if(escuro) {
            musica = retroAudio;
        } 
        else{
             musica = jazzyAudio;
        }
        musica.play();
    } else {
        conversando = false;
        robo_img.style.opacity = "0.5";
        robo_img.style.filter = "grayscale(100%)";
        robo_img.style.transform = "translateY(0)";
        if (musica) {
            musica.pause();
            musica.currentTime = 0;
        }
    }
}

function subir() {
    if (conversando == false) {
        robo_img.style.opacity = "1";
        robo_img.style.filter = "grayscale(0%)";
        robo_img.style.transform = "translateY(-10px)";
    }
}

function descer() {
    if (conversando == false) {
        robo_img.style.opacity = "0.5";
        robo_img.style.filter = "grayscale(100%)";
        robo_img.style.transform = "translateY(0)";
    }
}


const barras = document.querySelectorAll(".nivel");
function animarBarras() {
    barras.forEach(barra => {
        const valor = barra.getAttribute("data-nivel");
        barra.style.width = valor + "%";
    });
}
animarBarras();