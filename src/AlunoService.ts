import { Aluno, CriarAlunoDTO, SituacaoAluno } from "./aluno";
import { Repository } from "./repository";

export class AlunoService {
    private repo = new Repository<Aluno>()

    cadastrar(dados: CriarAlunoDTO): Aluno {
        // nao permite o cadastro de dois alunos com o mesmo email 
        let verificarExistencia = this.repo.listarTodos().find(aluno => aluno.email === dados.email)

        if(verificarExistencia) {
            throw new Error("Email ja cadastrado")
    } 

    const aluno: Aluno = {
        // A matricula é gerada automaticamente para garantir que seja unica
        matricula: `MAT${Date.now()}`,
        dataCadastro: new Date().toISOString(),
        ...dados
    }

    this.repo.salvar(aluno)

    return aluno

    }

    buscarMatricula(matricula: string): Aluno {
        let aluno = this.repo.buscarPorMatricula(matricula)

        if(!aluno) {
            throw new Error("Aluno nao encontrado")
        }

        return aluno
    }

    listarTodos(): Aluno[] {
        let todosAlunos = this.repo.listarTodos()

        return todosAlunos
    }

    atualizarSituacao(matricula: string, situacao: SituacaoAluno): Aluno {
        let busca = this.buscarMatricula(matricula)

        Object.assign( busca, {situacao} )

         return busca
    }

    deletar(matricula: string): void {
        let deletar = this.repo.deletar(matricula)

        if(deletar === false) {
            throw new Error("Aluno nao encontrado") 
        }
    }
}