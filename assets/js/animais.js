const URL = 'https://my-json-server.typicode.com/IngridsSilveira/petInfo/db';

const container = document.querySelector('[data-container]');
const container2 = document.querySelector('[data-container2]');
const container3 = document.querySelector('[data-container3]');


  fetch(URL).then(response => {
    return response.json();
  })
  .then(data => {
    const html = data.cachorros.
    map(element => {
      return `
      <div class="conteudo" ${element.id}>
        <img class="imagens" src="${element.image}"/>
        <h3 class="titles" data-nome>${element.nome}</h3>
        <p class="descricao">${element.descricao}</p>
      </div>
      `
    }).join("");
    container.innerHTML = html;
  });

  fetch(URL).then(response => {
    return response.json();
  })
  .then(data => {
    const html = data.gatos.
    map(element => {
      return `
      <div class="conteudo" ${element.id}>
        <img class="imagens" src="${element.image}"/>
        <h3 class="titles" data-nome>${element.nome}</h3>
        <p class="descricao">${element.descricao}</p>
      </div>
      `
    }).join("");
    container2.innerHTML = html;
  });

  fetch(URL).then(response => {
      return response.json();
    })
    .then(data => {
      const html = data.coelhos.
      map(element => {
        return `
        <div class="conteudo" ${element.id}>
            <img class="imagens" src="${element.image}"/>
            <h3 class="titles" data-nome>${element.nome}</h3>
            <p class="descricao">${element.descricao}</p>
        </div>
      `
      }).join("");
      container3.innerHTML = html;

      const pesquisa = document.querySelector(".input_search");

      pesquisa.addEventListener("keyup", function(e){
        let value = e.target.value;

        let nomes = document.querySelectorAll("[data-nome]")

        for (i = 0; i < nomes.length; i++) { 
          if (!nomes[i].innerHTML.toLowerCase().includes(value)) {
          }
          else if(value == "rex"){
            nomes[i].style.color = "blue";
          }
          else if(value == "doguito"){
            nomes[i].style.color = "pink";
          }
          else if(value == "split"){
            nomes[i].style.color = "green";
          }
          else if(value == "bambi"){
            nomes[i].style.color = "red";
          }
          else if(value == "harry"){
            nomes[i].style.color = "orange";
          }
          else if(value == "luck"){
            nomes[i].style.color = "brown";
          }
          else if(value == "buck"){
            nomes[i].style.color = "lime";
          }
          else if(value == "stonk"){
            nomes[i].style.color = "turquoise";
          }
          else if(value == "john"){
            nomes[i].style.color = "cadetblue";
          }
          else if(value == "ralf"){
            nomes[i].style.color = "purple";
          }
          else if(value == "sony"){
            nomes[i].style.color = "yellow";
          }
          else if(value == "snook"){
            nomes[i].style.color = "lightgreen";
          }
          else if(value == "henry"){
            nomes[i].style.color = "teal";
          }
          else if(value == "sid"){
            nomes[i].style.color = "violet";
          }
          else if(value == "tony"){
            nomes[i].style.color = "coral";
          }
        }
      })
  });