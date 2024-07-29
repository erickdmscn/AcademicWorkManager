class CursoController {
    private cursos: Curso[] = [];
    private autores: Autor[] = [];
    private autoresPorCurso: { [cursoId: string]: number } = {}; // Mapa para rastrear o número de autores por curso

    // Inserir um novo Curso
    inserirCurso(id: string, nome: string, descricao: string): Curso | null {
        try {
            const novoCurso = new Curso(id, nome, descricao);
            this.cursos.push(novoCurso);
            this.autoresPorCurso[id] = 0; // Inicializa o contador de autores para o novo curso
            return novoCurso;
        } catch (error) {
            console.error('Erro ao inserir curso:', error);
            return null;
        }
    }

    // Atualizar um Curso existente por ID
    atualizarCurso(id: string, nome: string, descricao: string): Curso | null {
        try {
            const curso = this.cursos.find(c => c.id === id);
            if (curso) {
                curso.nome = nome;
                curso.descricao = descricao;
                return curso;
            } else {
                console.warn('Curso não encontrado para o ID:', id);
                return null;
            }
        } catch (error) {
            console.error('Erro ao atualizar curso:', error);
            return null;
        }
    }

    // Remover um Curso por ID
    removerCurso(id: string): boolean {
        try {
            if (this.autoresPorCurso[id] > 0) {
                console.warn('Não é possível remover o curso pois há autores associados a ele.');
                return false;
            }

            const index = this.cursos.findIndex(c => c.id === id);
            if (index !== -1) {
                this.cursos.splice(index, 1);
                delete this.autoresPorCurso[id]; // Remove o curso do mapa de contagem de autores
                return true;
            } else {
                console.warn('Curso não encontrado para o ID:', id);
                return false;
            }
        } catch (error) {
            console.error('Erro ao remover curso:', error);
            return false;
        }
    }

    // Adicionar um Autor a um Curso
    adicionarAutorAoCurso(autor: Autor): boolean {
        try {
            const cursoId = autor.getCurso.id;
            const curso = this.cursos.find(c => c.id === cursoId);
            if (curso) {
                this.autores.push(autor);
                this.autoresPorCurso[cursoId]++;
                return true;
            } else {
                console.warn('Curso não encontrado para o autor:', cursoId);
                return false;
            }
        } catch (error) {
            console.error('Erro ao adicionar autor ao curso:', error);
            return false;
        }
    }

    // Remover um Autor de um Curso
    removerAutorDoCurso(cpf: string): boolean {
        try {
            const autorIndex = this.autores.findIndex(a => a.getCpf === cpf);
            if (autorIndex !== -1) {
                const cursoId = this.autores[autorIndex].getCurso.id;
                this.autores.splice(autorIndex, 1);
                this.autoresPorCurso[cursoId]--;
                return true;
            } else {
                console.warn('Autor não encontrado para o CPF:', cpf);
                return false;
            }
        } catch (error) {
            console.error('Erro ao remover autor do curso:', error);
            return false;
        }
    }

    // Método para obter todos os Cursos (para verificação)
    obterTodosCursos(): Curso[] {
        try {
            return this.cursos;
        } catch (error) {
            console.error('Erro ao obter cursos:', error);
            return [];
        }
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