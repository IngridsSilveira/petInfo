const listaAnimais = () => fetch("http://localhost:3000/cachorros", {
    method: "GET",
    mode: 'cors',
    cache: 'default',
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

const listaGatos = () => fetch("http://localhost:3000/gatos", {
    method: "GET",
    mode: 'cors',
    cache: 'default',
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

const listaCoelhos = () => fetch("http://localhost:3000/coelhos", {
    method: "GET",
    mode: 'cors',
    cache: 'default',
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

export const animaisServices = {
    listaAnimais,
    listaGatos,
    listaCoelhos
}