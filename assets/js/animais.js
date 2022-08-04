const cachorrosURL = "db.json";
const gatosURL = "db.json";
const coelhosURL = "db.json";

const container = document.querySelector('[data-container]')
const container2 = document.querySelector('[data-container2]')
const container3 = document.querySelector('[data-container3]')

  fetch(cachorrosURL).then(response => {
    return response.json();
  })
  .then(data => {
    const html = data.cachorros.
    map(element => {
      return `
      <div class="conteudo">
        <img class="imagens" src="${element.image}"/>
        <h3 class="titles" data-nome>${element.nome}</h3>
        <p class="descricao">${element.descricao}</p>
      </div>
      `
    })
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
        <h3 class="titles" data-nome>${element.nome}</h3>
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
            <h3 class="titles" data-nome>${element.nome}</h3>
            <p class="descricao">${element.descricao}</p>
        </div>
      `
      });
      container3.innerHTML = html;

      const nomes = document.querySelectorAll("[data-nome]");

      const botao = document.querySelector(".search-btn")

      botao.addEventListener("click", function(){
      let input = document.querySelector('.input_search').value
      input = input.toLowerCase();
      
      for (i = 0; i < nomes.length; i++) { 
          if (!nomes[i].innerHTML.toLowerCase().includes(input)) {
              nomes[i].style.backgroundColor = '';
          }
          else {
              nomes[i].style.backgroundColor = '#ccc';
          }
      }
      return
      })
  })