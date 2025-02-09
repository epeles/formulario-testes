class PaginaFormulario {
    // Mapeamento dos elementos da página
    elementos = {
        campoNome: () => cy.get('[data-testid="nome"]'),
        campoEmail: () => cy.get('#email'),
        campoConfirmarEmail: () => cy.get('#confirmEmail'),
        campoSenha: () => cy.get('#senha'),
        botaoEnviar: () => cy.get('button[type="submit"]'),
        mensagemSucesso: () => cy.get('#success-message'),
        erroNome: () => cy.get('[data-testid="nome-error"]'),
        erroEmail: () => cy.get('[data-testid="email-error"]'),
        erroConfirmarEmail: () => cy.get('[data-testid="confirmEmail-error"]'),
        erroSenha: () => cy.get('[data-testid="senha-error"]')
    }

    // Navega para a página do formulário
    visitar() {
        cy.visit('https://tiny-arithmetic-a784b7.netlify.app/');
    }

    // Preenche os campos do formulário com os dados fornecidos
    preencherFormulario(nome, email, confirmarEmail, senha) {
        nome && this.elementos.campoNome().type(nome);
        email && this.elementos.campoEmail().type(email);
        confirmarEmail && this.elementos.campoConfirmarEmail().type(confirmarEmail);
        senha && this.elementos.campoSenha().type(senha);
        return this;
    }

    // Clica no botão de enviar formulário
    enviar() {
        this.elementos.botaoEnviar().click();
    }

    // Desativa validações nativas do HTML5 - para poder testar mensagens de erro
    desabilitarValidacaoFormulario() {
        cy.get('form').invoke('attr', 'novalidate', '');
    }

    // Verifica se a mensagem de sucesso está presente
    verificarMensagemSucesso() {
        this.elementos.mensagemSucesso()
            .should('be.visible')
            .and('contain', 'Cadastro realizado com sucesso!');
    }

    // Verifica mensagens de erro para campos obrigatórios vazios
    verificarErrosCamposVazios() {
        const mensagemErro = 'Este campo é obrigatório.';
        this.elementos.erroNome().should('contain', mensagemErro);
        this.elementos.erroEmail().should('contain', mensagemErro);
        this.elementos.erroConfirmarEmail().should('contain', mensagemErro);
        this.elementos.erroSenha().should('contain', mensagemErro);
    }

    // Verifica mensagem de erro para senha que não atende aos requisitos
    verificarErroSenhaFraca() {
        this.elementos.erroSenha()
            .should('be.visible')
            .and('contain', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.');
    }

    // Verifica mensagem de erro quando emails não coincidem
    verificarErroEmailsDiferentes() {
        this.elementos.erroConfirmarEmail()
            .should('be.visible')
            .and('contain', 'Os emails não correspondem.');
    }
}

export default new PaginaFormulario();
