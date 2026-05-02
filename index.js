
var animatedSobre = false;
var animatedProjetos = false;
var animatedContatos = false;

window.addEventListener('scroll', () => {
    const posicaoScroll = window.scrollY;
    const setaTopo = document.getElementById('voltar_topo');
    const sobre = document.getElementById('about');
    const projetos = document.getElementById('projects');
    const contatos = document.getElementById('contact');


    if (posicaoScroll > 150) {
        setaTopo.style.display = 'flex';
        setaTopo.style.opacity = '0.7';
    } else {
        setaTopo.style.display = 'none';
        setaTopo.style.opacity = '0';
    }

  
    if (posicaoScroll >= 350 && posicaoScroll < 850 && !animatedSobre) {
        sobre.style.animation = 'fadeIn 2s forwards';
        animatedSobre = true;
    }

    else if (posicaoScroll >= 850 && posicaoScroll < 1950 && !animatedProjetos) {
        projetos.style.animation = 'fadeIn 2s forwards';
        animatedProjetos = true;
    }

    else if (posicaoScroll >= 1950 && !animatedContatos) {
        contatos.style.animation = 'fadeIn 2s forwards';
        animatedContatos = true;
    }
});