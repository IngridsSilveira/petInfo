

/*const listaAnimais = () => fetch("http://localhost:3000/cachorros", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

const listaGatos = () => fetch("http://localhost:3000/gatos", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());

const listaCoelhos = () => fetch("http://localhost:3000/coelhos", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(resposta => resposta.json());
*/

async function listaAnimais() {
    try {
      const response = await fetch('http://localhost:3000/cachorros', {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  };
  
async function listaGatos() {
    try {
      const response = await fetch('http://localhost:3000/gatos', {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  };

async function listaCoelhos() {
    try {
      const response = await fetch('http://localhost:3000/coelhos', {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  };


export const animaisServices = {
    listaAnimais,
    listaGatos,
    listaCoelhos
}