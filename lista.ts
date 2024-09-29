let lista = [
    {"id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrónomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

// a) retorna a bio dado um id
// funcional
function getBioFunc(id: number): string {
    return lista.find(pessoa => pessoa.id === id)?.bio || "Bio não encontrada.";
}

// imperativo
function getBioImp(id: number): string {
    for (let i = 0; i < lista.length; i++) {
        if(lista[i].id === id) {
            return lista[i].bio;
        }
    }
    return "Bio não encontrada.";
}

// b) retorna o name dado um id
// funcional
function getNameFunc(id: number): string {
    return lista.find(pessoa => pessoa.id === id)?.name || "Nome não encontrado";
}

// imperativo
function getNameImp(id: number): string {
    for (let i = 0; i < lista.length; i++) {
        if(lista[i].id === id) {
            return lista[i].name;
        }
    }
    return "Nome não encontrado";
}

// c) função que remove por id
// funcional
function removeItemFunc(id:number): void {
    // atualiza a lista removendo o item com o id 
    lista = lista.filter(pessoa => pessoa.id !== id);
}

// imperativo
function removeItemImp(id: number): void{
    const index = lista.findIndex(pessoa => pessoa.id === id);
    if(index !== -1) {
        // remove o item encontrado na posição do index
        lista.splice(index, 1);
    }
}

// d) altera bio ou name dado um id
// funcional
function updateItemFunc(id:number, newName?: string, newBio?: string): void{
    lista = lista.map(pessoa => {
        if (pessoa.id === id) {
            return { ...pessoa, name: newName || pessoa.name, bio: newBio || pessoa.bio};
        }
        return pessoa;
    });
}

// imperativo
function updateItemImp(id: number, newName?: string, newBio?: string): void {
    const pessoa = lista.find(pessoa => pessoa.id === id);
    if(pessoa) {
        if(newName) pessoa.name = newName;
        if(newBio) pessoa.bio = newBio;
    }
}