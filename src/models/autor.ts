class Autor extends Pessoa{
    private _curso: Curso;

    constructor(cpf: string, nome: string, email: string, curso: Curso) {
        super(cpf, nome, email)
        this._curso = curso;
    }

    // Getters e Setters para cpf
    get getCpf(): string {
        return this.cpf;
    }

    set setCpf(cpf: string) {
        this.cpf = cpf;
    }

    // Getters e Setters para nome
    get getNome(): string {
        return this.nome;
    }

    set setNome(nome: string) {
        this.nome = nome;
    }


    // Getters e Setters para curso
    get getCurso(): Curso {
        return this._curso;
    }

    set setCurso(curso: Curso) {
        this._curso = curso;
    }
}