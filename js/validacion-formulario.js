function validateInput() {
  var regex = "^[a-zA-Zs]*$";
  var name = document.forms[0].forNombre.value;
  var lastname = document.forms[0].forApellidos.value;

  if (name == name.match(regex) && lastname == lastname.match(regex)) {
    //alert("Validacion Perfe");
    return true;
  } else {
    //alert("mal crack");
    return false;
  }

  return true;
}

function validateDate() {
  var hoy = new Date();
  var fchIn = new Date(document.forms[0].fchIni.value);
  var fchFn = new Date(document.forms[0].fchFin.value);
  var fchHoy = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());

  if (fchHoy < fchIn) {
    if (fchHoy < fchFn) {
      if (fchIn <= fchFn) {
        alert("Esta correcto ");
        return true;
      } else {
        alert("Fecha Menor");
        return false;
      }
    } else {
      alert("Fecha Fin no es valida");
      return false;
    }
  } else {
    alert("Fecha Inicio no es valida");
    return false;
  }

  return true;
}
