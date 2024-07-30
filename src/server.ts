import { autorController } from './controllers/autorController';
import { cursoController } from './controllers/cursoController';
import { orientadorController } from './controllers/orientadorController';
import { trabalho_academicoController } from './controllers/trabalhoAcademicoController';

const cursoBC = new cursoController();
const trabalhoAcademicoBC = new TrabalhoAcademicoController();
const orientadorBC = new orientadorController(trabalho_academicoController);
const autorBC = new autorController(trabalho_academicoController);

// Função principal do menu
async function mainMenu() {
    const mainMenuOptions = [
        'Adicionar Autor',
        'Atualizar Autor',
        'Remover Autor',
        'Adicionar Curso',
        'Atualizar Curso',
        'Remover Curso',
        'Adicionar Orientador',
        'Atualizar Orientador',
        'Remover Orientador',
        'Adicionar Trabalho Acadêmico',
        'Atualizar Trabalho Acadêmico',
        'Remover Trabalho Acadêmico',
        'Consultar Trabalhos por Orientador',
        'Consultar Trabalhos por Palavras-chave',
        'Sair'
    ]
}    ;
