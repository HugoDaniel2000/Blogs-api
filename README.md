# :dart: Projeto Blogs Api
Projeto desenvolvido no módulo 24, durante o módulo de back-end no curso de desenvolvimento web da Trybe.


## :brain: Habilidades

Construir uma API :

-Criando associações entre tabelas usando models do sequelize

-Criando endpoints para consumir o banco de dados

-Fazer um CRUD com o ORM


## :wrench: O que foi desenvolvido

Desenvolvido uma API utilizando a arquitetura MSC e Sequelize!

A API a ser construída trata-se de um sistema de gerenciamento de post e usuários de um blog, onde será possível criar, visualizar, deletar e atualizar postagens e usuários.

**⚠️ Atenção:**

- Não há front-end neste projeto;


## :dart: Instruções para visualizar o projeto:

1. Como baixar o projeto

- Realizar o git clone: `git clone git@github.com:HugoDaniel2000/Blogs-api.git`;

> Instale as dependências com `npm install`
> Execute o comando `npm run prestart` para inicar o banco de dados
> Execute o comando `npm seed` para popular o banco de dados

> Inicie o projeto com `npm start` ou `npm run dev`

- Criar um arquivo `.env` na raiz do projeto;

- Setar as variavéis de ambiente no arquivo `.env`:
  ```
  MYSQL_USER
  MYSQL_PASSWORD
  HOSTNAME
  JWT_SECRET
  ```
## Tabelas
O banco tem quatro tabelas: _BlogPosts_, _Categories_, _PostsCategories_ e _Users_.

2. Documentação da API: 
