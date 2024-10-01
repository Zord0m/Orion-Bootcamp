import { contarVogais } from "./cont_vogais";
import { lista, getBioFunc, removeItemFunc, updateItemFunc } from "./lista";

// função contarVogais
document.getElementById("formularioVogais")?.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const palavraInput = (document.getElementById("palavra") as HTMLInputElement).value;

    const result = contarVogais(palavraInput);

    document.getElementById("resultado")!.innerText = `A palavra "${palavraInput}" tem ${result} vogais.`;

    (document.getElementById("palavra") as HTMLInputElement).value = "";
});

// função getBioFunc
document.getElementById("bioForm")?.addEventListener("submit", function(evento){
    evento.preventDefault();

    const idInput = parseInt((document.getElementById("id") as HTMLInputElement).value, 10);

    const result = getBioFunc(idInput);

    document.getElementById("listaResultado")!.innerText = result;

    (document.getElementById("id") as HTMLInputElement).value = "";
});

// função removeItemFunc
document.getElementById("removeForm")?.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const idInput = parseInt((document.getElementById("idRemove") as HTMLInputElement).value, 10);

    removeItemFunc(idInput);

    document.getElementById("removerResultado")!.innerText = `Item com ID ${idInput} removido da lista.`;

    renderLista();

    (document.getElementById("idRemove") as HTMLInputElement).value = "";
});

// função updateItemFunc
document.getElementById("atualizaForm")?.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const idInput = parseInt ((document.getElementById("idAtualizar") as HTMLInputElement). value, 10);
    const newName = (document.getElementById("novoNome") as HTMLInputElement).value;
    const newBio = (document.getElementById("novaBio") as HTMLInputElement).value;

    updateItemFunc(idInput, newName, newBio);
    
    document.getElementById("atualizaResult")!.innerText = `Item com ID ${idInput} atualizado`;

    renderLista();

    (document.getElementById("idAtualizar") as HTMLInputElement).value = "";
    (document.getElementById("novoNome") as HTMLInputElement).value = "";
    (document.getElementById("novaBio") as HTMLInputElement).value = "";

});

// função que exibe e atualiza a lista no HTML
function renderLista() {
    const listaElemento = document.getElementById("listaCientistas")!;

    listaElemento.innerHTML = "";

    lista.forEach(cientistas=> {
        const item = document.createElement("div");
        item.innerText = `ID: ${cientistas.id} - Nome: ${cientistas.name} - Bio: ${cientistas.bio}`;
        listaElemento.appendChild(item);
    });
}

renderLista();