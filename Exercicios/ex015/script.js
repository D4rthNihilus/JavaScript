function verificar() {
    date = new Date()
    year = date.getFullYear()

    fYear = document.getElementById('txtyear')
    result = document.querySelector('div#output')

    if (fYear.value.length == 0 || fYear.value > year) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        fgen = document.getElementsByName('radgen')
        age = year - Number(fYear.value)
        
        gender = ''
        img = document.createElement('img')
        img.setAttribute('id', 'picture')


        if (fgen[0].checked) {
            if (age >= 0 && age <= 5) {
                // baby
                gender = ' bebê'
                img.setAttribute('src', 'images/babyboy.jpg')
            } else if (age < 15) {
                // child
                gender = ' menino'
                img.setAttribute('src', 'images/boy.jpg')
            } else if (age <= 25) {
                // teen
                gender = ' rapaz'
                img.setAttribute('src', 'images/teenboy.jpg')
            } else if (age < 50) {
                // adult
                gender = ' homem'
                img.setAttribute('src', 'images/man.jpg')
            } else if (age <= 120) {
                // elder
                gender = ' senhor'
                img.setAttribute('src', 'images/oldman.jpg')
            } else {
                // decreased
                gender = ' cadáver'
                img.setAttribute('src', 'images/skboy.jpg')
            }

            document.body.style.backgroundColor = '#2D869C'

        } else if (fgen[1].checked) {
            if (age >= 0 && age <= 5) {
                // baby
                gender = 'a bebê'
                img.setAttribute('src', 'images/babygirl.jpg')
            } else if (age < 15) {
                // child
                gender = 'a menina'
                img.setAttribute('src', 'images/girl.jpg')
            } else if (age <= 25) {
                // teen
                gender = 'a moça'
                img.setAttribute('src', 'images/teengirl.jpg')
            } else if (age < 50) {
                // adult
                gender = 'a mulher'
                img.setAttribute('src', 'images/woman.jpg')
            } else if (age <= 120) {
                // elder
                gender = 'a senhora'
                img.setAttribute('src', 'images/oldwoman.jpg')
            } else {
                // decreased
                gender = 'a cadáver'
                img.setAttribute('src', 'images/skgirl.jpg')
            }

            document.body.style.backgroundColor = '#EA79AB'
        }

        result.innerHTML = `Detectamos um${gender} com ${age} anos`

        img.style.borderRadius = '50%'
        img.style.margin = '10px'
        img.style.width = '200px'
        img.style.justifySelf = 'center'
        img.style.boxShadow = '2px 2px 5px rgb(0, 0, 0, .4)'
        result.appendChild(img)

    }
}