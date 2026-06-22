import { AlunoService } from "./AlunoService";
import { SituacaoAluno } from "./aluno";
import { filtrarPorCurso, filtrarPorSituacao, ordenarPorNome, buscarPorEmail } from "./filtrar";

const service = new AlunoService()

service.cadastrar( {
    nome: "Pedro Benevides",
    email: "pedro@email.com",
    curso: "Analise e Desenvolvimento de Sistemas",
    situacao: SituacaoAluno.ATIVO
 } )

service.cadastrar( {
    nome: "Kayki de Paula",
    email: "kayki@email.com",
    curso: "Enfermagem",
    situacao: SituacaoAluno.ATIVO
 } )


const aluno = service.cadastrar( {
    nome: "Maria Fernanda",
    email: "Maria@email.com",
    curso: "Fisioterapia",
    situacao: SituacaoAluno.TRANCADO
 } )

service.atualizarSituacao( aluno.matricula, SituacaoAluno.ATIVO )

//service.deletar(aluno.matricula)

//console.log(service.buscarMatricula(aluno.matricula))

const alunos = service.listarTodos()

console.log(buscarPorEmail(alunos, "pedro@email.com"))

console.log(filtrarPorCurso(alunos, "Enfermagem"))

console.log(filtrarPorSituacao(alunos, SituacaoAluno.ATIVO))

console.log(ordenarPorNome(alunos))


