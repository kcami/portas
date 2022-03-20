// criou a classe porta para conseguir passar todos os parametros de uma vez para o componente porta

export default class PortaModel {
    // # é um atributo privado (pode ser acessado por get/set)
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente
    }

    get selecionada() {
        return this.#selecionada
    }

    get aberta() {
        return this.#aberta
    }

    get fechada() {
        return !this.aberta
    }

    desmarcar() {
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    // comportamento da porta
    alternarSelecao() {
        const selecionada = !this.selecionada // acesso get selecionada
        // cria-se uma cópia do objeto para ser retornado (e nao muda os paremtros dessa instancia do obj)
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}