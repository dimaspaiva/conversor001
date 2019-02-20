# Conversor 001

Infix to postfix conversor

## Objetivos

Este trabalho tem como principal função a criação e implementação de um algoritmo que converta um função fixada, escrita como resolvemos '''( a + b _ c )''', para a excrita pósfixada, onde os sinais estão após os algarismos, ou seja nosso exemplo anterio ficaria (a b c _ +).
Este padrão respeita as regras de prioridades normais da matemática, onde soma e subtração estão no mesmo nível e são menos prioritários do que multiplicação e divisão, que por sua vez são menos importantes que potencia. Outra questão que pode alterar a sequência de operação são os parenteses, que não importa a equação no seu interior, sobe o nível de prioridade acima das outras operações.
Sendo assim podemos tabelar nossa prioridade em:

- Soma ou subtração = 1
- Multiplicação ou divisão = 2
- Potencia = 3
- Parenteses = 10

Neste exercício, não focaremos na potência, apenas nas operações mais simples. Também não concentraremos na resolução, apenas na transcrição das equações.

## Funcionamento

O algoritmo faz uso de duas pilhas para armazenar os simbolos das operações, por observação, neste caso, sabe-se que as pilhas nunca terão altura maior que 2, uma vez que se analisarmos o próximo sinal após o algarismos podemos ver a prioridade do próximo item, sendo assim, se for superior o item devera ser armazenado na pilha até que o próximo item tenha prioridade menor ou igual a sua.
Basicamente o algoritmo empilha o sinal e aguarda o próximo sinal, se estiver entre parenteses ele cria uma nova pilha e funciona igual ao sem parentese, apenas resolvendo caso a equação acabe com parentese, caso contrário continua a execução da onde parou na pilha de sinais principal.

## Entradas

Para o funcionamento correto, parte-se do pressuposto que a entrada será sempre composta por **N** algarismos e **N-1** sinais, nunca gerando valores como `1++1 || 1+1+ || +1+1` ou qualquer outro valor que não siga o padrão de uma equação normal, seja ela escrita com números ou letras.

## Resposta de Base

```Javascript
1 + 1 + 2 = 1 1 + 2 +
1 + 1 _ 2 = 1 1 2 _ +
2 _ 2 / 2 = 2 2 _ 2 /
( 1 + 3 ) _ ( 5 + 2 ) = 1 3 + 5 2 + _
a + b = a b +
a _ b = a b _
a + (a + b) _ c = a a b + c _ +
```

## Para rodar

Existe um _script_ pronto e também o inicializador do servidor de test está em index.js, então basta rodar

`npm run start`

`yarn start`

`node .`

`nodemon .`

#### Materia

**Compiladores** - Ciência da Computação
Instituto Federal do Sul de Minas Campus Muzambinho, turma 08
Fevereiro 2019
