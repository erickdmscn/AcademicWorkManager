class CursoController {
    private _cursos: Curso[] = [];
    private _autores: Autor[] = [];
    private _autoresPorCurso: { [cursoId: string]: number } = {}; // Mapa para rastrear o número de autores por curso

    // Inserir um novo Curso
    inserirCurso(id: string, nome: string, descricao: string): Curso | null {
        try {
            const novoCurso = new Curso(id, nome, descricao);
            this._cursos.push(novoCurso);
            this._autoresPorCurso[id] = 0; // Inicializa o contador de autores para o novo curso
            return novoCurso;
        } catch (error) {
            console.error('Erro ao inserir curso:', error);
            return null;
        }
    }

    // Atualizar um Curso existente por ID
    atualizarCurso(id: string, nome: string, descricao: string): Curso | null {
        try {
            const curso = this._cursos.find(c => c.id === id);
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
            if (this._autoresPorCurso[id] > 0) {
                console.warn('Não é possível remover o curso pois há autores associados a ele.');
                return false;
            }

            const index = this._cursos.findIndex(c => c.id === id);
            if (index !== -1) {
                this._cursos.splice(index, 1);
                delete this._autoresPorCurso[id]; // Remove o curso do mapa de contagem de autores
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
            const curso = this._cursos.find(c => c.id === cursoId);
            if (curso) {
                this._autores.push(autor);
                this._autoresPorCurso[cursoId]++;
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
            const autorIndex = this._autores.findIndex(a => a.getCpf === cpf);
            if (autorIndex !== -1) {
                const cursoId = this._autores[autorIndex].getCurso.id;
                this._autores.splice(autorIndex, 1);
                this._autoresPorCurso[cursoId]--;
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
            return this._cursos;
        } catch (error) {
            console.error('Erro ao obter cursos:', error);
            return [];
        }
    }

    // Método para obter todos os Autores (para verificação)
    obterTodosAutores(): Autor[] {
        return this._autores
    }
}