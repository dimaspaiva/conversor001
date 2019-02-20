let entrada = document.getElementById("entrada");
let saida = document.getElementById("saida");
let converter = document.getElementById("converter");

const sinais = [];
let resposta;

converter.addEventListener("click", e => {
  const normal = entrada.value;

  const resposta = [];
  const algarismos = [];
  const sinais = [];
  const sinaisParents = [];
  let flag = 0;

  let string = normal.split("");

  console.log(string);
  for (let i in string) {
    let n = parseInt(i);
    if (string[n] === "(") {
      flag = 1;
    } else if (string[n] === ")") {
      flag = 0;
    }
    if (flag === 1) {
      if (
        string[n] === "+" ||
        string[n] === "-" ||
        string[n] === "*" ||
        string[n] === "/"
      ) {
        // Salva os sinais numa array estilo pilha
        sinaisParents.push(string[n]);
      } else if (string[n] !== "(" && string[n] !== ")") {
        if (string[n + 1] === "*" || string[n + 1] === "/") {
          if (
            sinaisParents[sinaisParents.length - 1] === "*" ||
            sinaisParents[sinaisParents.length - 1] === "/"
          ) {
            // se o próximo for multiplicação ou divisão remove a prioridade
            resposta.push(sinaisParents.pop());
            resposta.push(string[n]);
          } else {
            // se não só adiciona caracteres
            resposta.push(string[n]);
          }
        } else if (sinaisParents.length > 2) {
          // detecta o final da array e solta sinais que faltam
          resposta.push(string[n]);
          resposta.push(sinaisParents.pop());
          resposta.push(sinaisParents.pop());
        } else if (resposta.length % 2 !== 0) {
          // se não for o primeiro digito já começa a descarregar
          resposta.push(string[n]);
          resposta.push(sinaisParents.pop());
        } else {
          // quando é o primeiro número
          resposta.push(string[n]);
        }
      }
    } else {
      if (
        string[n] === "+" ||
        string[n] === "-" ||
        string[n] === "*" ||
        string[n] === "/"
      ) {
        // Salva os sinais numa array estilo pilha
        sinais.push(string[n]);
      } else if (string[n] !== "(" && string[n] !== ")") {
        if (string[n + 1] === "*" || string[n + 1] === "/") {
          if (
            sinais[sinais.length - 1] === "*" ||
            sinais[sinais.length - 1] === "/"
          ) {
            // se o próximo for multiplicação ou divisão remove a prioridade
            resposta.push(sinais.pop());
            resposta.push(string[n]);
          } else {
            // se não só adiciona caracteres
            resposta.push(string[n]);
          }
        } else if (resposta.length % 2 !== 0) {
          // se não for o primeiro digito já começa a descarregar
          resposta.push(string[n]);
          resposta.push(sinais.pop());
        } else if (sinais.length > 1) {
          // detecta o final da array e solta sinais que faltam
          resposta.push(string[n]);
          resposta.push(sinais.pop());
          resposta.push(sinais.pop());
        } else {
          // quando é o primeiro número
          resposta.push(string[n]);
        }
      } else if (
        string[n] === ")" &&
        (sinais[sinais.length - 1] === "*" || sinais[sinais.length - 1] === "/")
      ) {
        resposta.push(sinais.pop());
      }
    }
  }
  for (let i in sinais) {
    resposta.push(sinais.pop());
  }

  saida.textContent = resposta.join("");
});

entrada.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    converter.click();
  }
});
