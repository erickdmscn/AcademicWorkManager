class Orientador extends Pessoa {
    private _titulo: string;

    constructor(cpf: string, nome: string, email: string, titulo: string) {
        super(cpf, nome, email);
        this._titulo = titulo;
    }

    
    // Getter para titulo
    get titulo(): string {
        return this._titulo;
    }

    // Setter para titulo
    set titulo(titulo: string) {
        this._titulo = titulo;
    }
}