console.log($("#paragrafo_1").text());

$("#paragrafo_2").text("Esse paragrafo foi escrito com jQuery");

$("li")
  .text("Fui inicializado e estilizado com jQuery")
  .attr("class", "btn btn-outline-primary m-1");

console.log($("p").text());
 
$("p").each(function () {
  console.log(this); //conteudo completo
  console.log(this.textContent); //apenas o conteudo interno
  console.log(this.value); //atributo value quando input
});

function criarLinha() {
  $("body").append(
    $("<p>", {
      text: "Nova linha escrita com jQuery",
      title:"Ao passar o mouse esse texto aparece",
      class:"alert alert-danger"
    })
  );
}

$("#excluirLinhas").on("click",function(){
    $(".alert").remove()
})


console.group("Exercicio criar varios conteudos com jQuery")

$("<table>",{class:"table table-dark"}).append(
  $("<thead>",{class:"bg-dark"}).append(
    $("<th>",{text:"Nome"}),
    $("<th>",{text:"Idade"}),
    $("<th>",{text:"Cidade"})
  ),
  $("<Tbody>").append(
    $("<tr>").append(
      $("<td>",{text:"Fulano"}),
      $("<td>",{text:"33"}),
      $("<td>",{text:"Blumenau"}),
    ),
    $("<tr>").append(
      $("<td>",{text:"Zé"}),
      $("<td>",{text:"80"}),
      $("<td>",{text:"Inbituba"}),
    )
  )
).appendTo("body")

console.groupEnd()

console.group('Exercicio criar elementos e depois apagar tudo');


$("#add").on("click",()=>{
    $("<p>",{text:"Novo elemento", class:"alert alert-info"}).appendTo("body")
})

$("#limpar").on("click",()=>{
  $(".alert").remove()
})

console.groupEnd();