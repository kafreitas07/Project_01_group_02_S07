![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Newman](https://img.shields.io/badge/Newman-ef5b25?style=for-the-badge&logo=postman&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

# 🐾 Petstore API Testing Suite - INATEL S07

Este projeto contém uma suíte de testes automatizados para a **Swagger Petstore API**, desenvolvido como parte da disciplina de **Qualidade e Gerência de Software** no INATEL. O foco principal é validar os fluxos de sucesso (Happy Path) e comportamentos de erro (Negative Path) utilizando **Postman** e **Newman**.

---

## 👥 Equipe
* **André Augusto** - [GitHub](https://github.com/andreaugust0)
* **Arthur Rabelo** - [GitHub](https://github.com/arthurrabelo)
* **Marcus Vinicius** - [GitHub](https://github.com/MarcusSouza02)
* **Kaik Freitas** - [GitHub](https://github.com/kafreitas07)
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
````

### 2. Instalar dependências
````bash
npm install -g newman newman-reporter-htmlextra
````
### 3. Rodas os testes e gerar o relatório
````bash
newman run postman/Project_PetStore.postman_collection.json -e postman/Environments.postman_environment.json -r htmlextra
````

## 📊 Estrutura de Testes
A suíte está organizada em 20 Casos de Teste (TC) seguindo o padrão de identificação única:

TC-001 a TC-010: Caminhos Felizes (Criação de Pet, Login de Usuário, Consulta de Pedidos, etc).

TC-011 a TC-020: Dados Inválidos/Inoportunos (IDs inexistentes, entradas malformadas, deleção duplicada).

Nota: Todos os testes utilizam variáveis de ambiente (baseUrl, petIdAtivo, etc) para garantir a independência dos testes e o uso de fixtures.

## 📂 Organização do Repositório
````bash
├── postman/
│   ├── Project_PetStore.postman_collection.json  # Coleção de testes
│   └── Environments.postman_environment.json     # Variáveis de ambiente
├── doc/
│   └── Plano_de_Testes.pdf                       # Documentação teórica
├── README.md                                     # Instruções do projeto
└── package.json                                  # Manifesto do projeto
````

