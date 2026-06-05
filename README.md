![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman\&logoColor=white)
![Newman](https://img.shields.io/badge/Newman-ef5b25?logo=postman\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs\&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?logo=npm\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github\&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?logo=json\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker\&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?logo=jenkins\&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?logo=nginx\&logoColor=white)

# 🐾 Petstore API Testing Suite

Este projeto contém uma suíte de testes automatizados para a **Swagger Petstore API**, desenvolvido como parte da disciplina de **Qualidade e Gerência de Software** no INATEL. O foco principal é validar os fluxos de sucesso (Happy Path) e comportamentos de erro (Negative Path) utilizando **Postman** e **Newman**.

Além da automação dos testes, o projeto utiliza uma infraestrutura baseada em **Docker**, **Jenkins** e **Nginx** para implementar práticas de **Integração Contínua e Entrega Contínua (CI/CD)**.

---

## 👥 Equipe

* **André Augusto** - https://github.com/andreaugust0
* **Arthur Rabelo** - https://github.com/arthurrabeloo
* **Marcus Vinicius** - https://github.com/MarcusSouza02
* **Kaik Freitas** - https://github.com/kafreitas07
* **Dimitri Schulz** - https://github.com/schulzdimitri
* **Anna Rennó** - https://github.com/acrenno

---

## 🤖 Uso de Inteligência Artificial

Este projeto utilizou tecnologias de **Inteligência Artificial (IA)** como ferramenta de apoio e co-criação. O uso de modelos de linguagem avançados (como o Google Gemini) foi aplicado nas seguintes frentes:

* Geração de Scripts.
* Documentação.
* Planejamento de Testes.
* Containerização e Infraestrutura.
* Pipeline CI/CD.

> Todos os artefatos gerados por IA foram revisados, testados e validados pelos integrantes do grupo para garantir a precisão técnica e o cumprimento dos requisitos acadêmicos.

---

## 🛠️ Tecnologias Utilizadas

* Postman - Criação e design dos testes.
* Node.js - Ambiente de execução para o Newman.
* Newman - Runner de linha de comando para testes do Postman.
* Newman-Reporter-HtmlExtra - Gerador de relatórios visuais em HTML.
* Swagger Petstore - API alvo (System Under Test).
* Docker - Containerização dos serviços.
* Docker Compose - Orquestração dos containers.
* Jenkins - Automação da pipeline CI/CD.
* Nginx - Proxy reverso para acesso ao Jenkins.

---

## 🐳 Containerização com Docker

Toda a infraestrutura do projeto foi containerizada utilizando Docker e Docker Compose, garantindo portabilidade, padronização do ambiente e facilidade de implantação.

### Serviços Utilizados

| Serviço       | Responsabilidade                     |
| ------------- | ------------------------------------ |
| Jenkins       | Execução da pipeline CI/CD           |
| Jenkins Agent | Execução das etapas automatizadas    |
| Nginx         | Proxy reverso para acesso ao Jenkins |
| Newman        | Execução dos testes automatizados    |

### Arquitetura da Solução

```text
GitHub
   │
   ▼
Jenkins
   │
   ▼
Jenkins Agent
   │
   ▼
Newman
   │
   ▼
Relatórios e Notificações
```

### Inicialização dos Containers

Subir todos os serviços:

```bash
docker compose up -d
```

Verificar containers em execução:

```bash
docker ps
```

Visualizar logs:

```bash
docker compose logs -f
```

Encerrar os serviços:

```bash
docker compose down
```

---

## ⚙️ Pipeline CI/CD

O projeto utiliza uma pipeline declarativa implementada no Jenkins para automatizar a validação da API.

### Fluxo da Pipeline

```text
Push no GitHub
        │
        ▼
Checkout do Código
        │
        ▼
Instalação das Dependências
        │
        ▼
Execução dos Testes Newman
        │
        ▼
Geração dos Relatórios
        │
        ▼
Envio de Notificação por E-mail
```

### Etapas Automatizadas

#### Checkout

Obtém a versão mais recente do projeto diretamente do GitHub.

#### Instalação de Dependências

Instala automaticamente todas as dependências necessárias para execução dos testes.

#### Execução dos Testes

Executa a coleção Postman através do Newman, validando os endpoints da Swagger Petstore API.

#### Geração de Relatórios

Após a execução são gerados relatórios contendo:

* Casos executados;
* Casos aprovados;
* Casos reprovados;
* Tempo de execução;
* Evidências de falhas.

#### Notificação

Ao final da execução, uma notificação automática é enviada por e-mail contendo os resultados da pipeline.

### Integração Contínua

A pipeline pode ser executada automaticamente a cada novo push realizado no repositório GitHub, permitindo validação contínua e identificação rápida de falhas.

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

1. Node.js (versão 12 ou superior).
2. npm (gerenciador de pacotes do Node).

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/kafreitas07/Project_01_group_02_S07.git
cd Project_01_group_02_S07
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar os testes

```bash
npm test
```

### 4. Abrir relatório

```bash
npm run report
```

---

## 📊 Estrutura de Testes

A suíte está organizada em 21 Casos de Teste (TC) seguindo o padrão de identificação única:

* TC-001 a TC-010: Caminhos Felizes (Happy Path).
* TC-011 a TC-021: Caminhos Negativos (Negative Path).

Todos os testes utilizam variáveis de ambiente para garantir independência entre execuções e facilitar a manutenção dos cenários.

---

## 📂 Organização do Repositório

```text
Project_01_group_02_S07/
├── doc/
│   └── Plano de Testes API Swagger Petstore.pdf
├── postman/
│   ├── Collection_postman.json
│   └── Environments_postman.json
├── nginx/
│   └── default.conf
├── jenkins/
│   └── plugins.txt
├── Dockerfile.jenkins
├── docker-compose.yml
├── Jenkinsfile
├── script-email.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
