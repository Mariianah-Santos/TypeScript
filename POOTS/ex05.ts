import { randomUUID } from "node:crypto";
import { faker } from '@faker-js/faker';

class Post {
    private _userName: string;
    private _titulo: string;
    private _numeroCurtidas: number;
    private _numComentarios: number;
    private _numCompartilhamento: number;
    private _numSalvos: number;
    private _id: string;

    constructor(userName: string, titulo: string) {
        this._userName = userName;
        this._titulo = titulo;
        this._numeroCurtidas = 0;
        this._numComentarios = 0;
        this._numCompartilhamento = 0;
        this._numSalvos = 0;
        this._id = randomUUID();
    }

    get userName() {
        return this._userName;
    }

    set userName(userName: string) {
        this._userName = userName;
    }

    get id() {
        return this._id;
    }

    get titulo() {
        return this._titulo;
    }

    get numeroCurtidas() {
        return this._numeroCurtidas;
    }

    get numComentarios() {
        return this._numComentarios;
    }

    get numCompartilhamento() {
        return this._numCompartilhamento;
    }

    get numSalvos() {
        return this._numSalvos;
    }

    incrementarComentarios() {
        this._numComentarios += 1;
    }

    incrementarCurtidas() {
        this._numeroCurtidas += 1;
    }

    incrementarCompartilhamento() {
        this._numCompartilhamento += 1;
    }

    incrementarSalvos() {
        this._numSalvos += 1;
    }
}

for (let index = 0; index < 15; index++) {
    const userName = faker.person.firstName();
    const description = faker.lorem.word();

    const post = new Post(userName, description);

    console.log(post);
}