# Testes Automatizados - Formulário de Cadastro

## 📝 Descrição
Este projeto contém testes automatizados para um formulário de cadastro utilizando Cypress com Page Object Model (POM).

## 🛠️ Tecnologias Utilizadas
- Node.js
- Cypress
- JavaScript

## 📋 Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM (Node Package Manager)

## 🚀 Instalação
1. Clone o repositório:
```bash
git clone https://github.com/epeles/formulario-testes.git
```

2. Instale as dependências:
```bash
npm install
```

## 💻 Executando os Testes
Para executar os testes, você pode usar os seguintes comandos:

- Abrir o Cypress Test Runner:
```bash
npx cypress open
```

- Executar testes em modo headless:
```bash
npx cypress run
```

## 📁 Estrutura do Projeto
```
automation/
├── cypress/
│   ├── e2e/
│   │   └── form.spec.cy.js
│   └── support/
│       ├── pages/
│       │   └── FormPage.js
│       └── config.js
├── .gitignore
└── README.md
```

## 🧪 Casos de Teste
1. Cadastro com sucesso
2. Validação de campos obrigatórios
3. Validação de senha fraca
4. Validação de confirmação de email

## 📝 Padrões Utilizados
- Page Object Model (POM)
- AAA (Arrange, Act, Assert)
- Clean Code

## 🔄 Integração Contínua (CI/CD)
Este projeto utiliza GitHub Actions para execução automatizada dos testes.

### Pipeline de Testes
Os testes são executados automaticamente em:
- Cada push para a branch main
- Pull Requests
- Agendamento diário (daily schedule)

### Browsers Suportados
Os testes são executados em paralelo nos seguintes navegadores:
- Google Chrome
- Firefox

### Resultados
Os resultados dos testes podem ser visualizados:
- Na aba "Actions" do repositório GitHub
- No relatório detalhado gerado após cada execução
- No histórico de execuções da pipeline

Para acessar os resultados:
1. Acesse a aba "Actions" no repositório
2. Selecione a execução desejada
3. Navegue até "Cypress Tests" para ver o relatório detalhado

### Status da Última Execução
[![Cypress Tests](https://github.com/epeles/formulario-testes/actions/workflows/main.yml/badge.svg)](https://github.com/epeles/formulario-testes/actions/workflows/main.yml)
