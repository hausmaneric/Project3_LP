class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
let heroi1 = new Heroi('Arthur', 30, 'guerreiro');
heroi1.atacar(); // Saída: guerreiro atacou usando espada

let heroi2 = new Heroi('Merlin', 40, 'mago');
heroi2.atacar(); // Saída: mago atacou usando magia
