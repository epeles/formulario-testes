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

# 🔌 API Mock para os Testes
Para garantir a confiabilidade e independência dos testes, utilizamos uma API Mock que simula o comportamento do backend. Abaixo está o resultado da collection do Postman que valida os endpoints mockados:

![Resultado Collection Postman](https://github.com/epeles/formulario-testes/blob/main/assets/resultado-collection-postman.png)

Esta API Mock fornece:
- Requisição GET e validar se os dados retornados estão corretos.
- Requisição POST sem um campo obrigatório e garantir que a API retorne erro 400.
- Simulação de um erro no servidor e garantir que ele retorne 500.


# Testes de Performance - API Formulário

## 📊 Sobre
Este subprojeto contém testes de performance utilizando k6 para avaliar o comportamento da API sob carga.

## 🎯 Objetivos
- Simular 100 usuários simultâneos
- Avaliar tempo de resposta
- Monitorar taxa de erros
- Analisar uso de recursos

## 🛠️ Tecnologias
- k6
- Grafana (opcional para visualização)
- JSON

## 📋 Pré-requisitos
1. Instalar k6:
```bash
# MacOS
brew install k6

# Windows
choco install k6

# Docker
docker pull grafana/k6
```

## 🚀 Executando os Testes
```bash
k6 run scripts/load-test.js
```

## 📊 Métricas Analisadas
1. Tempo de Resposta
   - Objetivo: < 500ms para 95% das requisições
   - Monitoramento: p95 response time

2. Taxa de Erro
   - Objetivo: < 10% de erros
   - Monitoramento: error rate

3. Uso de Recursos
   - CPU: Monitoramento via Grafana
   - Memória: Monitoramento via Grafana

## 📈 Resultados Esperados
```
✓ status 200 GET.................: 100%
✓ response time < 200ms.........: 98%
✓ status 201 POST...............: 100%
✓ response time < 300ms.........: 97%
```

![Resultado Collection Postman](https://github.com/epeles/formulario-testes/blob/main/assets/grafana-k6-resultado.png)