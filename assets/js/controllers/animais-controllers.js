import { animaisServices } from '../services/animais.js';

const novoAnimal = (nome, descricao, id, image) => {
    const card = document.createElement("div");
    const conteudo = `
        <div class="conteudo" ${id}>
        <img src="${image}" class="imagens" alt="cachorro">
        <p class="titles">${nome}</p>
        <p class="descricao">${descricao}</p>
        </div>
    `
    card.innerHTML = conteudo;
    return card
}

const container = document.querySelector('[data-container]')
const container2 = document.querySelector('[data-container2]')
const container3 = document.querySelector('[data-container3]')

const render = async () => {
    try{ 
        const ListaAnimais = await animaisServices.listaAnimais()

        ListaAnimais.forEach(elemento => {
            container.appendChild(novoAnimal(elemento.nome, elemento.descricao, elemento.id, elemento.image));
        });


        const ListaGatos = await animaisServices.listaGatos()

        ListaGatos.forEach(elemento => {
            container2.appendChild(novoAnimal(elemento.nome, elemento.descricao, elemento.id, elemento.image));
        });

        
        const ListaCoelhos = await animaisServices.listaCoelhos()
        ListaCoelhos.forEach(elemento => {
            container3.appendChild(novoAnimal(elemento.nome, elemento.descricao, elemento.id, elemento.image));
        });
    }
    catch(erro){
        console.log(erro);
    }
}
render()