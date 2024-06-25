console.log("Digite 1. para marcar uma consulta"); //Adicionar uma nova consulta
console.log("Digite 2. para listar consultas agendadas"); //Listar todas as consultas
console.log("Digite 3. para atualizar uma consulta já existente"); //Atualizar uma consulta existente
console.log("Digite 4. para cancelar uma consulta"); //Cancelar uma consulta

const consultas = [];
let paciente = {};
let entrada_usuario = "menu";

process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  if (entrada_usuario == "menu") {
    if(input === "1"){
      entrada_usuario="adicionar_nome"
      console.log("Insira o nome do Paciente:")
    }else if (input ==="2"){
      if (consultas.length === 0){
        console.log("Nenhuma consulta agendada ")
        
      } else {
        console.log("consultas agendadas")
        console.log(consultas)
      }
    } else if (input === "3"){

    } else if (input === "4"){
      entrada_usuario = "cancelar consulta"
      console.log("Digite o nome do paciente que deseja cancelar: ")
    }
    
    
    
    else if (entrada_usuario==="adicionar_nome"){
      paciente.nome=input
      entrada_usuario="adicionar_medico"
      console.log("digite o nome do medico")
    }else if(entrada_usuario==="adicionar_medico"){
      paciente.medico = input
      entrada_usuario = "adicionar_data"
      console.log("Digite a data da consulta")
    }else if(entrada_usuario==="adicionar_data"){
      paciente.data= input
      entrada_usuario = "adicionar_hora"
      console.log("Digite a hora da consulta")
    }else if(entrada_usuario==="adicionar_hora"){
      paciente.hora= input
      consultas.push(paciente)
      console.log(consultas)
      process.exit()
    }
  }
  });
//     }else if (input =="3"){
//       entrada_usuario="adicionar_medico"
//       console.log("Insira o nome  do medico")
    
    
    
//   } else {
//     switch (opcao) {
//       case 1:
//         console.log("Qual o NOME completo do paciente");

//         if (!paciente.nome) {
//           paciente.nome = entrada_usuario;

//           console.log("Qual o NOME do médico? ")
//         } else if (!paciente.medico){
          
//           paciente.medico = entrada_usuario;

//           console.log("Qual o DIA e MÊS da consulta? ");
//         } else if (!paciente.dataconsulta) {
          
//           paciente.dataconsulta = entrada_usuario;

//           console.log("Qual o HORÁRIO da consulta? ");
//         } else {
          
//           paciente.horarioconsulta = entrada_usuario;

//           consultas.push(paciente);
//           paciente = {};
//           opcao = 0;
//           console.log("paciente cadastrado com sucesso!", consultas);
//           exibirMenu();
//         }
//         break;
        
//       case 2:
//         console.log("Listando consultas agendadas: ");
//         console.log(consultas);
//         exibirMenu();
//         opcao = 0;
//         break;

//       case 3:
//         break;

//       case 4:
//         console.log("Qual das consultas você deseja cancelar? " + consultas);
//         let pacienteCancelar = entrada_usuario;
//         let indiceCancelar = -1;
//         for (let i = 0; i < consultas.length; i++) {
//           if (consultas[i].nome === pacienteCancelar) {
//             indiceCancelar = i;
//             break;
//           }
//         }
//         if (indiceCancelar !== -1) {
//           consultas.splice(indiceCancelar, 1);
//           console.log("Consulta cancelada com sucesso!");
//         } else {
//           console.log("Paciente não encontrado no cadastro");
//         }
//         break;
//       default:
//         console.log("opcao inválida");
//         opcao = 0;
//         exibirMenu();
//         break;
//     }
//   }
// });

// function exibirMenu() {
//   console.log("Digite 1. para marcar uma consulta");
//   console.log("Digite 2. para listar consultas agendadas");
//   console.log("Digite 3. para atualizar uma consulta já existente");
//   console.log("Digite 4. para cancelar uma consulta");
// }
