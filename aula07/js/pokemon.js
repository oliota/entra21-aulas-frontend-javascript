$("#card_busca").hide();

$("#buscar_pokemon").on("submit", (event) => {
  event.preventDefault();

  $("#card_busca").show();
  $("#result").empty();
 
  $("#buscando").empty().append($("<img>", { src: "/img/pokeball2.webp" }));

  setTimeout(() => {
    $.ajax({
      url: decodeURI("https://pokeapi.co/api/v2/pokemon/" + $("#param").val()),
      type: "get",
      success: (retorno) => {
        console.log(retorno);
        $("#buscando")
          .empty()
          .append(
            $("<img>", { src: retorno.sprites.front_default }),
            $("<img>", { src: retorno.sprites.back_default })
          );

        $("#result").show();
        $("#result").append($("<h3>", { text: retorno.name }));
      },
      error: (motivo) => {
        console.log(motivo);
      },
    });
  }, 3000);
});

$.ajax({
  url: decodeURI("https://pokeapi.co/api/v2/type/"),
  type: "get",
  success: (retorno) => {
    console.log(retorno.results);
    retorno.results.forEach((tipo) => {
      $("#tipos").append(
        $("<button>", {
          class: "btn btn-outline-dark m-1",
          text: tipo.name,
          click: () => {
            $("#card_busca").hide();
            $.ajax({
              url: decodeURI(tipo.url),
              type: "get",
              success: (lista) => {
                console.log(lista);

                $("#list_types")
                  .empty()
                  .append(
                    $("<table>", { class: "table table-bordered" }).append(
                      $("<thead>").append(
                        $("<th>", { text: "Pokemons do tipo " + tipo.name })
                      ),
                      $("<tbody>")
                    )
                  );

                lista.pokemon.forEach((item) => {
                  $("#list_types tbody").append(
                    $("<tr>").append(
                      $("<td>", { text: item.pokemon.name }),
                      $("<td>").append(
                        $("<button>", {
                          class: "btn btn-outline-primary",
                          text: "Detalhes",
                          click: () => {
                            $("#param").val(item.pokemon.name);
                            $("#buscar_pokemon").submit();
                          },
                        })
                      )
                    )
                  );
                });
              },
              error: (motivo) => {
                console.log(motivo);
              },
            });
          },
        })
      );
    });
  },
  error: (motivo) => {
    console.log(motivo);
  },
});
