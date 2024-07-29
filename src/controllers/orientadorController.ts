class OrientadorController {
    private orientadores: Orientador[] = [];
    private trabalhosAcademicosPorOrientador: { [cpf: string]: number } = {}; // Mapa para rastrear o número de trabalhos por orientador

    // Inserir um novo Orientador
    inserirOrientador(cpf: string, nome: string, email: string, titulo: string): Orientador | null {
        try {
            const novoOrientador = new Orientador(cpf, nome, email, titulo);
            this.orientadores.push(novoOrientador);
            return novoOrientador;
        } catch (error) {
            console.error('Erro ao inserir orientador:', error);
            return null;
        }
    }

    // Atualizar um Orientador existente por CPF
    atualizarOrientador(cpf: string, nome: string, email: string, titulo: string): Orientador | null {
        try {
            const orientador = this.orientadores.find(o => o.cpf === cpf);
            if (orientador) {
                orientador.nome = nome;
                orientador.email = email;
                orientador.titulo = titulo;
                return orientador;
            } else {
                console.warn('Orientador não encontrado para o CPF:', cpf);
                return null;
            }
        } catch (error) {
            console.error('Erro ao atualizar orientador:', error);
            return null;
        }
    }

    // Remover um Orientador por CPF
    removerOrientador(cpf: string): boolean {
        try {
            if (this.trabalhosAcademicosPorOrientador[cpf] && this.trabalhosAcademicosPorOrientador[cpf] > 0) {
                console.warn('Não é possível remover o orientador, pois há trabalhos acadêmicos associados a ele.');
                return false;
            }

            const index = this.orientadores.findIndex(o => o.cpf === cpf);
            if (index !== -1) {
                this.orientadores.splice(index, 1);
                return true;
            } else {
                console.warn('Orientador não encontrado para o CPF:', cpf);
                return false;
            }
        } catch (error) {
            console.error('Erro ao remover orientador:', error);
            return false;
        }
    }

    // Método para obter todos os Orientadores (para verificação)
    obterTodosOrientadores(): Orientador[] {
        return this.orientadores
        }
    }
