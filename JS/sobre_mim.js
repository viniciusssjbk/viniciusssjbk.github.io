
window.addEventListener("scroll", () => {
    const posicaoScroll = window.scrollY;
    const setaTopo = document.getElementById("voltar_topo");
    const sobre = document.getElementById("about");
    const contatos = document.getElementById("contact");
    
    if (posicaoScroll > 150) {
        setaTopo.style.display = "flex";
        setaTopo.style.opacity = "0.7";
    } else {
        setaTopo.style.display = "none";
        setaTopo.style.opacity = "0";
    }
  
    if (posicaoScroll >= 350 && posicaoScroll < 850) {
        sobre.style.animation = "fadeIn 2s forwards";

    } else if (posicaoScroll >= 850 && posicaoScroll < 1950) {
        contatos.style.animation = "fadeIn 2s forwards";

    } 
});
