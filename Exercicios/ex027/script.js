const caixa1 = document.getElementById('c1');
const caixa2 = document.getElementById('c2');
const btn = document.getElementById('btn');

const tdcursos = [...document.querySelectorAll("div.curso")];

tdcursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target;
        curso.classList.toggle("selecionado");
    })
});

btn.addEventListener("click", ()=>{
    const selecionados = [...document.querySelectorAll(".selecionado")];
    selecionados.map((el)=>{
        caixa2.appendChild(el);
    })

    const naoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")];
    naoSelecionados.map((el)=>{
        caixa1.appendChild(el);
    })
})
