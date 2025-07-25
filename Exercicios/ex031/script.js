const array = document.querySelector('#array');
const texto = document.querySelector("#texto");
const btnPesquisar = document.querySelector("#pesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = ["html", "css", "javascript", 'python'];

array.innerHTML="["+elementos_array+"]";

btnPesquisar.addEventListener("click", ()=>{
    if (texto.value==""){
        texto.style.border='3px solid red';
        alert("Insira um valor");
    } else {
        texto.style.border='3px solid white';
        elementos_array.find((el, i)=>{
            if(el.toUpperCase()==texto.value.toUpperCase()){
                resultado.innerHTML='elemento ' + el + ' encontrado na posição ' + i;
                return el;
            }else{
                resultado.innerHTML="não encontrado";
            }
        });
    }
})