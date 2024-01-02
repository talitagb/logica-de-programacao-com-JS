let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function botaoClicado(){
    console.log("O botão foi clicado");
}

function alertaClicado(){
    alert("Eu amo JS");
}

function promptClicado(){
    let cidade = prompt("Escreve uma cidade brasileira: ");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    let numero1 = parseInt(prompt("Digite um número"));
    let numero2 = parseInt(prompt("Digite outro número"));
    let soma = numero1 + numero2;
    alert(soma);
}
