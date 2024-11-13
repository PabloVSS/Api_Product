# Api Product

Bem-vindo ao projeto Api_Product! Este é um projeto de backend desenvolvido em JavaScript utilizando o framework NestJs. A API foi criada para gerenciar produtos de forma simples e eficiente, permitindo a criação, leitura, atualização e exclusão de produtos.

Welcome to the Api_Product project! This is a backend project developed in JavaScript using the NestJs framework. The API was created to manage products in a simple and efficient way, allowing products to be created, read, updated and deleted.


## 📝 Visão Geral | Project Overview

Este projeto tem como objetivo fornecer uma solução básica para o controle de produtos, ideal para quem está começando a explorar o desenvolvimento de APIs com NestJs. A aplicação não possui integração com banco de dados, ou seja, todas as alterações são mantidas apenas durante a execução do servidor e são perdidas após o reinício..

This project aims to provide a basic solution for product control, ideal for those who are just starting to explore API development with NestJs. The application has no database integration, meaning that all changes are only kept while the server is running and are lost after a restart.

## Funcionalidades

- Criação de Produtos: Usando a URL http://localhost:3000/product/ com ação POST e enviando um JSON com as informações requirdas pela Entity;

- Listagem de Produtos: Usando a URL  http://localhost:3000/product/ com a ação GET, receber todos os produtos;

- Visualização de Produto Específico:  Usando a URL  http://localhost:3000/product/{id} com a ação GET, onde {id} é o ID do produto que deseja vizualizar

- Atualização de Produtos: Usando a URL http://localhost:3000/product/ com a ação PATCH e enviando um Json com o ID desejado e o campo a ser atualizado com os novos dados. Isso irá atualizar o produto desejado;

- Exclusão de Produtos: Usando a URL http://localhost:3000/product/{id} com a ação DELETE, especificando o {id} do produto a ser excluido.

## Features

- Product creation: Use the URL http://localhost:3000/product/ with the POST method, sending a JSON with the information required by the Entity.

- Product Listing: Use the URL http://localhost:3000/product/ with the GET method to receive all products.

- Specific Product View: Use the URL http://localhost:3000/product/{id} with the GET method, where {id} is the ID of the product you want to view.

- Product Update: Use the URL http://localhost:3000/product/ with the PATCH method, sending a JSON with the desired ID and the field you want to update with the new data. This will update the product.

- Deleting Products: Use the URL http://localhost:3000/product/{id} with the DELETE method, specifying the {id} of the product to delete.

## Tecnologias

NestJs: Framework para construção de aplicações Node.js.

TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.

## Tecnologies

NestJs: Framework for building Node.js applications.

TypeScript: Programming language that adds static typing to JavaScript.

  
## 📂 Estrutura do Projeto

Como o projeto é simples, criei três pastas: produtos, constants e requirements. A pasta produtos contém toda a estrutura necessária para o funcionamento da API. Dentro dela, temos os entities, responsáveis por gerenciar as informações que serão manipuladas, e os controllers, que, como o nome sugere, controlam as operações da API. Além disso, a pasta constants armazena informações auxiliares que ajudam a verificar se a API está funcionando corretamente. A pasta requirements, por sua vez, é utilizada para testar as URLs utilizando uma extensão do VSCode chamada REST Client, permitindo realizar as requisições diretamente no editor.

## Project structure

Since the project is simple, I created three folders: produtos, constants, and requirements. The produtos folder contains all the necessary structure for the API to function. Inside it, we have the entities, which are responsible for managing the information that will be manipulated, and the controllers, which, as the name suggests, control the API's operations. Additionally, the constants folder stores auxiliary information that helps verify if the API is working correctly. The requirements folder, on the other hand, is used to test the URLs using a VSCode extension called REST Client, allowing you to make requests directly in the editor.



```plaintext

/api_product/
├── src/
│   ├── constants/
│   │   └── products.ts
│   ├── product/
│   │   ├── product.controller.ts
│   │   ├── product.entity.ts
│   │   └── product.module.ts
│   ├── main.ts
│   └── app.module.ts
├── .eslintrc.js
├── .gitattributes
├── .gitignore
├── .prettierrc
├── README.md
├── nest-cli.json
├── package-lock.json
├── package.json
├── tsconfig.build.json
└── tsconfig.json


```

# Clone o repositório
git clone https://github.com/seu-usuario/Api_Product

# Instale as dependências
npm install

# Inicie o projeto
npm start


