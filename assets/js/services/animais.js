const cachorrosURL = "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/db.json";
const gatosURL = "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/db.json";
const coelhosURL = "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/db.json";

const listaAnimais = () => fetch(cachorrosURL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
        }
}).then(resposta => resposta.json());

const listaGatos = () => fetch(gatosURL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}).then(resposta => resposta.json());

const listaCoelhos = () => fetch(coelhosURL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}).then(resposta => resposta.json());

export const animaisServices = {
    listaAnimais,
    listaGatos,
    listaCoelhos
}