![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white)
![Newman](https://img.shields.io/badge/Newman-ef5b25?logo=postman&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?logo=json&logoColor=white)

# 🐾 Petstore API Testing Suite

Este projeto contém uma suíte de testes automatizados para a **Swagger Petstore API**, desenvolvido como parte da disciplina de **Qualidade e Gerência de Software** no INATEL. O foco principal é validar os fluxos de sucesso (Happy Path) e comportamentos de erro (Negative Path) utilizando **Postman** e **Newman**.

---

## 👥 Equipe
* **André Augusto** - [GitHub](https://github.com/andreaugust0)
* **Arthur Rabelo** - [GitHub](https://github.com/arthurrabeloo)
* **Marcus Vinicius** - [GitHub](https://github.com/MarcusSouza02)
* **Kaik Freitas** - [GitHub](https://github.com/kafreitas07)
---

## 🤖 Uso de Inteligência Artificial

Este projeto utilizou tecnologias de **Inteligência Artificial (IA)** como ferramenta de apoio e co-criação. O uso de modelos de linguagem avançados (como o Google Gemini) foi aplicado nas seguintes frentes:

* **Geração de Scripts:** Auxílio na estruturação da lógica de testes em JavaScript dentro do ambiente Postman.
* **Documentação:** Apoio na redação técnica e organização visual deste arquivo `README.md`.
* **Planejamento de Testes:** Suporte na elaboração da estratégia e na definição dos Casos de Teste (TCs) baseados nos endpoints da API.

> **Nota:** Todos os artefatos gerados por IA foram revisados, testados e validados pelos integrantes do grupo para garantir a precisão técnica e o cumprimento dos requisitos acadêmicos.

---

## 🛠️ Tecnologias Utilizadas

* [Postman](https://www.postman.com/) - Criação e design dos testes.
* [Node.js](https://nodejs.org/) - Ambiente de execução para o Newman.
* [Newman](https://www.npmjs.com/package/newman) - Runner de linha de comando para testes do Postman.
* [Newman-Reporter-HtmlExtra](https://www.npmjs.com/package/newman-reporter-htmlextra) - Gerador de relatórios visuais em HTML.
* [Swagger Petstore](https://petstore.swagger.io/) - API alvo (SUT - System Under Test).

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
1.  **Node.js** (versão 12 ou superior).
2.  **npm** (gerenciador de pacotes do Node).

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/kafreitas07/Project_01_group_02_S07.git
cd Project_01_group_02_S07
````

### 2. Instalar dependências
````bash
npm install
````
### 3. Executar os testes
````bash
npm test
````
### 4. Abrir relatório
````bash
npm run report
````

## 📊 Estrutura de Testes
A suíte está organizada em 21 Casos de Teste (TC) seguindo o padrão de identificação única:

TC-001 a TC-010: Caminhos Felizes (Criação de Pet, Login de Usuário, Consulta de Pedidos, etc).

TC-011 a TC-021: Dados Inválidos/Inoportunos (IDs inexistentes, entradas malformadas, deleção duplicada).

Nota: Todos os testes utilizam variáveis de ambiente (baseUrl, petIdAtivo, etc) para garantir a independência dos testes e o uso de fixtures.

## 📂 Organização do Repositório
````bash
Project_01_group_02_S07/
├── doc/
│   └── Plano de Testes API Swagger Petstore.pdf
├── postman/
│   ├── Collection_postman.json
│   └── Environments_postman.json
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
````




