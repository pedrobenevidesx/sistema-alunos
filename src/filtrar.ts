import { Aluno, SituacaoAluno } from "./aluno";

export function filtrarPorCurso( dados: Aluno[], curso: string ): Aluno[] {
    return dados.filter(aluno => aluno.curso === curso)

}

export function filtrarPorSituacao ( dados: Aluno[], situacao: SituacaoAluno ): Aluno[] {
    return dados.filter(aluno => aluno.situacao === situacao)

}

export function ordenarPorNome ( dados: Aluno[] ): Aluno[] {
    // O localeCompare foi utilizado para respeitar regras de ordenacao de textos
    return dados.sort((a, b) => a.nome.localeCompare(b.nome))

}

export function buscarPorEmail <T extends { email: string }>(dados: T[], email: string): T | null {
    return dados.find(alunos => alunos.email === email) ?? null

}