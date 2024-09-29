function contarVogais(entrada: string): number {
    const vogais = "aeiou"
    let count = 0

    for(let letra of entrada.toLowerCase()) {
        if (vogais.includes(letra)) {
            count++;
        }
    }

    return count;
}