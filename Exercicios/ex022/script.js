let num = document.getElementById('num')
let list = document.getElementById('list')
let res = document.getElementById('analise')
let valores = []
let = i = 0

function adicionar() {
    if (haNumero(num.value) && !jaAdicionado(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML=''
    } else {
        window.alert("Valor inválido ou já encontrado na lista!")
    }
    num.value = ''
    num.focus()
}

function haNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function jaAdicionado(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Digite um número!')
    }
    else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</P>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</P>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</P>`
        res.innerHTML += `<p>Spmando todos os valores, temos ${soma}</P>`
        res.innerHTML += `<p>A média dos valores é ${media}</P>`


        let analise = document.createElement('p')
        analise.innerHTML = ``
    }
}