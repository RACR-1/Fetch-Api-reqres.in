async function seeAllPages() {
  let number = 0;
  let numberUp = 1;
  const insertboxes = (data) => {
    for (let i = 0; i < data.data.length; i++) {
      returnBoxes(data.data[i]);
    }
  };
  let breaklop = true;
  while (breaklop) {
    fetch(`https://reqres.in/api/users?page=${numberUp}`)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);

        if (data.data.length === 0) {
          console.log("Data Sem conteudo");
          breaklop = false;
        } else {
          insertboxes(data);
        }
      });

    await new Promise((r) => setTimeout(r, 500));
    numberUp++;
  }
}
seeAllPages();
function returnBoxes(dados) {
  let template = `
      <label id="nome">${dados.nome}</label>
      <label id="id">${dados.id}</label>
      <label id="email">${dados.email}</label>
      <img src="${dados.avatar}" id="imgPessoa">
`;
  const divBox = document.createElement("div");
  divBox.classList.add("box");
  divBox.innerHTML = template;
  document.querySelector(".container").appendChild(divBox);
}
