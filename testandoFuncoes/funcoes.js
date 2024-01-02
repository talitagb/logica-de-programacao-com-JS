//Função que calcula IMC
function calcularIMC(altura, peso){
    const imc = peso / (altura ** 2);
    // Retorna o resultado arredondado para duas casas decimais
    return imc.toFixed(2);
}

let resultadoIMC = calcularIMC(1.52, 54);
console.log(resultadoIMC);


// Função que mostra na tela a tabuada de um número dado como parametro em javascript
function mostrarTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  const numeroParametro = 7;
  mostrarTabuada(numeroParametro);