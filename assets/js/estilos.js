const cachorros = document.querySelector('[data-dog]')
const gatos = document.querySelector('[data-cat]')
const coelhos = document.querySelector('[data-rabbit]')
const todos = document.querySelector('[data-todos-animais]')

const background = document.querySelector('.background');
const texto = document.querySelector('.sub_titulo');
const conteudoCachorros = document.querySelector('[data-conteudo-cachorros]')
const conteudoGatos = document.querySelector('[data-conteudo-gatos]')
const conteudoCoelhos = document.querySelector('[data-conteudo-coelhos]')

todos.addEventListener('click', () => {

    texto.innerHTML = "Todos os animais";

    background.style.backgroundImage = "url(assets/images/background.jpeg)";
    background.style.backgroundSize = "contain";
    background.style.backgroundPosition = "center";

    conteudoGatos.style.display = "flex";
    conteudoCoelhos.style.display = "flex";
    conteudoCachorros.style.display = "flex";
});


cachorros.addEventListener('click', () => {

    //MUDA O ESTILO DO BACKGROUND//
    texto.innerHTML = "Cachorros";
    background.style.backgroundImage = "url(assets/images/dog-bg.jpeg)";
    background.style.backgroundSize = "cover";
    background.style.backgroundPosition = "top";

    //ESCONDE AS DIVS//
    conteudoGatos.style.display = "none";
    conteudoCoelhos.style.display = "none";
    conteudoCachorros.style.display = "flex";
});


gatos.addEventListener('click', () => {
    texto.innerHTML = "Gatos";
    background.style.backgroundImage = "url(assets/images/cats-bg.jpeg)";
    background.style.backgroundSize = "cover";
    background.style.backgroundPosition = "center";

    conteudoCachorros.style.display = "none";
    conteudoCoelhos.style.display = "none";
    conteudoGatos.style.display = "flex";
});


coelhos.addEventListener('click', () => {
    texto.innerHTML = "Coelhos";
    background.style.backgroundImage = "url(assets/images/rabbit-bg.jpeg)";
    background.style.backgroundPosition = "bottom";
    background.style.backgroundSize = "cover";

    conteudoCachorros.style.display = "none";
    conteudoGatos.style.display = "none";
    conteudoCoelhos.style.display = "flex";
});