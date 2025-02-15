
var agora = (new Date()).getHours ()
console.log(`Agora são exatamente ${agora} horas`)

if (agora <= 3) {
    console.log("Boa madrugada!")
} else if (agora <= 12) {
    console.log('Bom dia!')
} else if (agora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}