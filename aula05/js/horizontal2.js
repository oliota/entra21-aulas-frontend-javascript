$("body").attr("class", "container");

$("<header>", { class: "row mt-3 mb-3" })
  .append(
    $("<section>", { class: "col" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body" }).append(
          $("<h1>", { text: "Página menu horizontal" })
        ),
        $("<div>", { class: "card-footer" }).append(
          $("<a>", {
            text: "Vertical",
            href: "/vertical.html",
          }),
          $("<a>", {
            text: "CRUD",
            href: "/crud.html",
          })
        )
      )
    )
  )
  .appendTo("body");


$("header .card-footer a").attr("class", "btn btn-outline-success btn-sm me-2");

$("<main>")
  .append(
    $("<div>", { class: "card" }).append(
      $("<div>", { class: "card-body" }).append(
        $("<table>", { class: "table table-borderd" }).append(
            $("<thead>").append(
              $("<th>", { text: "Nome" }),
              $("<th>", { text: "Idade" }),
              $("<th>", { text: "Cidade" })
            ),
            $("<tbody>").append(
              $("<tr>").append(
                $("<td>", { text: "Oliota" }),
                $("<td>", { text: "33" }),
                $("<td>", { text: "Blumenau" })
              )
            )
          )
      ),
      $("<div>", { class: "card-footer", text: "® Oliota horizontal2" })
    )
  )
  .appendTo("body");

$("main .card-body").append(
//   $("<table>", { class: "table table-borderd" }).append(
//     $("<thead>").append(
//       $("<th>", { text: "Nome" }),
//       $("<th>", { text: "Idade" }),
//       $("<th>", { text: "Cidade" })
//     ),
//     $("<tbody>").append(
//       $("<tr>").append(
//         $("<td>", { text: "Oliota" }),
//         $("<td>", { text: "33" }),
//         $("<td>", { text: "Blumenau" })
//       )
//     )
//   )
);
