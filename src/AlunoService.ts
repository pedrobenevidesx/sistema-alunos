import { Aluno, CriarAlunoDTO, SituacaoAluno } from "./aluno";
import { Repository } from "./repository";

export class AlunoService {
    private repo = new Repository<Aluno>()

    cadastrar(dados: CriarAlunoDTO): Aluno {
        
    let verificar = this.repo.listarTodos().find(aluno => aluno.email === dados.email)

    if(verificar) {
        throw new Error("Email ja cadastrado")
    } 

    const aluno: Aluno = {
        matricula: "MAT: " + Date.now(),
        dataCadastro: new Date().toISOString(),
        ...dados
    }

    this.repo.salvar(aluno)

    return aluno

    }
}