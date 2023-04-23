/* Escopo Léxico */

console.log("\nEscopo Léxico\n")

/* Existem dois tipos de escopos. O escopo léxico e o escopo dinâmico. A grande maioria das
* linguagens de programação utilizam o escopo léxico, enquanto que algumas outras, como o
* Bash e o Perl utilizam o escopo dinâmico. */

/* O escopo léxico é o escopo que é definido durante a etapa de análise léxica. Ele se
* baseia no local onde as variáveis e os blocos de escopo são criados pelo programador, por
* exemplo: */

function foo(a){

    var b = a * 2;

    function bar(c){
        console.log(a, b, c)
    }

    bar(b * 3);
}

foo(2); //2 4 12

/* No exemplo acima, existem três escopos distintos, são eles: */

/* 1 - O escopo global, que possui apenas o identificador "foo". */

/* 2 - O escopo de "foo", que possui os identificadores "a", "bar" e "b". */

/* 3 - O escopo de "bar", que possui apenas o identificador "c". */

/* O motor sempre executa a busca das variáveis que são referenciadas do escopo mais
* interno de onde uma instrução foi chamada para o escopo mais externo. Essa consulta
* de escopo se encerra no momento em que uma ocorrência é localizada. */

/* Existem duas formas de burlarmos o escopo léxico em tempo de execução. Ambas são
* vistas como más práticas, são elas: */

/* Eval */

console.log("\nEval\n")

/* A função "eval()" recebe uma string como argumento e trata o conteúdo dessa
* string como se tivesse sido, de fato, programado pelo autor do código naquele
* ponto do programa. Basicamente, podemos gerar código dinamicamente dentro do
* programa, e executar esse código como se ele estivesse lá desde o momento da programação. */

function foo(str, a){
    eval(str);
    console.log(a, b)
}

var b = 2; //Era para o valor de "b" ser "2", mas ele executou o "eval" e o valor
                    //passou a ser "3".

foo("var b = 3;", 1)

/* Basicamente, é como se fosse um "SQL Injection". O JS interpreta a string como se fosse
* um código inserido de forma dinâmica. */

/* With */

console.log("\nWith\n")

/* A palavra-chave "with" é um atalho para a criação de diversas referências à
* propriedades de um determinado objeto, sem precisarmos referenciá-lo em cada
* uma delas. */

var obj = {
    a: 1,
    b: 2,
    c: 3
}

/* Forma mais "chata": */
obj.a = 2;
obj.b = 3;
obj.c = 4;

/* Utilizando o "with": */
with(obj){
    a = 3;
    b = 4;
    c = 5;
}

/* Essa função cria um escopo léxico totalmente novo a partir do objeto que
* passamos para ela. O "with" é muito prejudicial, tanto que ele é restringido pelo
* "strict mode". */

/* Enquanto o "with" está sendo executado, as propriedades do objeto podem ser
* acessadas de forma direta, sem referenciarmos o objeto de forma explícita, e isso
* pode causar muitos erros. */

/* Muitas otimizações são feitas durante a fase de compilação. Entre elas, várias consistem
* em analisar o código de forma estática para verificar o local em que as declarações de todas
* as variáveis e funções estão feitas. Ao utilizarmos o "eval()" ou o "with", o motor identifica que
* toda a sua análise do local em que as variáveis se encontram pode estar errada, pois o escopo delas
* pode ser alterado em tempo de execução, dessa forma, as otimizações não são aplicadas. */
