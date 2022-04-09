function obtenerNombreMes(numero) {
  let miFecha = new Date();
  if (0 < numero && numero <= 12) {
    miFecha.setMonth(numero - 1);
    return new Intl.DateTimeFormat("es-ES", { month: "long" }).format(miFecha);
  } else {
    return null;
  }
}

function diasDelMesYAnoActual() {
  var fecha = new Date();
  return new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
}

function diasDelMesYAnoActual(numero) {
  var fecha = new Date();
  return new Date(fecha.getFullYear(), numero, 0).getDate();
}

function obtenerFechaTexto(ano, mes, dia, longitud) {
  var event = new Date(Date.UTC(ano, mes, dia, 3, 0, 0));
  var optionsLong = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var optionsShort = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  if (longitud === 1) {
    return event.toLocaleDateString("es-ES", optionsLong);
  }

  return event.toLocaleDateString("es-ES", optionsShort);
}

function obtenerNombreDia(ano, mes, dia, longitud) {
  var event = new Date(Date.UTC(ano, mes - 1, dia, 0, 0, 0));
  var optionsLong = {
    weekday: "long",
  };
  var optionsShort = {
    weekday: "short",
  };

  if (longitud === 1) {
    return event.toLocaleDateString("es-ES", optionsLong);
  }

  return event.toLocaleDateString("es-ES", optionsShort);
}

let pages = "";
let days = "";

var ano = new Date().getFullYear();

for (let mes = 1; mes <= 12; mes++) {
  pages += '<page size="A5">';
  pages += '<div class="sheet">';
  pages += "<h1>" + obtenerNombreMes(mes) + " > " + ano + "</h1>";
  pages += '<div class="polcadot title">';
  pages += '<div class="verticalMesA5">';
  pages += '<div class="diasMesA5">';
  pages +=
    "<div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div><div>D</div>";

  let posicionDia = 0;

  var arr = new Map([
    ["lun", "0"],
    ["mar", "1"],
    ["mié", "2"],
    ["jue", "3"],
    ["vie", "4"],
    ["sáb", "5"],
    ["dom", "6"],
  ]);

  var res = arr.get(obtenerNombreDia(ano, mes, 1, 0));
  if (res > 0) {
    for (var esp = 0; esp < res; esp++) {
      days += "<div></div>";
    }
  }

  for (let dia = 1; dia <= diasDelMesYAnoActual(mes); dia++) {
    var nombreDia = obtenerNombreDia(ano, mes, dia, 0);
    var classW = "";
    if ((nombreDia === "sáb") | (nombreDia === "dom")) {
      classW = "weekend";
    }

    days += '<div class="' + classW + '">' + dia + "</div>";
  }

  pages += days;

  pages += "</div></div></div></div></page>";

  days = "";
}

/* <page size="A5">
  <div class="sheet">
    <h1>Enero</h1>
    <div class="polcadot title">
      <div class="verticalMesA5">
        <div class="diasMesA5">
         
        </div>
      </div>
    </div>
  </div>
</page>; */

document.getElementById("pagesMes").innerHTML = pages;

pages = "";
days = "";

for (let mes = 1; mes <= 12; mes++) {
  pages +=
    '<page size="A5"><div class="sheet"><h1>' +
    obtenerNombreMes(mes) +
    " > " +
    ano +
    '</h1><div class=" title">';

  days += '<div class="container">';
  for (let dia = 1; dia <= diasDelMesYAnoActual(mes); dia++) {
    var nombreDia = obtenerNombreDia(ano, mes, dia, 0);
    var classW = "";
    if ((nombreDia === "sáb") | (nombreDia === "dom")) {
      classW = "weekend";
    }

    days +=
      '<div class="item ' + classW + '">' + dia + " > " + nombreDia + "</div>";
  }

  days += "</div>";

  pages += days;

  pages += "</div></div></page>";

  days = "";
}

document.getElementById("pages").innerHTML = pages;
