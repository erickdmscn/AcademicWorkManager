class TrabalhoAcademico {
    private _titulo: string;
    private _descricao: string;
    private _resumo: string;
    private _dataEntrega: Date;
    private _autores: Autor[];
    private _orientador: Orientador;
    private _palavrasChave: string[];

    constructor(
        titulo: string,
        descricao: string,
        resumo: string,
        dataEntrega: Date,
        autores: Autor[],
        orientador: Orientador,
        palavrasChave: string[]
    ) {
        this._titulo = titulo;
        this._descricao = descricao;
        this._resumo = resumo;
        this._dataEntrega = dataEntrega;
        this._autores = autores;
        this._orientador = orientador;
        this._palavrasChave = palavrasChave;
    }

    // Getters e Setters com verificações básicas

    get titulo(): string {
        return this._titulo;
    }

    set titulo(titulo: string) {
        if (titulo.length === 0) {
            throw new Error("O título não pode ser vazio.");
        }
        this._titulo = titulo;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(descricao: string) {
        if (descricao.length === 0) {
            throw new Error("A descrição não pode ser vazia.");
        }
        this._descricao = descricao;
    }

    get resumo(): string {
        return this._resumo;
    }

    set resumo(resumo: string) {
        if (resumo.length === 0) {
            throw new Error("O resumo não pode ser vazio.");
        }
        this._resumo = resumo;
    }

    get dataEntrega(): Date {
        return this._dataEntrega;
    }

    set dataEntrega(dataEntrega: Date) {
        const hoje = new Date();
        if (dataEntrega <= hoje) {
            throw new Error("A data de entrega deve ser uma data futura.");
        }
        this._dataEntrega = dataEntrega;
    }

    get autores(): Autor[] {
        return this._autores;
    }

    set autores(autores: Autor[]) {
        if (autores.length === 0) {
            throw new Error("Deve haver pelo menos um autor.");
        }
        this._autores = autores;
    }

    get orientador(): Orientador {
        return this._orientador;
    }

    set orientador(orientador: Orientador) {
        this._orientador = orientador;
    }

    get palavrasChave(): string[] {
        return this._palavrasChave;
    }

    set palavrasChave(palavrasChave: string[]) {
        if (palavrasChave.length === 0) {
            throw new Error("Deve haver pelo menos uma palavra-chave.");
        }
        this._palavrasChave = palavrasChave;
    }
}