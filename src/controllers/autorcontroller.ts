export class autorController {
    private autores: Autor[] = [];
    private trabalhosAcademicosController: TrabalhoAcademicoController;

    constructor(trabalhosAcademicosController: TrabalhoAcademicoController) {
        this.trabalhosAcademicosController = trabalhosAcademicosController;
    }

    // Inserir um novo Autor
    inserirAutor(cpf: string, nome: string, email: string, curso: Curso): Autor | null {
        try {
            if (this.consultarAutor(cpf)) {
                console.warn('Autor com este CPF já existe:', cpf);
                return null;
            }

            const novoAutor = new Autor(cpf, nome, email, curso);
            this.autores.push(novoAutor);
            return novoAutor;
        } catch (error) {
            console.error('Erro ao inserir autor:', error);
            return null;
        }
    }

    // Atualizar um Autor existente por CPF
    atualizarAutor(cpf: string, nome?: string, email?: string, curso?: Curso): Autor | null {
        try {
            const autor = this.consultarAutor(cpf);
            if (autor) {
                if (nome) autor.setNome = nome;
                if (email) autor.setEmail = email;
                if (curso) autor.setCurso = curso;
                return autor;
            } else {
                console.warn('Autor não encontrado para o CPF:', cpf);
                return null;
            }
        } catch (error) {
            console.error('Erro ao atualizar autor:', error);
            return null;
        }
    }

    // Remover um Autor por CPF
    removerAutor(cpf: string): boolean {
        try {
            const trabalhosAssociados = this.trabalhosAcademicosController.consultarTrabalhosPorOrientador(cpf);
            if (trabalhosAssociados.length > 0) {
                console.warn('Não é possível remover o autor pois há trabalhos acadêmicos associados a ele.');
                return false;
            }

            const index = this.autores.findIndex(a => a.getCpf === cpf);
            if (index !== -1) {
                this.autores.splice(index, 1);
                return true;
            } else {
                console.warn('Autor não encontrado para o CPF:', cpf);
                return false;
            }
        } catch (error) {
            console.error('Erro ao remover autor:', error);
            return false;
        }
    }

    // Consultar um Autor por CPF
    consultarAutor(cpf: string): Autor | null {
        return this.autores.find(a => a.getCpf === cpf) || null;
    }

    // Método para obter todos os Autores (para verificação)
    obterTodosAutores(): Autor[] {
        try {
            return this.autores;
        } catch (error) {
            console.error('Erro ao obter autores:', error);
            return [];
        }
    }
}