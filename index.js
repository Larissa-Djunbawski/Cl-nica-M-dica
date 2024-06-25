//Adicionar uma nova consulta
//Listar todas as consultas
//Atualizar uma consulta existente
//Cancelar uma consulta
console.log("Digite 1. para marcar uma consulta");
console.log("Digite 2. para listar consultas agendadas");
console.log("Digite 3. para atualizar uma consulta já existente");
console.log("Digite 4. para cancelar uma consulta");

const consultas = [];
let paciente = {};
let opcao = 0;

process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();

  if (!opcao) {
    opcao = Number (entrada_usuario);
  } else {
    switch (opcao) {
      case 1:
        console.log("Qual o nome completo do paciente");
        if (!paciente.nome) {
          paciente.nome = entrada_usuario;
          console.log("Qual o nome do médico? ");
        } else if (!paciente.medico) {
          paciente.medico = entrada_usuario;
          console.log("Qual a data da consulta? ");
        } else if (!paciente.dataconsulta) {
          paciente.dataconsulta = entrada_usuario;
          console.log("Qual o horário da consulta? ");
        } else if (!paciente.horarioconsulta){
          paciente.horarioconsulta = entrada_usuario
          consultas.push(paciente);
          paciente = {};
          opcao = 0;
          console.log("paciente cadastrado com sucesso!", consulta);
          exibirMenu();
        }
        break;
      case 2:
        console.log("Listando consultas agendadas: ");
        console.log(consultas);
        break;
      case 3:
        break;
      case 4:
        console.log("Qual das consultas você deseja cancelar? " + consultas);
        let pacienteCancelar = entrada_usuario;
        let indiceCancelar = -1;
        for (let i = 0; i < consultas.length; i++) {
          if (consultas[i].nome === remover) {
            indiceCancelar = i;
            break;
          }
        }
        if (indiceCancelar !== -1) {
          consultas.splice(indiceCancelar, 1);
          console.log("Consulta cancelada com sucesso!");
        } else {
          console.log("Paciente não encontrado no cadastro");
        }
        break;
      default:
        console.log("opcao inválida");
        opcao = 0;
        exibirMenu()
        break;
    }
  }
});

function exibirMenu(){
  console.log("Digite 1. para marcar uma consulta");
  console.log("Digite 2. para listar consultas agendadas");
  console.log("Digite 3. para atualizar uma consulta já existente");
  console.log("Digite 4. para cancelar uma consulta");
}
