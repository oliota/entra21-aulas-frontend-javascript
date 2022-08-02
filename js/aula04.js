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
