const cachorrosJson = { cachorros: [
    {
      "nome": "Rex",
      "descricao": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishings.",
      "id": 1,
      "image": "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/assets/images/dog1.jpeg"
    },
    {
      "nome": "Doguito",
      "descricao": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishings.",
      "id": 2,
      "image": "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/assets/images/dog2.jpeg"
    },
    {
      "nome": "Split",
      "descricao": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishings.",
      "id": 3,
      "image": "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/assets/images/dog3.jpeg"
    },
    {
      "nome": "Bambi",
      "descricao": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishings.",
      "id": 4,
      "image": "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/assets/images/dog4.jpeg"
    },
    {
      "nome": "Harry",
      "descricao": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishings.",
      "id": 5,
      "image": "https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/assets/images/dog5.jpeg"
    }
  ] }

  const teste = localStorage.setItem("cachorros", JSON.stringify(cachorrosJson))


  const cachorrosAA = JSON.stringify(localStorage.getItem("cachorros"));

  const novoAnimal = (nome, descricao, id, image) => {
    const container = document.querySelector('[data-container]')
    const conteudo = `
        <div class="conteudo" ${id}>
        <img src="${image}" class="imagens" alt="cachorro">
        <p class="titles">${nome}</p>
        <p class="descricao">${descricao}</p>
        </div>
    `
    //container.innerHTML = cachorrosAA;

    return container
}
novoAnimal();