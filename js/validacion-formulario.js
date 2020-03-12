
function validateForm() {
  var fchIn = new Date(document.forms[0].fchIni.value);
  var fchFn = new Date(document.forms[0].fchFin.value);

  if (fchIn >= fchFn) {
    alert("Rango de Fechas Incorrecto ");
    return false;
  }

  return true;
}

function minDateIni() {
  var hoy = new Date();
  var mes = hoy.getMonth() + 1;
  var dia = hoy.getDate();
  var year = hoy.getFullYear();

  if (mes < 10) {
    mes = "0" + mes.toString();
  }
  if (dia < 10) {
    dia = "0" + dia.toString();
  }

  var minDateIni = year + "-" + mes + "-" + dia;
  document.getElementById("fchIni").setAttribute("min", minDateIni);
}

function minDateFin() {
  var hoy = new Date();
  var mes = hoy.getMonth() + 1;
  var dia = hoy.getDate();
  var year = hoy.getFullYear();

  if (mes < 10) {
    mes = "0" + mes.toString();
  }
  if (dia < 10) {
    dia = "0" + dia.toString();
  }

  var minDateFin = year + "-" + mes + "-" + dia;
  document.getElementById("fchFin").setAttribute("min", minDateFin);
}

function validateName(input) {
  var regex = "^[a-zA-Zs]*$";
  var name = input.value;
  if (name != name.match(regex)) {
    input.setCustomValidity("Nombre Incorrecto");
  } else {
    input.setCustomValidity("");
  }
}

function validateLastName(input) {
  var regex = "^[a-zA-Zs]*$";
  var name = input.value;
  if (name != name.match(regex)) {
    input.setCustomValidity("Apellidos Incorrectos");
  } else {
    input.setCustomValidity("");
  }
}
