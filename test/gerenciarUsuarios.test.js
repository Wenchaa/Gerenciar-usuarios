const {retornarUsuarios, adicionarNovoUsuario} = require ('../src/gerenciarUsuarios');
const {expect} = require ('chai');

describe('Testar as funções de gestão de usuários', function() {
    it ('Validar que posso adicionar um novo usuario na lista', function(){
        // 1. adicionar um novo nome na lista de usuários
       adicionarNovoUsuario ('Maria');

        // 2. Retornar a lista de usuários na caixa
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de usuários
         expect(listaDeUsuarios.at(-1)).to.equal('Maria')


    });

});