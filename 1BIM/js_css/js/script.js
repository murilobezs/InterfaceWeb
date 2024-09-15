/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Aula manipulando CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/1.jpg')
imagem.setAttribute('width', '280px')

let boxbotao = document.querySelector('.box-btn')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "white";
titulo.style.color = "white";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "5px solid white";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";
titulo.style.textAlign = "center";
titulo.style.boxShadow = "10px 10px 24px 0px rgba(0,0,0,0.26)";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnPink = document.querySelector('#btpink')

let btnBlue = document.querySelector('#btblue')

let btnYellow = document.querySelector('#btyellow')

let btnRed= document.querySelector('#btred')

let btngreen = document.querySelector('#btgreen')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink)
btnBlue.addEventListener('click', modoBlue)
btnYellow.addEventListener('click', modoYellow)
btnRed.addEventListener('click', modoRed)
btngreen.addEventListener('click', modogreen)

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
    tela.classList.remove("green")
    imagem.src = ('img/reputation.jpg')
    legenda.textContent = 'Reputation (2017)'
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("pink");
    tela.classList.add("light");
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
    tela.classList.remove("green")
    imagem.src = ('img/ttpd.jpg')
    legenda.textContent = 'The Tortured Poets Department (2024)'
    
}

function modoPink() {
    event.preventDefault();
    console.log('modo pink')
    tela.classList.add("pink");
    tela.classList.remove("light");
    tela.classList.remove("dark");
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
    tela.classList.remove("green")
    imagem.src = ('img/lover.png')
    legenda.textContent = 'Lover (2019)'
}

function modoBlue() {
    event.preventDefault()
    console.log('modo blue')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
    tela.classList.add("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
    tela.classList.remove("green")
    imagem.src = ('img/1989.jpg')
    legenda.textContent = "1989 Taylor's Version (2023)"
}

function modoYellow() {
    event.preventDefault()
    console.log('modo yellow')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
    tela.classList.remove("blue")
    tela.classList.add("yellow")
    tela.classList.remove("red")
    tela.classList.remove("green")
    imagem.src = ('img/fearless.jpg')
    legenda.textContent = "Fearless Taylor's Version (2021)"
}

function modoRed() {
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
    tela.classList.add("red");
    tela.classList.remove("green")
    imagem.src = ('img/red.png');
    legenda.textContent = "Red Taylor's Version (2021)"
}

function modogreen() {
    event.preventDefault();
    console.log('modo green')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
    tela.classList.remove("red");
    tela.classList.add("green");
    imagem.src = ('img/ts.jpg')
    legenda.textContent = 'Taylor Swift (2006)'
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/