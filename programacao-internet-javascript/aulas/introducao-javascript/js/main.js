

function clicou() {

    document.getElementById("agradecimento").innerHTML = "<h1>Obrigado por clicar!</h1>";
    // alert('Obrigado por clicar!');
}

function redirecionar() {
    //window.open("https://globallabs.academy/")
    window.location.href = "https://globallabs.academy/"
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function change(elemento) {
    console.log(elemento.value);
}


// FUNÇÕES ==========================

// function soma(n1, n2) {
//     return n1 + n2;
// }

// function validaIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("IDADE? ");
// // alert(`Resultado ${soma(5, 6)}`);
// alert(validaIdade(idade));


// DATA =============================

// var d = new Date();
// alert(d);
// alert(d.getMonth() + 1);
// alert(d.getMinutes());
// alert(d.getDay());
// alert(d.getHours());



// LAÇOS DE REPETIÇÃO ===============

// for (let count = 0; count <= 3; count++) {
//     alert(`Nº ${count}`);
// }

// var count = 0;
// while (count <= 100) {
//     console.log(count);
//     count++;
// }


// CONDICIONAIS =====================

// var idade = prompt("Qual sua idade? ");
// if (idade >= 17) {
//     alert('Maior de idade');
// } else {
//     alert('Menor de idade');
// }

// alert(`Você informou ${idade}25`);

// OBJETO ===========================

// var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = { nome: "maçã", cor: "vermelha" };
// console.log(fruta.nome);
// alert(fruta.cor);


// ARRAY ============================

// var lista = ["laranja", "pêra", "laranja"];

// lista.push("uva"); // adiciona item
// lista.pop(); // emove item

// console.log(lista.reverse());
// console.log(lista.length);
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" -> "));

// var nome = 'Leonardo K. Luz';
// var idade = 37;
// var idade2 = 23;
// var frase = 'Japão é o melhor time do mundo!'

// alert(frase.replace('Japão, Brsil'));
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace('Japão, Brsil'));