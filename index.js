var animatedSobre = false;
var animatedProjetos = false;
var animatedContatos = false;

const themeSwitch = document.querySelector(".switch input");
const body = document.body;


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    themeSwitch.checked = true;
    body.classList.add("light-theme");
} else {
    themeSwitch.checked = false;
    body.classList.remove("light-theme");
}


themeSwitch.addEventListener("change", function() {
    if (this.checked) {
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
    }
});


async function iniciarConversa() {
    await Swal.fire({
        title: "SISTEMA J.A.R.V.I.S.",
        text: "Sistema ativado.",
        icon: "info",
        timer: 2000,
        showConfirmButton: false,
        background: "#030712",
        color: "#ffffff"
    });
}


window.addEventListener("scroll", () => {
    const posicaoScroll = window.scrollY;
    const setaTopo = document.getElementById("voltar_topo");
    const sobre = document.getElementById("about");
    const projetos = document.getElementById("projects");
    const contatos = document.getElementById("contact");
    
    if (posicaoScroll > 150) {
        setaTopo.style.display = "flex";
        setaTopo.style.opacity = "0.7";
    } else {
        setaTopo.style.display = "none";
        setaTopo.style.opacity = "0";
    }
  
    if (posicaoScroll >= 350 && posicaoScroll < 850 && !animatedSobre) {
        sobre.style.animation = "fadeIn 2s forwards";
        animatedSobre = true;
    } else if (posicaoScroll >= 850 && posicaoScroll < 1950 && !animatedProjetos) {
        contatos.style.animation = "fadeIn 2s forwards";
        animatedProjetos = true;
    } else if (posicaoScroll >= 1950 && !animatedContatos) {
        projetos.style.animation = "fadeIn 2s forwards";
        animatedContatos = true;
    }
});

var conversando = false;
var robo_img = document.querySelector(".img_robo");

function alerta_robo() {
    if (conversando == false) {
        conversando = true;
        robo_img.style.opacity = "1";
        robo_img.style.filter = "grayscale(0%)";
        robo_img.style.transform = "translateY(-10px)";
        iniciarConversa(); 
    } else {
        conversando = false;
        robo_img.style.opacity = "0.5";
        robo_img.style.filter = "grayscale(100%)";
        robo_img.style.transform = "translateY(0)";
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