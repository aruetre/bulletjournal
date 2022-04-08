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
  var event = new Date(Date.UTC(ano, (mes-1), dia, 0, 0, 0));
  var optionsLong = {
    weekday: "long"
  };
  var optionsShort = {
    weekday: "short"
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
  pages +=
    '<page size="A5"><div class="sheet"><h1>' +
    obtenerNombreMes(mes) +
    " > " +
    ano +
    '</h1><div class=" title">';

  days += "<div class=\"container\">";
  for (let dia = 1; dia <= diasDelMesYAnoActual(mes); dia++) {
    days += "<div class=\"item\">" + dia + " > " + obtenerNombreDia(ano,mes, dia, 0) + "</div>";
  }

  days += "</div>";

  pages += days;

  pages += "</div></div></page>";

  days = "";
}

document.getElementById("pages").innerHTML = pages;
