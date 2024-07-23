class Pessoa {
    private _cpf: string;
    private _nome: string;
    private _email: string;

    constructor(cpf: string, nome: string, email: string) {
        this._cpf = cpf;
        this._nome = nome;
        this._email = email;
    }

    
    get cpf(): string {
        return this._cpf;
    }

    // Setter para cpf com validação de números do CPF
    set cpf(cpf: string) {
        if (cpf.length === 11) {
            this._cpf = cpf;
        } else {
            throw new Error("CPF inválido");
        }
    }

    // Getter para nome
    get nome(): string {
        return this._nome;
    }

    // Setter para nome com validação para o campo não ficar vazio
    set nome(nome: string) {
        if (nome.length > 0) {
            this._nome = nome;
        } else {
            throw new Error("Nome não pode ser vazio");
        }
    }

    // Getter para email
    get email(): string {
        return this._email;
    }

    // Setter para email com validação para incluir @
    set email(email: string) {
        if (email.includes("@")) {
            this._email = email;
        } else {
            throw new Error("Email inválido");
        }
    }
}
