const array = document.querySelector('#array');
const btnReduzir = document.querySelector("#reduzir");
const resultado = document.querySelector("#resultado");

const elementos_array = [1, 2, 3, 4, 5];
let aux=[];

array.innerHTML='['+elementos_array.join(', ')+']';

btnReduzir.addEventListener('click',(evt)=>{
    const res = elementos_array.reduce((anterior, atual, i)=>{
        return anterior*atual;
    });

    resultado.innerHTML = res;
})

const nomes = ['Ana', 'Lucas', 'João', 'Felipe', 'Julia'];
const frase = nomes.reduce((acum, nome, index)=>{
    return acum + (index>0?", ": "")+ (index+1)+ "-" + nome;
})

console.log("Ordem de chegada dos candidatos: 1-" + frase);