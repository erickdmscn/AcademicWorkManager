class TrabalhoAcademicoController {
    private trabalhosAcademicos: TrabalhoAcademico[] = [];

    // Inserir um novo Trabalho Acadêmico
    inserirTrabalho(titulo: string, descricao: string, resumo: string, dataEntrega: Date, autores: Autor[], orientador: Orientador, palavrasChave: string[]): TrabalhoAcademico | null {
        try {
            const novoTrabalho = new TrabalhoAcademico(titulo, descricao, resumo, dataEntrega, autores, orientador, palavrasChave);
            this.trabalhosAcademicos.push(novoTrabalho);
            return novoTrabalho;
        } catch (error) {
            console.error('Erro ao inserir trabalho acadêmico:', error);
            return null;
        }
    }

    // Atualizar um Trabalho Acadêmico existente por título
    atualizarTrabalho(titulo: string, descricao: string, resumo: string, dataEntrega: Date, autores: Autor[], orientador: Orientador, palavrasChave: string[]): TrabalhoAcademico | null {
        try {
            const trabalho = this.trabalhosAcademicos.find(t => t.titulo === titulo);
            if (trabalho) {
                trabalho.descricao = descricao;
                trabalho.resumo = resumo;
                trabalho.dataEntrega = dataEntrega;
                trabalho.autores = autores;
                trabalho.orientador = orientador;
                trabalho.palavrasChave = palavrasChave;
                return trabalho;
            } else {
                console.warn('Trabalho acadêmico não encontrado para o título:', titulo);
                return null;
            }
        } catch (error) {
            console.error('Erro ao atualizar trabalho acadêmico:', error);
            return null;
        }
    }

    // Remover um Trabalho Acadêmico por título
    removerTrabalho(titulo: string): boolean {
        try {
            const index = this.trabalhosAcademicos.findIndex(t => t.titulo === titulo);
            if (index !== -1) {
                this.trabalhosAcademicos.splice(index, 1);
                return true;
            } else {
                console.warn('Trabalho acadêmico não encontrado para o título:', titulo);
                return false;
            }
        } catch (error) {
            console.error('Erro ao remover trabalho acadêmico:', error);
            return false;
        }
    }

    // Consultar trabalhos acadêmicos por orientador
    consultarTrabalhosPorOrientador(tituloOrientador: string): TrabalhoAcademico[] {
        try {
            return this.trabalhosAcademicos.filter(t => t.orientador.titulo === tituloOrientador);
        } catch (error) {
            console.error('Erro ao consultar trabalhos acadêmicos por orientador:', error);
            return [];
        }
    }

    // Consultar trabalhos acadêmicos por palavras-chave
    consultarTrabalhosPorPalavrasChave(palavrasChave: string[]): TrabalhoAcademico[] {
        try {
            return this.trabalhosAcademicos.filter(t => 
                palavrasChave.some(palavra => t.palavrasChave.includes(palavra))
            );
        } catch (error) {
            console.error('Erro ao consultar trabalhos acadêmicos por palavras-chave:', error);
            return [];
        }
    }

    // Método para obter todos os Trabalhos Acadêmicos
    obterTodosTrabalhos(): TrabalhoAcademico[] {
        try {
            return this.trabalhosAcademicos;
        } catch (error) {
            console.error('Erro ao obter trabalhos acadêmicos:', error);
            return [];
        }
    }
}


