console.log("Digite 1. para marcar uma consulta\n Digite 2. para listar consultas agendadas \n Digite 3. para atualizar uma consulta já existente\n  Digite 4. para cancelar uma consulta"); //Cancelar uma consulta

const consultas = [];

let entrada_usuario = "menu";

process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  if (entrada_usuario == "menu") {
    if(input === "1"){
      entrada_usuario="adicionar_nome"
      console.log("Insira o nome do Paciente:")
    }else if (input === "4"){
      entrada_usuario = "cancelar_consulta"
      console.log("Digite o nome do paciente que deseja cancelar: ")
    } else if (input ==="2"){

      if (consultas.length === 0){
        console.log("Nenhuma consulta agendada ")
        
      } else {
        console.log("consultas agendadas: ")
        for (let paciente of consultas ){
          console.log(`Nome paciente: ${paciente.nome_paciente}, Nome medico: ${paciente.nome_medico}, Data consulta: ${paciente.data_consulta}, Hora consulta: ${paciente.hora}`)
        }
      }
      console.log("Digite 1. para marcar uma consulta\n Digite 2. para listar consultas agendadas \n Digite 3. para atualizar uma consulta já existente\n  Digite 4. para cancelar uma consulta"); //Cancelar uma consulta
    } else if (input === "3"){
    entrada_usuario = "atualizar_nome"
    console.log("Consultas agendadas: ");
    for (let paciente of consultas){
      console.log(`Nome paciente: ${paciente.nome_paciente}, Nome medico: ${paciente.nome_medico}, Data consulta: ${paciente.data_consulta}, Hora consulta: ${paciente.hora}`)
    }
    console.log("Digite o nome do paciente que deseja atualizar:"); //Cancelar uma consulta
    }else if (input === "5"){
      console.log("Saindo...")
      process.exit();
   } else {
      console.log("Opção invalida. Tente novamente")
    } 
  }
    else if (entrada_usuario==="adicionar_nome"){
      nome_paciente=input
      entrada_usuario="adicionar_medico"
      console.log("digite o nome do medico")
    }else if(entrada_usuario==="adicionar_medico"){
      nome_medico = input
      entrada_usuario = "adicionar_data"
      console.log("Digite a data da consulta")
    }else if(entrada_usuario==="adicionar_data"){
      data_consulta= input
      entrada_usuario = "adicionar_hora"
      console.log("Digite a hora da consulta")
    }else if(entrada_usuario==="adicionar_hora"){
      hora= input
      consultas.push({
        nome_paciente:nome_paciente,
        nome_medico: nome_medico,
        data_consulta: data_consulta,
        hora:hora
      })
      console.log("Consulta agendada com sucesso!")
      entrada_usuario = "menu"
      console.log("Digite 1. para marcar uma consulta\n.Digite 2. para listar consultas agendadas \n.Digite 3. para atualizar uma consulta já existente\n. Digite 4. para cancelar uma consulta"); 

    } else if (entrada_usuario === "cancelar_consulta"){
      let nomecancelar = input
      let cancelado = false
      for (let i = 0; i < consultas.length;i++){
        if (consultas[i].nome_paciente.toLowerCase() === nomecancelar.toLowerCase()){
          consultas.splice(i,1)
          console.log("Consulta cancelada com sucesso!")
          cancelado=true
          break;
        }
      }
      if (!cancelado){
        console.log("Consulta não encontrada")
      }
      entrada_usuario = "menu"
      console.log("Digite 1. para marcar uma consulta\n.Digite 2. para listar consultas agendadas \n.Digite 3. para atualizar uma consulta já existente\n. Digite 4. para cancelar uma consulta");
    } else if (entrada_usuario === "atualizar_nome"){
      nome_atualizar = input
      let consulta = consultas.find(
        (paciente) => paciente.nome_paciente.toLowerCase()===nome_atualizar.toLowerCase()
      )
      if (consulta){
        console.log("Consulta encontrada")
        console.log(`Nome paciente: ${consulta.nome_paciente},
        Nome médico: ${consulta.nome_medico}, Data consulta: ${consulta.data_consulta}, Hora consulta: ${consulta.hora}`)
        entrada_usuario = "atualizar_medico"
        console.log("Digite o novo nome do medico (ou pressione enter para manter o atual)")
      } else {
        console.log("Consulta não encontrada")
        entrada_usuario = "menu"
      console.log("Digite 1. para marcar uma consulta\n.Digite 2. para listar consultas agendadas \n.Digite 3. para atualizar uma consulta já existente\n. Digite 4. para cancelar uma consulta");
      }
    } else if(entrada_usuario === "atualizar_medico"){
      nome_medico = input || consultas.find(
        (paciente)=>paciente.nome_paciente.toLowerCase()===nome_atualizar.toLowerCase()
      ).nome_medico;
      entrada_usuario = "atualizar_data"
      console.log("Digite uma nova data da consulta (ou enter para manter atual): ")
      
    } else if (entrada_usuario === "atualizar_data"){
      data_consulta = input || consultas.find(
        (paciente)=>paciente.nome_paciente.toLowerCase()===nome_atualizar.toLowerCase()
      ).data_consulta;
      entrada_usuario = "atualizar_hora"
      console.log("Digite a nova hora da consulta (ou enter para manter a mesma)")

    } else if (entrada_usuario === "atualizar_hora"){
      hora = input || consultas.find(
        (paciente)=>paciente.nome_paciente.toLowerCase()===nome_atualizar.toLowerCase()
      ).hora;

      for (let i = 0; i < consultas.length; i++){
        if (consultas[i].nome_paciente.toLowerCase()===nome_atualizar.toLowerCase()){
          consultas[i].nome_medico = nome_medico
          consultas[i].data_consulta = data_consulta
          consultas[i].hora = hora
          break;
        }
      }
      console.log("Consulta atualizada com sucesso! ")
      entrada_usuario = "menu"
      console.log("Digite 1. para marcar uma consulta\n Digite 2. para listar consultas agendadas \n Digite 3. para atualizar uma consulta já existente\n  Digite 4. para cancelar uma consulta");

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
