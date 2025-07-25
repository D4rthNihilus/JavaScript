const array = document.querySelector('#array');
const btnVerificar = document.querySelector("#verificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [22, 26, 32, 20, 44, 10, 24];
array.innerHTML='['+elementos_array.join(', ')+']';

btnVerificar.addEventListener('click',()=>{
    const res =elementos_array.some((el, i)=>{
        if(el%2!=0){
            resultado.innerHTML='Elemento conforme na posição ' + i;
        }
        return el%2!=0;
    })
    if(!res){
        resultado.innerHTML='Nenhum elemento conforme'
    }
})