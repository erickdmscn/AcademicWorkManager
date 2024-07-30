class Autor extends Pessoa {
    private _curso: Curso;

    constructor(cpf: string, nome: string, email: string, curso: Curso) {
        super(cpf, nome, email);
        this._curso = curso;
    }

    get curso(): Curso {
        return this._curso;
    }

    set curso(curso: Curso) {
        this._curso = curso;
    }
}