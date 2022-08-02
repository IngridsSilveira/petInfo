const cachorrosURL = "db.json";
const gatosURL = "db.json";
const coelhosURL = "db.json";

const container = document.querySelector('[data-container]')
const container2 = document.querySelector('[data-container2]')
const container3 = document.querySelector('[data-container3]')

function pegandoCachorros(){
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
    }).join("");
    container.innerHTML = html;
  })
}

function pegandoGatos(){
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
    }).join("");
    container2.innerHTML = html;
  })
}

function pegandoCoelhos() {
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
      }).join("");
      container3.innerHTML = html;
    })
}

pegandoCachorros();
pegandoGatos();
pegandoCoelhos();