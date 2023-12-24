const personagens = document.querySelectorAll(".personagem");


personagens.forEach((personagem)=>{
    
    personagem.addEventListener("mouseenter", ()=>{
        
        const idPersonagem = personagem.attributes.id.value;

        const personagemSelecionado = document.querySelector(".selecionado");

        personagemSelecionado.classList.remove("selecionado")

        personagem.classList.add("selecionado");

        const imagemGrande = document.getElementById("imagemGrandePersonagem");

        imagemGrande.src=`./assets/images/${idPersonagem}.png`;

        const nomePersonagem = personagem.getAttribute('data-name');
        const tituloPersonagem = personagem.getAttribute('data-title');
        const biografiaPersonagem = personagem.getAttribute('data-history');

        const nomePersonagemGrande = document.getElementById('nome')
        const tituloPersonagemGrande = document.getElementById('titulo')
        const biografiaPersonagemGrande = document.getElementById('biografia')

        nomePersonagemGrande.innerHTML = nomePersonagem;
        tituloPersonagemGrande.innerHTML = tituloPersonagem;
        biografiaPersonagemGrande.innerHTML = biografiaPersonagem


        })

    })