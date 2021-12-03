# Introdução a programação com JavaScript - Desafios

Nesse desafio de codificação você irá praticar através do desenvolvimento de algoritmos com os conceitos de pensamento computacional apresentados nas aulas e exercícios anteriores.

* Visita na Feira

```javascript
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
```



* Multiplicação Simples

```javascript
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);
```



* Folha de Pagamento

```javascript
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());

// Escreva o seu código aqui
let numeroColaborador = valor1;
let horasTrabalhadas = valor2;
let valorHora = valor3;
let calculo = horasTrabalhadas * valorHora;
let salario;

salario = calculo.toFixed(2);

console.log(`NUMBER = ${numeroColaborador}`);
console.log(`SALARY = U$ ${salario}`);
```



