class Curso {
    private _id: string
    private _nome: string
    private _descricao: string

    constructor(id: string, nome: string, descricao: string){ 
        this._id = id 
        this._nome = nome
        this._descricao = descricao
    }
    // Getter para id
    get id(): string {
        return this._id;
    }

    // Setter para id
    set titulo(id: string) {
        this._id = id;
    }

    // Getter para nome
    get nome(): string {
        return this._nome;
    }

    // Setter para nome
    set nome(nome: string) {
        this._nome = nome;
    }

    // Getter para descrição
    get descricao(): string {
        return this._descricao;
    }

    // Setter para descrição
    set descricao(descricao: string) {
        this._descricao = descricao;
    }
}