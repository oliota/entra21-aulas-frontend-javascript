$("header .card-body a").attr("class", "btn btn-outline-success");

$("#update").hide();

let pessoas = [];
let update = null;

$("form").on("submit", function (event) {
  event.preventDefault();
  let dados = obterDados();
  console.log("recebi", dados);

  console.log("Pessoas antes", pessoas);
  if ($("#add").is(":visible")) {
    pessoas.push(dados); 
    console.log("added");
  } else {
    pessoas[pessoas.indexOf(update)] = dados; 
    console.log("updated");
  }
  console.log("Pessoas depois", pessoas);
  escreverTabela();
  $("#clean").click()
});

$("#clean").on("click",function(){
  $("#add").show()
  $("#update").hide()
})

function obterDados() {
  let nome = $("#nome").val();
  let idade = $("#idade").val();
  let cidade = $("#cidade").val();

  return {
    nome: nome,
    idade: idade,
    cidade: cidade,
  };
}

function escreverTabela() {
  $("tbody").empty();
  pessoas.forEach((pessoa) => {
    $("tbody").append(
      $("<tr>").append(
        $("<td>", { text: pessoa.nome }),
        $("<td>", { text: pessoa.idade }),
        $("<td>", { text: pessoa.cidade }),
        $("<td>").append(
          $("<button>", {
            class: "btn btn-primary me-2",
            text: "Editar",
            click: function () {
              update = pessoa;
              $("#nome").val(pessoa.nome);
              $("#idade").val(pessoa.idade);
              $("#cidade").val(pessoa.cidade);
              $("#add").hide();
              $("#update").show();
            },
          }),
          $("<button>",{
            class:"btn btn-danger me-2",
            text:"Delete",
            click: function(){
              pessoas.splice( pessoas.indexOf(pessoa) ,1)
              escreverTabela()
            }
          })
        )
      )
    );
  });
}

 