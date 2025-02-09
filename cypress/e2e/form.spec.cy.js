import PaginaFormulario from '../support/pages/FormPage';
import { config } from '../support/config';

// Suite de testes para validação do formulário
describe('Testes de Validação do Formulário', () => {
    // Configuração executada antes de cada teste
    beforeEach(() => {
        PaginaFormulario.visitar();
    });

    // Teste de preenchimento de dos campos bem-sucedido do formulário
    it('Deve exibir mensagem de sucesso quando o formulário for preenchido corretamente', () => {
        const { nome, email, senha } = config.dadosTeste.usuarioValido;
        PaginaFormulario
            .preencherFormulario(nome, email, email, senha)
            .enviar()
            .verificarMensagemSucesso();
    });

    // Teste de validação de campos obrigatórios
    it('Deve exibir mensagens de erro quando campos obrigatórios estiverem vazios', () => {
        PaginaFormulario
            .desabilitarValidacaoFormulario()
            .enviar()
            .verificarErrosCamposVazios();
    });

    // Teste de validação de senha fraca
    it('Deve exibir erro de validação quando uma senha fraca for inserida', () => {
        const { nome, email, senha } = config.dadosTeste.senhaFraca; 
        PaginaFormulario
            .preencherFormulario(nome, email, email, senha)
            .enviar()
            .verificarErroSenhaFraca();
    });

    // Teste de validação de correspondência de emails
    it('Deve exibir erro quando os emails não correspondem', () => {
        const { nome, email, senha } = config.dadosTeste.emailsDiferentes; 
        PaginaFormulario
            .preencherFormulario(nome, email, email + 'x', senha)
            .enviar()
            .verificarErroEmailsDiferentes();
    });
});
