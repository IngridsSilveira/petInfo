const cachorrosURL = "db.json";
const gatosURL = "db.json";
const coelhosURL = "db.json";

const container = document.querySelector('[data-container]')
const container2 = document.querySelector('[data-container2]')
const container3 = document.querySelector('[data-container3]')

//PEGANDO O INPUT E SEU VALOR
let input = document.querySelector(".input_search").value

//TRANSFORMANDO TODAS AS LETRAS EM MINUSCULAS
input = input.toLowerCase();

//PEGANDO O BOTÃO
const btn_input = document.querySelector(".search-btn");

  fetch(cachorrosURL).then(response => {
    return response.json();
  })
  .then(data => {
    const html = data.cachorros.
    map(element => {
      return `
      <div class="conteudo">
        <img class="imagens" src="${element.image}"/>
        <h3 class="titles">${element.nome}</h3>
        <p class="descricao">${element.descricao}</p>
      </div>
    `
    });
    container.innerHTML = html;
  })

  fetch(gatosURL).then(response => {
    return response.json();
  })
  .then(data => {
    const html = data.gatos.
    map(element => {
      return `
      <div class="conteudo">
        <img class="imagens" src="${element.image}"/>
        <h3 class="titles">${element.nome}</h3>
        <p class="descricao">${element.descricao}</p>
      </div>
      `
    });
    container2.innerHTML = html;
  })

  fetch(coelhosURL).then(response => {
      return response.json();
    })
    .then(data => {
      const html = data.coelhos.
      map(element => {
        return `
        <div class="conteudo">
            <img class="imagens" src="${element.image}"/>
            <h3 class="titles">${element.nome}</h3>
            <p class="descricao">${element.descricao}</p>
        </div>
      `
      });
      container3.innerHTML = html;

    const nomes = document.querySelectorAll(".titles");
      btn_input.addEventListener("click", function(){
        for(i = 0; i < nomes.length; i++){
              if(nomes[i].innerHTML.includes(input)){
                nomes[i].style.color = '#ff0000';
              }
            }
        })
    })