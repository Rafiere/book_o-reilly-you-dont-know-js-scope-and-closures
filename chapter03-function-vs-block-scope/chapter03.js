/* Nesse capítulo, exploraremos as estruturas do JavaScript que são capazes de criar
* um escopo. */

/* Escopo de Funções */

console.log("\nEscopo de Funções\n")

function foo() {

    var b = 2;

    function bar() {
        //...
    }

    var c = 3;
}

/* No exemplo acima, a função "foo()" possui, no seu escopo, as variáveis "b" e "c" declarados. */

/* Essas variáveis não são acessíveis fora desse escopo. */

/* Sempre que possível, é recomendado declararmos variáveis com o menor escopo possível, para
* aplicarmos o princípio do privilégio mínimo. */

/* Funções de Expressão */

console.log("\nFunções de Expressão\n");

/* As funções de expressão são funções que são executadas imediatamente, sem a
* necessidade de chamarmos essa função. Elas são executadas apenas uma única
* vez. Com isso, criamos um escopo local para evitar o conflito de variáveis. */

(function helloWorld() {
    console.log("Hello world!")
})()

/* Funções Anônimas */

console.log("\nFunções Anônimas\n");

/* As funções anônimas não têm um nome no identificador dele. Elas são rápidas e fáceis
* de serem digitadas, porém, elas têm vários inconvenientes, como: */

/* 1 - Elas não tem nome útil para ser exibido em stacktraces, o que pode causar o
* debugging mais difícil. */

/* 2 - Sem um nome, se uma função precisa referir a si mesma, por causa da recursão, por
* exemplo, teremos que utilizar o "arguments.callee", que não é recomendado. */

/* 3 - As funções anônimas acabam omitindo um nome que é útil para fornecer um código mais
* legível e compreensível. */

/* A melhor prática é sempre nomearmos as expressões de função para que o código fique mais
* legível. */

setTimeout(function timeoutHandler(){
    console.log("Eu esperei por um segundo!")
}, 1000)

/* Blocos de Escopo */

console.log("\nBlocos de Escopo\n");

for(var i = 0; i< 10; i++){
    console.log(i)
}

console.log("Nùmero: " + i)

/* No exemplo acima, poderíamos pensar que a variável "i" estaria disponível apenas dentro
* do escopo do "for()", porém, ela está disponível no escopo global. */

/* Um dos únicos lugares em que o escopo de bloco funciona é dentro do bloco "catch" de
* um bloco "try-catch": */

try {
    undefined() //Operação ilegal para forçar a exception.
}catch(err){
    console.log(err) //funciona
}

// console.log(err) - Não funciona, levaremos um "ReferenceError".

/* Declaração de variável com "let" */

console.log("\nDeclaração de variável com 'let'\n");

/* No ES6, temos a palavra-chave "let". Ela é mais recomendada do que a palavra-chave "var" pois
* atribui uma declaração de variável ao escopo do bloco em que ela está inserida, por
* exemplo: */

if(true){
    let bar = 2 * 2;
    console.log(bar)
}

// console.log(bar) - ReferenceError, pois, como usamos "let", a variável foi declarada apenas dentro
                   // daquele escopo.

/* Ao utilizarmos "let", também reduzimos o escopo de declarações, permitindo que o
* Garbage Collector não deixe lixo na memória desnecessário, pois muitas declarações de
* variáveis serão limitadas apenas dentro de um determinado bloco. */
