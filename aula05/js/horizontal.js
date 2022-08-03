$("body").attr("class", "container mt-4");

$("<header>", { class: "row" })
  .append(
    $("<section>", { class: "col" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body text-center" }).append(
          $("<h1>", { text: "Página horizontal" }),
          $("<a>", { href: "/vertical.html", text: "Vertical" }),
          $("<a>", { href: "/crud.html", text: "CRUD", target: "_blank" })
        )
      )
    )
  )
  .appendTo("body");

$("header .card-body a").attr("class", "btn btn-outline-primary me-2");

$("<main>", { class: "row mt-4" })
  .append(
    $("<section>", { class: "col" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body" }), 
        $("<div>", { class: "card-footer",text:"Página de exemplo quase toda escrita com jQuery" })
      )
    )
  )
  .appendTo("body");


  $("main .card-body").append(
    $("<table>",{class:"table table-bordered table-striped table-hover"}).append(
        $("<thead>").append(
            $("<th>",{text:"Nome"}),
                $("<th>",{text:"Idade"}),
                $("<th>",{text:"Cidade"}),
        ),
        $("<tbody>").append(
            $("<tr>").append(
                $("<td>",{text:"Rubem"}),
                $("<td>",{text:"33"}),
                $("<td>",{text:"Blumenau"}),
            ),
            $("<tr>").append(
                $("<td>",{text:"Fulano"}),
                $("<td>",{text:"40"}),
                $("<td>",{text:"Florianopolis"}),
            ),
        )
    )
  )

 
