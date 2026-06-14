class Repository<T extends { matricula: string }> {
    private items: T[] = []

    salvar(item: T): void {
        this.items.push(item)
    }

    buscarPorMatricula(matricula: string): T | null {
        if (this.items.find(item => matricula === item.matricula)) {
            return item.matricula
        } else {
            return null
        }

}