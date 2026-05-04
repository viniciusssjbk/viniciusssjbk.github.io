VANTA.CLOUDS({
  el: "#fundo",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  backgroundColor: 0x0,
  skyColor: 0x0,
  cloudColor: 0x485a6e,
  sunColor: 0x0,
  sunGlareColor: 0x1434c8,
  sunlightColor: 0x11729b
})



var animatedSobre = false;
var animatedProjetos = false;
var animatedContatos = false;

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
    }

    else if (posicaoScroll >= 850 && posicaoScroll < 1950 && !animatedProjetos) {
        projetos.style.animation = "fadeIn 2s forwards";
        animatedProjetos = true;
    }

    else if (posicaoScroll >= 1950 && !animatedContatos) {
        contatos.style.animation = "fadeIn 2s forwards";
        animatedContatos = true;
    }
});

var conversando = false;
var robo_img = document.querySelector(".img_robo");
function alerta_robo(){
    if(conversando == false){
        conversando = true;
        robo_img.style.opacity = "1";
        robo_img.style.filter = "grayscale(0%)";
        robo_img.style.transform = "translateY(-10px)";
        robo_img.style.filter = "blur(0px)";
         Swal.fire({
                    title: "SISTEMA J.A. R. V. I. S.",
                    text: "Reconhecimento completo, sistema operacional ativado. poderá explorar o site normalmente.",
                    background: "#030712",
                    color: "#ffffff",     
                    confirmButtonColor: "#00a2ff", 
                    iconColor: "#00f2ff",
                    showClass: {
                        popup: "animate__animated animate__fadeInDown"
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp"
                    },
                    customClass: {
                        popup: "border-tech" 
                    }
                    });
    }else{
        conversando = false;
        robo_img.style.opacity = "0.5";
        robo_img.style.filter = "grayscale(100%)";
        robo_img.style.transform = "translateY(0)";
        robo_img.style.filter = "blur(2px)";
    }
    
}

function subir(){
   if(conversando == false){
        robo_img.style.opacity = "1";
        robo_img.style.filter = "grayscale(0%)";
        robo_img.style.transform = "translateY(-10px)";
        robo_img.style.filter = "blur(0px)";
    }
}
function descer(){
    if(conversando == false){
        robo_img.style.opacity = "0.5";
        robo_img.style.filter = "grayscale(100%)";
        robo_img.style.transform = "translateY(0)";
        robo_img.style.filter = "blur(2px)";
    }
}