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
git clone [https://github.com/epeles/formulario-testes.git]
```

2. Instale as dependências:
```bash
npm install
```

## 💻 Executando os Testes
Para executar os testes, você pode usar os seguintes comandos:

- Abrir o Cypress Test Runner:
```bash
npm run cypress:open
```

- Executar testes em modo headless:
```bash
npm run cypress:run
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

