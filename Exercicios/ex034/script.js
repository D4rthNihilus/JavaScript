const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');

const res = document.getElementById('res');

const somar = document.getElementById('soma');
const subtrair = document.getElementById('subt');
const multiplicar = document.getElementById('mult');
const dividir = document.getElementById('div');
const elevar = document.getElementById('pot');
const media = document.getElementById('media');
const maior = document.getElementById('maior');
const menor = document.getElementById('menor');

const calculos = [
    (n1,n2)=>{
        res.innerHTML= n1+n2;
    },

    (n1, n2)=>{
        res.innerHTML= n1-n2;
    },

    (n1, n2)=>{
        res.innerHTML = n1*n2;
    },

    (n1, n2)=>{
        if (n2==0){
            alert('O divisor não pode ser zero!')
        } else {
            res.innerHTML = n1/n2;
        }
    },

    (n1, n2)=>{
        if (n2==0){
            res.innerHTML = 1;
        } else {
            let acum = 1
            for (let i=0; i<n2; i++) {
                acum *= n1;
            }
            res.innerHTML = acum;
        }
    },

    (n1, n2)=>{
            res.innerHTML = (n1+n2)/2;
    },

    (n1, n2)=>{
        let m = n1;
        if(n2>n1){
            m = n2;
        }
        res.innerHTML = m;
    },

    (n1, n2)=>{
        let m = n1;
        if(n2<n1){
            m = n2;
        }
        res.innerHTML = m;
    },
];

somar.addEventListener('click', ()=>{return calculos[0](Number(n1.value), Number(n2.value))});

subtrair.addEventListener('click', ()=>{return calculos[1](Number(n1.value), Number(n2.value))});

multiplicar.addEventListener('click', ()=>{return calculos[2](Number(n1.value), Number(n2.value))});

dividir.addEventListener('click', ()=>{return calculos[3](Number(n1.value), Number(n2.value))});

elevar.addEventListener('click', ()=>{return calculos[4](Number(n1.value), Number(n2.value))});

media.addEventListener('click', ()=>{return calculos[5](Number(n1.value), Number(n2.value))});

maior.addEventListener('click', ()=>{return calculos[6](Number(n1.value), Number(n2.value))});

menor.addEventListener('click', ()=>{return calculos[7](Number(n1.value), Number(n2.value))});