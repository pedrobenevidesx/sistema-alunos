export enum SituacaoAluno {
    ATIVO = "ATIVO",
    TRANCADO = "TRANCADO",
    FORMADO = "FORMADO",
    CANCELADO = "CANCELADO"
}

export type Aluno = {
    matricula: string,
    nome: string,
    email: string,
    curso: string,
    situacao: SituacaoAluno,
    dataCadastro: string
}

export type CriarAlunoDTO = Omit<Aluno, "matricula" | "dataCadastro">