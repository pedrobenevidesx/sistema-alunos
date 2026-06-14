export class Repository<T extends { matricula: string }> {
    private items: T[] = []

    // adiciona um novo item no array
    salvar(item: T): void {
        this.items.push(item)
    }

    buscarPorMatricula(matricula: string): T | null {
        return this.items.find(item => matricula === item.matricula) ?? null
    }

    listarTodos(): T[] {
        return this.items
    }

    // atualiza o registro de um aluno que esta no array
    atualizar(matricula: string, dados: Partial<T>): T | null {
        let item = this.items.find(item => matricula === item.matricula)

        if (item) {
            Object.assign(item, dados)
            return item
        } else {
            return null
        }
    }

    deletar(matricula: string): boolean {
        // percorre o array e devolve a posicao do aluno referente a matricula passada como parametro
        const indice = this.items.findIndex(item => item.matricula === matricula)

        // se indice for -1, nao encontrou a matricula no array
        if(indice === -1) {
            return false
        } else {
            this.items.splice(indice, 1) // remove o indice do array
            return true
        }
    }
}