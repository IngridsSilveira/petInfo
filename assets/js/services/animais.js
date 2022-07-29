const listaAnimais = () => fetch("http://localhost:3000/cachorros").then(resposta => resposta.json())

const listaGatos = () => fetch("http://localhost:3000/gatos").then(resposta => resposta.json())

const listaCoelhos = () => fetch("http://localhost:3000/coelhos").then(resposta => resposta.json())

export const animaisServices = {
    listaAnimais,
    listaGatos,
    listaCoelhos
}