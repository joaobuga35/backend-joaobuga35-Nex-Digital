# backend-joaobuga35-Nex-Digital

<h2>Índice</h2>

1. [ Descrição ](#sobre)
2. [ Tecnologias](#techs)
3. [ Instalação ](#install)
4. [ Endpoints ](#end)
5. [ Considerações ](#finish)

<a name="descricao"></a>
## Descrição

API voltada para o registro de usuários e uploads de planilhas em formato .csv. 

<a name="techs"></a>
## Tecnologias utilizadas
- NodeJs
- Knex.js

<a name="install"></a>
## Instalação: 
<h2>Para rodar o projeto localmente siga os seguintes passos: </h2>

 <h4>1º Passo</h4>
     
  <h5>Certifique-se de ter o Node instalado em sua máquina e um banco de dados MySQL também.</h5>
  <p>Faça o fork deste repositório e clone-o para a sua máquina para poder testar.</p>
  <p>
      NodeJS >= 18.17.0
      MySQL >= ^2.18.1
    <span>Essas são as versões necessárias para rodar o projeto</span>
  </p>

  <h4>2º passo</h4>
    <p>Variáveis de ambiente e criação de banco de dados.</p>
    <p>Crie um banco de dados apenas para teste, de o nome que preferir.</p>
    <p>Renomeie o arquivo .env.example para .env, e complete com os seus dados, assim ele carregará as váriaveis de ambiente</p>
    <p>Deixe a variável EXPIRES_IN com o valor "24h"</p>
    
  <h4>3º Passo - Configurando o Backend</h4>
  - Rode os seguintes comandos: 


```bash
Para instalar todas as dependências:
$ npm install

Para ativar a aplicação e conseguir rodar o localhost:
$ npm run dev
```
  
```bash
Para rodar as migrações:
$ npx knex migrate:latest
```

 <h4>4º Passo - Testando a aplicação</h4>
 - Utilize o workspace do insomnia que está localizado no arquivo raiz com o nome: insomnia.json
 - Siga a tabela abaixo para fazer os testes: 

<a name="end"></a>
# Endpoints do serviço

<h2>ROTA DE USERS</h2>

| Método | Endpoint | Responsabilidade |
|--------|----------|------------------|
| POST | /users| Criar um novo usuário |
| GET | /users | Listar todos os usuários |
| GET | /users/&lt;id&gt; | Listar transações de um respectivo usuário |
| PATCH | /users/&lt;id&gt; | Atualiza os dados de um usuário de forma dinâmica |
| DELETE | /users/&lt;id&gt; | Deleta um usuário |

### **POST: /usuário**

* Deve ser possível criar um usuário contendo os seguintes dados:
  * **name**: string.
  * **email**: string.
  * **cpf**: string.
  * **password**: string.
  * **admin**: 0 para false | 1 para true.

***Regras de negócio***

* Caso de sucesso:
  * **Envio**: Um objeto contendo os dados do usuário a ser criado.
  * **Retorno**: Um objeto contendo os dados do usuário criado.
  * **Status**: 201 CREATED.

**Exemplo de envio usuário admin**:

```json
 {
	"name": "João",
	"cpf": "403-987-566-10",
	"email": "joaolucas18@mail.com",
	"password":"12345",
	"admin": 1
}
```


**Exemplo de envio usuário comum**:

```json
 {
	"name": "João",
	"cpf": "403-987-566-10",
	"email": "joaolucas18@mail.com",
	"password":"12345",
	"admin": 0
}
```

**Exemplo de retorno**:

```json
 {
	"name": "João",
	"cpf": "403-987-566-10",
	"email": "joaolucas18@mail.com",
	"admin": 1,
	"id": "308caa56-2db6-11ee-98bb-8c175925d163",
	"created_at": "2023-07-29T02:18:21.000Z",
	"updated_at": "2023-07-29T02:18:21.000Z"
}
```

* Não é possível criar um usuário com email ou cpf repetido.
  * **Retorno**: Um objeto contendo uma mensagem de erro.
  * **Status**: 409 Conflict.


**Exemplo de retorno**:

```json
{
	"message": "Email already exists"
}
```

```json
{
	"message": "CPF already exists"
}
```

### **GET: /users**

* Deve ser possível listar todos os usuários armazenados no banco de dados, apenas admnistradores podem fazer.

  * Caso de sucesso:
  * **Retorno**: Array de objetos.
  * **Status**: 200 OK.

  
```json
[
	{
		"name": "João",
		"cpf": "282.279.300-00",
		"email": "joaolucas15@mail.com",
		"admin": 0,
		"id": "04496d54-2d86-11ee-98bb-8c175925d163",
		"created_at": "2023-07-28T20:33:31.000Z",
		"updated_at": "2023-07-28T20:33:31.000Z"
	},
	{
		"name": "João",
		"cpf": "403-987-566-10",
		"email": "joaolucas18@mail.com",
		"admin": 1,
		"id": "308caa56-2db6-11ee-98bb-8c175925d163",
		"created_at": "2023-07-29T02:18:21.000Z",
		"updated_at": "2023-07-29T02:18:21.000Z"
	},
	{
		"name": "Heitor",
		"cpf": "444.905.555-56",
		"email": "heitorsurmani@hotmail.com",
		"admin": 0,
		"id": "9cb0a4c2-2ddb-11ee-98bb-8c175925d163",
		"created_at": "2023-07-29T06:46:14.000Z",
		"updated_at": "2023-07-29T06:46:14.000Z"
	},
	{
		"name": "João",
		"cpf": "403-987-566-00",
		"email": "joaolucas17@mail.com",
		"admin": 0,
		"id": "f07b9d34-2d95-11ee-98bb-8c175925d163",
		"created_at": "2023-07-28T22:27:30.000Z",
		"updated_at": "2023-07-28T22:27:30.000Z"
	},
	{
		"name": "Heitor",
		"cpf": "444.902.555-56",
		"email": "heitorsurmani1@hotmail.com",
		"admin": 0,
		"id": "f104d868-2dde-11ee-98bb-8c175925d163",
		"created_at": "2023-07-29T07:10:04.000Z",
		"updated_at": "2023-07-29T07:10:04.000Z"
	}
]
```

### **GET: /users/&lt;id&gt;**

* Deve ser possível listar as transações que tem relação com o usuário, apenas usuários logados.

  * Caso de sucesso:
  * **Retorno**: Um objeto.
  * **Status**: 200 OK.

```json
	[
	{
		"id": "64687bbf-2db6-11ee-98bb-8c175925d163",
		"cpf": "282.279.300-00",
		"description": "Venda do produto X",
		"transaction_date": "10-10-2022",
		"points_value": "10",
		"value": 10000,
		"status": "Aprovado",
		"user_id": "04496d54-2d86-11ee-98bb-8c175925d163"
	},
	{
		"id": "646998cf-2db6-11ee-98bb-8c175925d163",
		"cpf": "282.279.300-00",
		"description": "Venda do produto Y",
		"transaction_date": "10-10-2022",
		"points_value": "10",
		"value": 10000,
		"status": "Reprovado",
		"user_id": "04496d54-2d86-11ee-98bb-8c175925d163"
	},
	{
		"id": "646aba34-2db6-11ee-98bb-8c175925d163",
		"cpf": "282.279.300-00",
		"description": "Venda do produto Z",
		"transaction_date": "10-10-2022",
		"points_value": "10",
		"value": 10000,
		"status": "Em avaliação",
		"user_id": "04496d54-2d86-11ee-98bb-8c175925d163"
	}
]
```
* Deve ser possível filtrar as transações que tem relação com o usuário.
  exemplos:

Filtro por status da transação do usuário (admin ou não):
http://localhost:3000/users?status={status}

Filtro por data da transação (range de data):
http://localhost:3000/transactions?startDate={startDate}&endDate={endDate}

Filtro por valor da transação (range de valor):
http://localhost:3000/transactions?minValue={minValue}&maxValue={maxValue}

Filtro por status da transação:
http://localhost:3000/transactions?status={status}

### **PATCH: /users/&lt;id&gt;**

* Deve ser possível atualizar um usuário pelo id recebido nos parâmetros da rota.

***Regras de negócio***

* Deve ser possível atualizar um usuário contendo os seguintes dados:
 * **name**: string.
  * **email**: string.
  * **cpf**: string.
  * **password**: string.

* Todos os dados são opcionais.
  * O usuário deve ser atualizado dinamicamente seguindo os dados enviados.

* Caso de sucesso:
  * **Envio**: Um objeto contendo os dados do usuário a ser atualizado.
  * **Retorno**: Um objeto contendo uma mensagem de usuário atualizado.
  * **Status**: 200 OK.

```json
{
	"name": "João bugati",
	"cpf": "7248418854",
	"email": "joaolucas120@mail.com",
	"password":"12345"
}}
```


**Exemplo de retorno**:

```json
{
	"message" : "User updated succefull!"
}
```

* Não deve ser possível atualizar um usuário caso ele não exista:
  * **Envio**: Um objeto contendo os dados do usuário.
  * **Retorno**: Um objeto contendo uma mensagem de erro.
  * **Status**: 404 NOT FOUND.

**Exemplo de envio**:

```json
{
  "name": "novo nome",
}
```

**Exemplo de retorno**:

```json
{
  "message": "User not found."
}
```


### **DELETE: /users/&lt;id&gt;**

***Regras de negócio***

* Deve ser possível deletar um usuário pelo id recebido nos parâmetros da rota.

* Caso de sucesso:
  * **Envio**: Sem envio.
  * **Retorno**: Sem retorno.
  * **Status**: 204 NO CONTENT.

* Não deve ser possível deletar um usuário caso ele não exista:
  * **Envio**: Um objeto contendo os dados do usuário.
  * **Retorno**: Um objeto contendo uma mensagem de erro.
  * **Status**: 404 NOT FOUND.
 
  **Exemplo de retorno**:

```json
{
  "message": "User not found."
}
```
<h2>ROTA DE LOGIN</h2>

| Método | Endpoint | Responsabilidade |
|--------|----------|------------------|
| POST | /login| Logar na aplicação|


### **POST: /login;**


* Caso de sucesso:
  * **Envio**: Um objeto contendo os dados do usuário a ser logado.
  * **Retorno**: Token.
  * **Status**: 200 OK.

```json
{
	"email": "joaolucas120@mail.com",
	"password":"12345"
}}
```


**Exemplo de retorno**:

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6MSwibmFtZSI6Ikpvw6NvIiwiaWF0IjoxNjkwNjMyODk5LCJleHAiOjE2OTA3MTkyOTksInN1YiI6IjMwOGNhYTU2LTJkYjYtMTFlZS05OGJiLThjMTc1OTI1ZDE2MyJ9.S6aTtpmDBEDoYBS-_YnsvfU49GE5humj9wvRIGMqzRE"
}
```

* Não deve ser possível errar a senha e o email e conseguir logar:
  * **Envio**: Um objeto contendo os dados do usuário.
  * **Retorno**: Um objeto contendo uma mensagem de erro.
  * **Status**: 401 .
 
```json
  {
  	"message": "Invalid credentials"
  }
```

<h2>ROTA DE TRANSACTIONS</h2>

| Método | Endpoint | Responsabilidade |
|--------|----------|------------------|
| POST | /transactions| Criar novas transações |
| GET | /transactions | Listar todos os usuários |


### **POST: /transactions;**

*Lembrando que a planilha deve ser salva no modelo .csv! 
*Será inserida como multipartform, o name do arquivo fica como "file" e o tipo de arquivo deve ser file, após isso é so escolher seu arquivo .csv e fazer o upload da planilha no molde que foi pedido. 
*Deixei um modelo de planilha no projeto para ṕoder testar, e no workspace do insomnia já está com as informações salvas. 

**Exemplo de retorno**:
* **Status**: 201 .

```json
{
	"message": "Transaction created with sucess"
}
```
### **GET: /transactions?filters;**
*Listar todas as transações existentes no banco de dados, sendo possível filtrar ela com os respectivos filtros. 

**Exemplo de filtro**:
Filtro por CPF da transação:
http://localhost:3000/users?cpf={cpf}

Filtro por descrição da transação:
http://localhost:3000/transactions?description={description}

Filtro por data da transação (range de data):
http://localhost:3000/transactions?startDate={startDate}&endDate={endDate}

Filtro por valor da transação (range de valor):
http://localhost:3000/transactions?minValue={minValue}&maxValue={maxValue}

Filtro por status da transação:
http://localhost:3000/transactions?status={status}

**Exemplo de retorno**:
* **Status**: 200 .

```json
[
	{
		"id": "64687bbf-2db6-11ee-98bb-8c175925d163",
		"cpf": "282.279.300-00",
		"description": "Venda do produto X",
		"transaction_date": "10-10-2022",
		"points_value": "10",
		"value": 10000,
		"status": "Aprovado",
		"user_id": "04496d54-2d86-11ee-98bb-8c175925d163"
	},
	{
		"id": "646998cf-2db6-11ee-98bb-8c175925d163",
		"cpf": "282.279.300-00",
		"description": "Venda do produto Y",
		"transaction_date": "10-10-2022",
		"points_value": "10",
		"value": 10000,
		"status": "Reprovado",
		"user_id": "04496d54-2d86-11ee-98bb-8c175925d163"
	},
	{
		"id": "646aba34-2db6-11ee-98bb-8c175925d163",
		"cpf": "282.279.300-00",
		"description": "Venda do produto Z",
		"transaction_date": "10-10-2022",
		"points_value": "10",
		"value": 10000,
		"status": "Em avaliação",
		"user_id": "04496d54-2d86-11ee-98bb-8c175925d163"
	},
	{
		"id": "646bfba5-2db6-11ee-98bb-8c175925d163",
		"cpf": "403-987-566-00",
		"description": "Produto novo",
		"transaction_date": "10-10-2022",
		"points_value": "12",
		"value": 12547.86,
		"status": "Aprovado",
		"user_id": "f07b9d34-2d95-11ee-98bb-8c175925d163"
	}
]
```
<a name="finish"></a>
## Considerações 
* Esta API foi criada com a finalidade de se utilizar no front-end, após rodar o servidor localmente. Visite o seguinte link e teste agora visualmente: <a href="https://my-app-eight-mocha.vercel.app/">SITE</a>
* Este é o link do <a href="https://github.com/joaobuga35/frontend-joaobuga35-Nex-Digital">Repositório</a>

