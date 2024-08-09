document.addEventListener("DOMContentLoaded", function () {

    // Declarando as variáveis
    const inputNome = document.querySelector("#idNome");
    const botaoAdd = document.querySelector("#btnAdd");
    const lista = document.querySelector("#lista");

    // Declarando a variável que vai receber a lista de nomes, iniciando vazia
    let listaNomes = [];

    // Função para adicionar nome à lista
    function addNome(nome) {
        if (nome !== undefined && nome !== "") {
            listaNomes.push(nome);
            inputNome.value = "";
            renderizarLista();
            console.log("Nome inserido com sucesso");
        } else {
            console.log("Por favor, insira um nome na lista");
        }
    }

    // Função para renderizar a lista
    function renderizarLista() {
        lista.innerHTML = "";
        for (let i = 0; i < listaNomes.length; i++) {
            const listaElement = document.createElement("li");
            listaElement.textContent = listaNomes[i];
            lista.appendChild(listaElement);
        }
    }

    // Adicionando o evento ao botão
    botaoAdd.addEventListener('click', function (e) {
        e.preventDefault();
        addNome(inputNome.value);
    });
});
