#TesteQuiz

Este projeto foi gerado com a versão 15.2.6 do Angular CLI.

##Servidor de desenvolvimento

Você pode acessar o projeto através do servidor onde foi carregado, usando a URL https://teste-quiz.vercel.app/quiz. Se preferir, você também pode rodar o projeto localmente. Para isso, execute ng serve e acesse http://localhost:4200/.

##Estrutura de código

Neste projeto, utilizei a estruturação de HTML e SCSS com uma metodologia que conheço e considero bastante organizada, chamada BEM. Você pode saber mais sobre essa estrutura no site sobre BEM (https://desenvolvimentoparaweb.com/css/bem/). 
Realizei testes unitários e desenvolvi serviços para o consumo da API Open Trivia Database. Também criei serviços para gerenciar o estado dos valores do score e o total de perguntas. Utilizei áudios para indicar quando o usuário acertou ou errou uma questão e também quando estava prestes a finalizar o tempo para selecionar a resposta correta.
Como desenvolvedor, gosto de componentizar e modular os componentes, seguindo as estruturas básicas do próprio Angular. Esse estilo de codificação facilita a manutenção e a compreensão do código.
Para as perguntas do quiz, fiz o consumo da API Open Trivia Database, que me proporcionou perguntas de diferentes categorias, graus de dificuldade, quantidade e tipos, seja de múltipla escolha ou verdadeiro/falso.
Contudo, a API possui alguns "problemas": por ser uma API que não controlo, algumas perguntas vêm com caracteres especiais e números no meio de uma palavra, atrapalhando o entendimento total da frase. Outro ponto é que a API possui perguntas apenas em inglês. Tomei a decisão de deixar todo o projeto em inglês, oferecendo a possibilidade de tradução pelo Google Translate no navegador.
