const readline = require('readline');

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

///// <---Exercicio 1----> \\\\\
prompt.question("Digite um valor: ", (inputNumber) => {
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

    const numbers = []

    for (let count = 0; count < inputNumber; count++) {
        numbers.push(fibonacci(count))
    }

    const findNumber = numbers.find(number => {
        return number == inputNumber
    })

    console.log(findNumber != undefined ? `Este numero está presente na sequência: ${numbers}` : `Numero não está presente na sequência!: ${numbers}`);

    prompt.close()
})

///// <---Exercicio 2----> \\\\\
// prompt.question("Digite uma palavra: ", (input) => {
//     let letters = []
//     for (let i = 1; i <= input.length; i++) {
//         letters.push(input[input.length - i])
//     }

//     const finalWord = letters.reduce((indx, acc) => {
//         return indx + acc
//     })

//     prompt.write(`Aqui está a palavra invertida: ${finalWord}`)

//     prompt.close()
// })







