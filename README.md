# Api Product

CRUD de API desenvolvido em JavaScript utilizando o framework NestJS para gerenciar produtos. Essa aplicação permite criar, listar, atualizar e deletar produtos de forma simples e eficiente. Vale destacar que, nesta versão, não há integração com banco de dados, ou seja, as alterações são mantidas apenas durante a execução do servidor, sendo perdidas após o reinício.

API CRUD developed in JavaScript using the framework NestJs to manage products. This Application allows you to create, list, update and delete products simple and efficiently. It`s worth noting that in this version there is no database integration, meaning that changes are only kept while the server is ruuning and are lost after a restart.

## 📝 Visão Geral | Project Overview

Explique os principais objetivos do projeto e o problema que ele resolve. Inclua insights rápidos para mostrar o diferencial.

**Tecnologias** | **Tecnologies**: JavaScript, NestJs
**Funcionalidades principais**: As ações que foram adicionados nesse projeto foram:
-  Criar cadastro de produtos: Usando a URL http://localhost:3000/product/ com ação POST e enviando um JSON com as informações requirdas pela Entity;
-  Listar todos os produtos: Usar a URL  http://localhost:3000/product/ com a ação GET, receber todos os produtos;
-  Listar apenas o produto selecionado: Usar a URL  http://localhost:3000/product/{id} com a ação GET, onde {id} é o ID do produto que deseja vizualizar;
-  Atualizar cadastros de produtos: Usar a URL http://localhost:3000/product/ com a ação PATCH e enviando um Json com o ID desejado e o campo a ser atualizado com os novos dados. Isso irá atualizar o produto desejado;
-  Excluir produtos: Usar a URL http://localhost:3000/product/{id} com a ação DELETE, especificando o {id} do produto a ser excluido.

**Main Features**: The actions included in this project are:

- Create product entry: Use the URL http://localhost:3000/product/ with the POST method, sending a JSON with the information required by the Entity.
- List all products: Use the URL http://localhost:3000/product/ with the GET method to receive all products.
- List a specific product: Use the URL http://localhost:3000/product/{id} with the GET method, where {id} is the ID of the product you want to view.
- Update product entry: Use the URL http://localhost:3000/product/ with the PATCH method, sending a JSON with the desired ID and the field you want to update with the new data. This will update the product.
- Delete a product: Use the URL http://localhost:3000/product/{id} with the DELETE method, specifying the {id} of the product to delete.
  
## 📸 Capturas de Tela | Captures of screen

![Entity](https://github.com/user-attachments/assets/c0905ff6-656a-46df-9289-74b261baf398)

Utilizei um Entity para definir quais dados serão armazenados e organizados.

![controller](https://github.com/user-attachments/assets/d8eae434-cebb-43dc-9486-5a45761d1fbb)

 O projeto segue basicamento com um controller, onde temos as funções que serão utilizadas no sistema, utilizando a palavra async para facilitar na leitura da função assíncronas.

 
 

## 📂 Estrutura do Projeto

Como o projeto é simples, criei três pastas: produtos, constants e requirements. A pasta produtos contém toda a estrutura necessária para o funcionamento da API. Dentro dela, temos os entities, responsáveis por gerenciar as informações que serão manipuladas, e os controllers, que, como o nome sugere, controlam as operações da API. Além disso, a pasta constants armazena informações auxiliares que ajudam a verificar se a API está funcionando corretamente. A pasta requirements, por sua vez, é utilizada para testar as URLs utilizando uma extensão do VSCode chamada REST Client, permitindo realizar as requisições diretamente no editor.


Since the project is simple, I created three folders: produtos, constants, and requirements. The produtos folder contains all the necessary structure for the API to function. Inside it, we have the entities, which are responsible for managing the information that will be manipulated, and the controllers, which, as the name suggests, control the API's operations. Additionally, the constants folder stores auxiliary information that helps verify if the API is working correctly. The requirements folder, on the other hand, is used to test the URLs using a VSCode extension called REST Client, allowing you to make requests directly in the editor.



```plaintext
/
api_product/
│
├── src/
│   │   ├── constants
│   │   │   ├── products.ts
│   │   ├── product/
│   │   │   ├── product.controller.ts
│   │   │   ├── product.entity.ts
│   │   │   ├── product.module.ts
│   ├── main.ts
│   └── app.module.ts
```

# Clone o repositório
git clone https://github.com/seu-usuario/Api_Product

# Instale as dependências
npm install

# Inicie o projeto
npm start


