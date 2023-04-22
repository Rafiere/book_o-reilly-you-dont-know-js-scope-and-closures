/* O conjunto de regras para armazenar variáveis em algum lugar e para encontrá-las
* posteriormente é chamdo de "escopo". */

/* Teoria de Compiladores: */

console.log("\nTeoria de Compiladores\n")

/* O JavaScript é uma linguagem compilada. O motor do JS realiza muitos passos que
* são efetuados por qualquer compilador tradicional, porém, ele é um pouco mais
* complexo. */

/* Na maioria das linguagens compiladas, o código-fonte vai passar por três passos antes
* de ser executado, que são chamados de "compilação", são eles: */

/* 1 - Tokenização / Análise Léxica: A linguagem quebrará uma string de caracteres em
* pedaços com algum significado para a linguagem, que são chamados de token, assim, a string
* "var a = 2" será quebrada, possívelmente, nos tokens "var", "a", "=", "2" e ";". */

/* 2 - Análise: O conjunto de tokens será transformado em uma árvore de elementos
* aninhados, que, juntos, representam a estrutura gramática do programa. Ela é chamada
* de AST (Abstract Syntax Tree). */

/* A árvore para o primeiro exemplo pode ser feita da seguinte forma: */

/* - VariableDeclaration
*     - Identifier: a
*  - AssignmentExpression
*     - NumericLiteral: 2
* */

/* 3 - Geração de Código: É o processo de obter uma AST (acima) e transformá-la em um código
* executável. */

/* O motor do JavaScript não possui tanto tempo, como as outras linguagens, para otimizar o código
* durante a compilação, porque a compilação do JS acontece, em alguns casos, em alguns microssegundos antes
* do código ser executado. Os motores utilizam o JITs ou outras técnicas para tentar otimizar o JS da melhor
* forma possível. */

/* Entendendo Escopo: */

console.log("\nEntendendo Escopo\n")

/* Para processar o programa "var a = 2" temos três componentes, são eles: */

/* 1 - Motor: Responsável pela compilação do começo ao fim e pela execução do
* programa em JavaScript. */

/* 2 - Compilador: Gerencia todo o trabalho sujo da análise e da geração de código. */

/* 3 - Escopo: Coleta e mantém uma lista de consulta a todas as variáveis, e impõe um rigoroso
* conjunto de regras sobre a maneira como estes identificadores ficam acessíveis para o código que
* está em execução. */

/* Uma BUSCA, como "(console.log(a))", ou seja, buscar pelo valor de "a" para passar para
* o "console.log()" é uma referência RHS, enquanto que o "a = 2" é uma referência
* "LHS" pois queremos encontrar a variável para receber uma atribuição de valor, que é
* o valor "2". */

/* Quando temos escopos aninhados, se uma variável não é encontrada no escopo
* atual, o motor sempre consulta o próximo escopo acima do atual, até que a variável seja
* localizada. */

/* No código abaixo, quando uma busca RHS ocorre para "b" pela primeira vez, essa variável
* não será localizada, e será tomada por uma variável "não-declarada" porque ela não é encontrada
* no escopo. Se em nenhum escopo aninhado for encontrada essa variável, será lançado um
* "Reference Error". */

/* Por outro lado, se o motor executa uma busca LHS, chega no último escopo e não localiza a variável, e se
* o programa não está sendo executado no modo estrito, o escopo global criará uma nova variável com esse
* nome, no escopo global, e a repassará para o motor. */

/* Se uma variável é encontrada em uma busca RHS e tentamos fazer uma operação impossível, como executar
* com uma função um valor que não é uma função, o motor lançará o erro "TypeError", assim, basicamente, temos que
* o "ReferenceError" é falha na resolução de escopo, e o "TypeError" consiste na resolução do escopo sendo bem
* sucedida, mas houve uma tentativa de operação impossível no resultado que foi obtido.*/

