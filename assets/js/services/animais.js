const cachorrosURL = "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/db.json";
const gatosURL = "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/db.json";
const coelhosURL = "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/db.json";

const listaAnimais = () => fetch(cachorrosURL, {
    method: "GET",
    mode: 'cors',
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

const listaGatos = () => fetch(gatosURL, {
    method: "GET",
    mode: 'cors',
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

const listaCoelhos = () => fetch(coelhosURL, {
    method: "GET",
    mode: 'cors',
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

export const animaisServices = {
    listaAnimais,
    listaGatos,
    listaCoelhos
}