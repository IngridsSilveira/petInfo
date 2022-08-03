//PEGANDO O ARQUIVO DB.JSON
const animais = "db.json";

//PEGANDO O INPUT E SEU VALOR
let input = document.querySelector(".input_search").value

//TRANSFORMANDO TODAS AS LETRAS EM MINUSCULAS
input = input.toLowerCase();

//PEGANDO O BOTÃO
const btn_input = document.querySelector(".search-btn");


//FAZENDO A LIGAÇÃO COM O DB.JSON, NO THEN ESTOU PEGANDO A DATA QUE SÃO OS ANIMAIS E MAP ESTÁ RETORNANDO UM ELEMENTO E ESSE ELEMENTO ESTÁ RETORNANDO UM NOME//
    fetch(animais).then(response => {
        return response.json();
      })
      .then(data => {
        const nomeCachorros = data.cachorros
        .map(element => {
            return element.nome;
        })

        const nomeGatos = data.gatos
        .map(element => {
            return element.nome
        })

        const nomeCoelhos = data.coelhos
        .map(element => {
            return element.nome;
        })

        //INSERINDO OS NOMES EM VARIAVEIS
       let nCach = nomeCachorros;
       let nGatos = nomeGatos;
       let nCoelhos = nomeCoelhos;

        //TRANSFORMANDO EM UM ARRAY
        //let array = [...nCach, ...nGatos, ...nCoelhos];


        btn_input.addEventListener("click", function(){
            for(i = 0; array.length; i++){
               
                }
            })
        })