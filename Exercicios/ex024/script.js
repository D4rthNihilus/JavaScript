let a, b, c;
a = 1;
b = 2;
c = 3;

// ou

let d, e, f; d = 1; e = 2; f = 3;

//comentário de 1 linha


/*
    Comentário
    de múltiplas
    linhas
 */


/*
var pote = 'Bombom';
var a = 2;
var b = 3;
var c = a + b;
*/

var g, h, i;
g = 2;
h = 3;
i = 2 + 3;

var nome, sobrenome, nomeCompleto, idade;
nome = 'Julia';
sobrenome = 'Tavares';
idade = 22
nomeCompleto = `${nome} ${sobrenome} tem ${idade} anos`;

console.log(nomeCompleto)

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2025,
    placa: "ABC-1234", 
    buzina: function() {alert('Biiiiiiip')},
    acelerar: function(acel) {velF = velI + acel},
    frear: function(fre) {velF = velI - fre},
    darPartida: function() {key=true}
};

carro.acelerar(10);
carro.frear(5);
carro.darPartida();




