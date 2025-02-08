import PaginaFormulario from '../support/pages/FormPage';
import { config } from '../support/config';

describe('Testes de Validação do Formulário', () => {
    beforeEach(() => {
        PaginaFormulario.visitar();
    });

    it('Deve exibir mensagem de sucesso quando o formulário for preenchido corretamente', () => {
        const { nome, email, senha } = config.dadosTeste.usuarioValido;
        PaginaFormulario
            .preencherFormulario(nome, email, email, senha)
            .enviar();
        PaginaFormulario.verificarMensagemSucesso();
    });

    it('Deve exibir mensagens de erro quando campos obrigatórios estiverem vazios', () => {
        PaginaFormulario.desabilitarValidacaoFormulario();
        PaginaFormulario.enviar();
        PaginaFormulario.verificarErrosCamposVazios();
    });

    it('Deve exibir erro de validação quando uma senha fraca for inserida', () => {
        PaginaFormulario
            .preencherFormulario('Maria Santos', 'maria.santos@exemplo.com', 'maria.santos@exemplo.com', '12345')
            .enviar();
        cy.wait(1000);
        PaginaFormulario.verificarErroSenhaFraca();
    });

    it('Deve exibir erro quando os emails não correspondem', () => {
        PaginaFormulario
            .preencherFormulario('Ana Oliveira', 'ana@exemplo.com', 'diferente@exemplo.com', 'SenhaForte123!')
            .enviar();
        PaginaFormulario.verificarErroEmailsDiferentes();
    });
});
