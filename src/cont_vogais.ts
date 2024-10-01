export function contarVogais(entrada: string): number {
    const vogais = "aeiou";
    let count = 0;

    // limpa a entrada sem acentos e maiuscula e minúscula
    const entradaLimpa = entrada.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    for(let letra of entradaLimpa) {
        if (vogais.includes(letra)) {
            count++;
        }
    }

    return count;
}

// // Ex a) - uso com palavra recebida via parâmetro
// const palavra = 'programar';
// const qntVogaisPalavra = contarVogais(palavra);
// console.log(`A palavra "${palavra}" tem ${qntVogaisPalavra} vogais.`);

// // Ex b) - uso com palavra recebida via input do usuário
// const entradaUsuario  = prompt("Digite uma palavra: ");
// if(entradaUsuario) {
//     const qntVogaisEntrada = contarVogais(entradaUsuario);
//     console.log(`A palavra "${entradaUsuario}" tem ${qntVogaisEntrada} vogais.`);
// }
