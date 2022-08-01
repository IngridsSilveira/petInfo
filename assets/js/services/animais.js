const cachorrosURL = "http://localhost:3000/cachorros";
const gatosURL = "http://localhost:3000/gatos";
const coelhosURL = "http://localhost:3000/coelhos";


const listaAnimais = () => fetch(cachorrosURL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

const listaGatos = () => fetch(gatosURL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

const listaCoelhos = () => fetch(coelhosURL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

export const animaisServices = {
    listaAnimais,
    listaGatos,
    listaCoelhos
}