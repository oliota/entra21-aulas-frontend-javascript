$("body").attr("class", "container-fluid mt-4");

$("<header>", { class: "row" })
  .append(
    $("<section>", { class: "col" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body text-center" }).append(
          $("<h1>", { text: "Página vertical" })
        )
      )
    )
  )
  .appendTo("body");

$("body")
  .append(
    $("<section>", { class: "row" }).append(
      $("<aside>", { class: "col-3 mt-4" }).append(
        $("<section>", { class: "col" }).append(
          $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body" }).append(
              $("<nav>").append(
                $("<a>", { href: "/horizontal.html", text: "Horizontal" }),
                $("<a>", { href: "/crud.html", text: "CRUD", target: "_blank" })
              )
            )
          )
        )
      ),
      $("<main>", { class: "col mt-4" }).append(
        $("<section>", { class: "col" }).append(
          $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body" }),
            $("<div>", { class: "card-footer",text:"Página de exemplo quase toda escrita com jQuery" })
          )
        )
      )
    )
  )
  .appendTo("body");

$("aside nav a").attr(
  "class",
  "btn btn-outline-primary mb-1 btn-block form-control"
);

$("main .card-body").append(
  $("<table>", {
    class: "table table-bordered table-striped table-hover",
  }).append(
    $("<thead>").append(
      $("<th>", { text: "Nome" }),
      $("<th>", { text: "Idade" }),
      $("<th>", { text: "Cidade" })
    ),
    $("<tbody>").append(
      $("<tr>").append(
        $("<td>", { text: "Rubem" }),
        $("<td>", { text: "33" }),
        $("<td>", { text: "Blumenau" })
      ),
      $("<tr>").append(
        $("<td>", { text: "Fulano" }),
        $("<td>", { text: "40" }),
        $("<td>", { text: "Florianopolis" })
      )
    )
  )
);
