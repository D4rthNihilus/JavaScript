const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const botao_selecionar = document.querySelector("button#select");
const botao_adicionarAntes = document.querySelector("button#addB");
const botao_adicionarDepois = document.querySelector("button#addA");
const botao_remover = document.querySelector("button#remove");
const nomeNovoCurso = document.querySelector("input[type=text]")
const todosCursos = [...document.querySelectorAll("div.cursos")];


botao_selecionar.addEventListener("click", (evt)=>{
    let selecionado = [...document.querySelectorAll('.selecionado')];

    if(selecionado == undefined|| selecionado == ""){
        window.alert("Selecione um curso!");
    } else {
    
        selecionado=selecionado[0];

        alert("Você selecionou o curso " + selecionado.textContent);
    }
});

botao_adicionarAntes.addEventListener("click", (evt)=>{
    let selecionado = [...document.querySelectorAll('.selecionado')];

    if(selecionado == undefined|| selecionado == ""){
        window.alert("Selecione um curso!");
    } else {
    
        selecionado=selecionado[0];
    }    
        
    if (!nomeNovoCurso.value) {
         window.alert("Digite o nome do curso!");
    } else {
        const novoCurso = document.createElement("div");
        novoCurso.setAttribute("class", "cursos");
        novoCurso.innerHTML=`
        <div class="nomeDoCurso">${nomeNovoCurso.value}</div>
        `;
        caixa2.insertBefore(novoCurso, selecionado);
        nomeNovoCurso.value="";
        }
})

botao_adicionarDepois.addEventListener("click", (evt)=>{
    let selecionado = [...document.querySelectorAll('.selecionado')];
    if(selecionado == undefined|| selecionado == ""){
        window.alert("Selecione um curso!");
    } else {
        selecionado=selecionado[0];
    }    
        
    if (!nomeNovoCurso.value) {
         window.alert("Digite o nome do curso!");
    } else {
        const novoCurso = document.createElement("div");
        novoCurso.setAttribute("class", "cursos");
        novoCurso.innerHTML=`
        <div class="nomeDoCurso">${nomeNovoCurso.value}</div>
        `;
        caixa2.insertBefore(novoCurso, selecionado.nextSibling);
        nomeNovoCurso.value="";
        }
})

botao_remover.addEventListener("click", (evt)=>{
    let selecionado = [...document.querySelectorAll('.selecionado')];

    if (selecionado == "" || selecionado == undefined){
        window.alert("Selecione um curso!")
    } else {
        selecionado=selecionado[0];
        caixa2.removeChild(selecionado);
    }
});

todosCursos.map((el)=>{
    el.addEventListener("click", ()=>{
        tirarSelecao();
        el.classList.toggle("selecionado");
    });
});

const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado');
    })
}


