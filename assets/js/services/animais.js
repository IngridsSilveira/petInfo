const cachorrosURL = "assets/js/services/dogs.json";
const gatosURL = "db.json";
const coelhosURL = "db.json";

const listaAnimais = () => fetch(cachorrosURL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
        }
}).then(resposta => resposta.json());

listaAnimais().then(resposta => console.log(resposta));

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