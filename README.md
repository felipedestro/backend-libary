<h1 align="center"> API Libary </h1>

<p align="center">
  <a href="#desafio-desenvolva-uma-api-e-integre-ao-front-end-de-uma-aplicação">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#correções-necessárias">Correções</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#estrutura-do-projeto">Estrutura do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#executando-o-projeto">Excutando o Projeto</a>&nbsp;&nbsp;&nbsp;
</p>

## Desafio: Desenvolva uma API e integre ao front-end de uma aplicação

> [!TIP]
> Arquivos do desafio:
> Projeto Front-end em React → [Escola DNC Github](https://github.com/vitormigoto/projeto-react-dnc)

> Crie uma API projetada em Node.js e que esteja integrada com
> um projeto de front-end feito em React fazendo que eles
> interajam com dados recebidos e enviados entre eles. Você irá
> integrar um projeto de Front-end e Back-end para colaborar na
> construção de um sistema de biblioteca online.

## Tecnologias

<p align="left">
  <img src='https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white'/>

  <img src='https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white'/>

  <img src='https://img.shields.io/badge/tsnode-3178C6.svg?style=for-the-badge&logo=ts-node&logoColor=white'/>

  <img src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'/>

  <img src='https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black'/>

  <img src='https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white'/> 
  
  <img src='https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white'/>
  
  <img src='https://img.shields.io/badge/Insomnia-4000BF.svg?style=for-the-badge&logo=Insomnia&logoColor=white'/>
  
</p>

## Correções Necessárias

O desafio porposto foi de fazer um API que integre ao projeto ReactJS pronto e disposto pela própria Escola DNC, contudo com a opção de um banco de dados não realicional, a identidade única (ID) não pode ser de tipo numerico (number), mas sim tem que ser um cadeia de caracteres (string).
Sendo assim segue as correções necessário no front-end para que se funcione normalmente a API integrada ao mesmo:

Para não ser necessário alterar o projeto da DNC use este projeto:
[Projeto Front-end ✅](https://github.com/felipedestro/frontend-libary)

Caso opite por usar o projeto original, faça as alterações citadas a seguir:
[Projeto Original DNC](https://github.com/EscolaDnc/projeto-react-dnc)

- Dentro do projeto de Front-end:
  `src/views/LivrosEdicao/LivrosEdicao.jsx`

Errado ❌:

```jsx
async function editLivro() {
	const body = {
		id: livro.id,
		titulo: Number(livro.titulo), // Esse campo não pode ser convertido em Number
		num_paginas: Number(livro.num_paginas),
		isbn: livro.isbn,
		editora: livro.editora,
	};
	if (
		livro.id != undefined &&
		livro.id != "" &&
		livro.titulo != undefined &&
		livro.titulo != "" &&
		livro.num_paginas != undefined &&
		livro.num_paginas != "" &&
		livro.isbn != undefined &&
		livro.isbn != "" &&
		livro.editora != undefined &&
		livro.editora != ""
	) {
		// Ao enviar o ID ele não poder ser do tipo Number
		await LivrosService.updateLivro(Number(livro.id), body)
			.then(({ data }) => {
				alert(data.mensagem);
			})
			.catch(({ response: { data, status } }) => {
				alert(`${status} - ${data}`);
			});
	}
}
```

Certo ✅:

```jsx
async function editLivro() {
	const body = {
		id: livro.id,
		titulo: livro.titulo, // O campo tem que ser do tipo string
		num_paginas: Number(livro.num_paginas),
		isbn: livro.isbn,
		editora: livro.editora,
	};
	if (
		livro.id != undefined &&
		livro.id != "" &&
		livro.titulo != undefined &&
		livro.titulo != "" &&
		livro.num_paginas != undefined &&
		livro.num_paginas != "" &&
		livro.isbn != undefined &&
		livro.isbn != "" &&
		livro.editora != undefined &&
		livro.editora != ""
	) {
		// Ao enviar o ID tem que ser do tipo string
		await LivrosService.updateLivro(livro.id, body)
			.then(({ data }) => {
				alert(data.mensagem);
			})
			.catch(({ response: { data, status } }) => {
				alert(`${status} - ${data}`);
			});
	}
}
```

## Estrutura do projeto

- `./src/` - Arquivos e pastas de configuração do servidor API

- `./src/controller/` - Todos os controles da API, onde captura os dados necessários e envia ao serviço de CRUD do Prisma ORM.

- `./src/services/` - Todos os serviços a serem executados na API.

- `./src/route.ts` - Rotas configurada para execução da API.

## Executando o Projeto

Certifique-se de quem todos requisitos necessários para execução do projeto de forma local.

#### Setup ambiente

- [Node LTS](https://nodejs.org/en)
  - `node -v` - Verifique se tem o Node instalado na máquina

#### Siga os passos abaixo:

- Clone o projeto:
  `git clone https://github.com/felipedestro/backend-libary.git`

* Acesse o diretorio
  `cd dnc-todolist`

- Instale as dependências
  `npm install`

##### Crie a variável de ambiente:

- Crie o arquivo `.env`:
  Siga o arquivo `.env.example` e insira a variávle `PORT` e a variável `DATABASE_URL`
  - `PORT` - Padrão `3000`
  - `DATABASE_URL` - `mongodb://USERNAME:PASSWORD@HOST:PORT/DATABASE?authSource=admin&retryWrites=false`
    - `USERNAME`: Nome do usuário do banco.
    - `PASSWORD`: Senha do usuário do banco de dados.
    - `PORT`: Porta de conexão do banco de dados.
    - `DATABASE`: Nome da Collection a ser conectada.

* Execute o Prisma ORM
  `npx prisma generate`

- Inicie o servidor
  `npm run start`

---

<p align="center">
  Feito por Felipe Destro 👋 <a href="https://github.com/felipedestro">Conheça meus projetos!</a>
</p>
