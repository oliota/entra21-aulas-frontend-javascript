$("#meu_ip").on("click", () => {
  $.ajax({
    url: "https://httpbin.org/ip",
    type: "get",

    success: function (dados) {
      console.log(dados);
      alert("Veja os dados retornados no console...");
    },

    error: function (erro) {
      console.error(erro);
    },
  });
});

$("#eco_get").on("click", () => {
  $.ajax({
    url: "https://httpbin.org/get?nome=rubem&aula=javascript%20com%20ajax",
    type: "get",

    success: function (dados) {
      console.log(dados);
      alert("Veja os dados retornados no console...");
    },

    error: function (erro) {
      console.error(erro);
    },
  });
});

$("#delay_get").on("click", () => {
  $.ajax({
    url: " https://httpbin.org/delay/" + $("#delay").val(),
    type: "get",

    success: function (dados) {
      console.log(dados);
      alert("Veja os dados retornados no console...");
    },

    error: function (erro) {
      console.error(erro);
    },
  });
});

$("#buscar_pokemon").on("click", () => {
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + $("#pokemon").val(),
    type: "get",

    success: function (dados) {
      console.log(dados);
      escreverTabela(dados);
    },

    error: function (erro) {
      console.error(erro);
      alert("Busca direito isso ai");
    },
  });
});

function escreverTabela(dados) {
  $("tbody").append(
    $("<tr>").append(
      $("<td>", { text: dados.id }),
      $("<td>", { text: dados.name }),
      $("<td>",{colspan:2}).append($("<img>", { src: dados.sprites.back_default }))
    )
  );
}

$("#eco_post").on("click", () => {
  // objeto a ser enviado no body

  var objeto = {
    nome: "Rubem",

    email: "email@email.com",
  };

  $.ajax({
    url: "https://httpbin.org/post",

    type: "post",

    headers: {
      Accept: "application/json",

      "Content-type": "application/json",
    },

    data: JSON.stringify(objeto), //converte objeto em string

    success: function (dados) {
        
        console.log(dados);
        alert("Veja os dados retornados no console...");
    },

    error: function (erro) {
      alert("Opa deu ruim, verifique o motivo no console...");

      console.error(erro);
    },
  });
});
