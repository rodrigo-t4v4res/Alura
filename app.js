// 1. Crie um array para armazenar os nomes
let listaAmigos = [];

// 2. Implemente uma função para agregar amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo !== '') {
        listaAmigos.push(nomeAmigo);
        atualizarListaAmigos();
        inputAmigo.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// 3. Implemente uma função para atualizar a lista de amigos
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; // Limpa a lista atual

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigosElement.appendChild(li);
    });
}

// 4. Implemente uma função para sortear os amigos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    const listaEmbaralhada = embaralharLista([...listaAmigos]);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Limpa o resultado anterior

    listaEmbaralhada.forEach((amigo, index) => {
        const amigoSorteado = listaEmbaralhada[index + 1] || listaEmbaralhada[0]; // O último sorteia o primeiro
        const li = document.createElement('li');
        li.textContent = `${amigo} tirou ${amigoSorteado}`;
        resultadoElement.appendChild(li);
    });
}

// Função auxiliar para embaralhar a lista
function embaralharLista(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}