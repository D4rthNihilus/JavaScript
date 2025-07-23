const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const botao_selecionar = document.querySelector("button#select");
const botao_adicionar = document.querySelector("button#add");
const botao_remover = document.querySelector("button#remove");
const nomeNovoCurso = document.querySelector("input[type=text]")


botao_selecionar.addEventListener("click", (evt)=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];
    let selecionado = todosRadios.filter((el)=>{
        return el.checked
    });
    console.log(selecionado)

    if(selecionado == undefined|| selecionado == ""){
        window.alert("Selecione um curso!");
    } else {
    
        selecionado=selecionado[0];

        let cursoSelecionado=selecionado.parentNode.parentNode.textContent;

        alert("Você selecionou o curso " + cursoSelecionado);
    }
});

botao_adicionar.addEventListener("click", (evt)=>{
    if (!nomeNovoCurso.value) {
        window.alert("Digite o nome do curso!");
    } else {
        const novoCurso = document.createElement("div");
        novoCurso.setAttribute("class", "cursos");
        novoCurso.innerHTML=`
        <div class="nomeDoCurso">${nomeNovoCurso.value}</div>
        <div><input type="radio" name="curso"></div>
        `;
        caixa2.appendChild(novoCurso);
        nomeNovoCurso.value=""
    }
})

botao_remover.addEventListener("click", (evt)=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];

    let selecionado = todosRadios.filter((el)=>{
        return el.checked
    });

    if (selecionado == "" || selecionado == undefined){
        window.alert("Selecione um curso!")
    } else {
        selecionado=selecionado[0];
        let cursoSelecionado=selecionado.parentNode.parentNode
        caixa2.removeChild(cursoSelecionado);
    }
});


