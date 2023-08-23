# Teste Angular Quiz

## Objetivo

Se divirta com um jogo de Quiz onde terá oportunidade de testar seus conhecimentos sobre diferentes categorias, dificuldades, tipos de perguntas e quantidade.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

* Node.js (versão 12 ou superior)
* Angular CLI (15 ou superior)

## Ambiente 

Acesse a URL do projeto em (https://teste-quiz.vercel.app/quiz).

## Iniciando o projeto

Clone este repositório para o diretório desejado em sua máquina:

```
git clone: https://github.com/brenoqn/teste-quiz
```

Navegue até o diretório do projeto:

```
cd teste-quiz
```

Instale as dependências do projeto utilizando o npm (gerenciador de pacotes do Node.js):

```
npm install
```

Para iniciar o servidor de desenvolvimento, execute:

```
ng serve
```

O servidor estará disponível no endereço http://localhost:4200/.

## Estrutura de código

Neste projeto, utilizei a estruturação de HTML e SCSS com uma metodologia chamada BEM. [Saiba mais sobre BEM aqui](https://desenvolvimentoparaweb.com/css/bem/).

Realizei testes unitários e desenvolvi serviços para o consumo da API Open Trivia Database. Também criei serviços para gerenciar o estado dos valores do score e o total de perguntas. Utilizei áudios para indicar quando o usuário acertou ou errou uma questão e também quando estava prestes a finalizar o tempo para selecionar a resposta correta. Como desenvolvedor, gosto de componentizar e modular os componentes, seguindo as estruturas básicas do próprio Angular. Esse estilo de codificação facilita a manutenção e a compreensão do código.

Para as perguntas do quiz, fiz o consumo da API Open Trivia Database, que me proporcionou perguntas de diferentes categorias, graus de dificuldade, quantidade e tipos, seja de múltipla escolha ou verdadeiro/falso. Contudo, a API possui alguns "problemas": por ser uma API que não controlo, algumas perguntas vêm com caracteres especiais e números no meio de uma palavra, atrapalhando o entendimento total da frase. Outro ponto é que a API possui perguntas apenas em inglês. Tomei a decisão de deixar todo o projeto em inglês, oferecendo a possibilidade de tradução pelo Google Translate no navegador.

## Testes Unitários

O projeto foi desenvolvido e projetado com cobertura de testes unitários em Jasmine com um coverage de pelo menos 70% ou mais em todos os COMPONENTES.

![image](https://github.com/brenoqn/teste-quiz/assets/98334393/54baa206-afdb-4756-94f6-360c3d40df18)


Para executar os testes e mostrar o coverage utilize o comando:

```
ng test --code-coverage
```

## Comandos úteis

Aqui estão alguns comandos úteis que você pode utilizar durante o desenvolvimento do projeto:

* ng serve: Inicia o servidor de desenvolvimento em http://localhost:4200/.
* ng build: Compila o projeto para produção. Os arquivos de saída serão gerados no diretório dist/.
* ng test: Executa os testes unitários do projeto.

## Referências

Tive como referências o jogo Kahoot [https://kahoot.it/](https://kahoot.it/).

