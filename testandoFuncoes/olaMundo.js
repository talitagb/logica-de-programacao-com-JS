//Função qie exibe Olá mundo! no console
function primeiraFuncao(){
    console.log("Olá mundo!");
}

primeiraFuncao();

//Função que recebe um nome como parametro e exibe no console

function seuNome(nome){
    console.log(nome);
}

seuNome('Talita');

//Função que recebe um número como parameto e retorna o dobro desse número(existem formas mais complexas de se fazer)

function dobroDoNumero(numero){
    let dobro = numero * 2;
    return dobro;
}

dobro = dobroDoNumero(3);
console.log(dobro)

//Função recebe dois números como parametros e retorna o maior deles
function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
      return `O ${numero1} é maior do que o ${numero2}`;
    } else if (numero2 > numero1) {
      return `O ${numero2} é maior do que o ${numero1}`;
    } else {
      return `Os números ${numero1} e ${numero2} são iguais`;
    }
  }
  
  let resultado = maiorNumero(5, 8);
  console.log(resultado);