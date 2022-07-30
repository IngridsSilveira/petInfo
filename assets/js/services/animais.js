const listaAnimais = () => fetch("http://localhost:3000/cachorros", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json())

const listaGatos = () => fetch("http://localhost:3000/gatos", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json())

const listaCoelhos = () => fetch("http://localhost:3000/coelhos", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json())

export const animaisServices = {
    listaAnimais,
    listaGatos,
    listaCoelhos
}