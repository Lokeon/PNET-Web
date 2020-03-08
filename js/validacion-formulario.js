function validateInput()
{
    var regex = "^[a-zA-Z\s]*$";
    var name = document.forms[0].forNombre.value;
    var lastname = document.forms[0].forApellidos.value;

    if(name == name.match(regex) && lastname == lastname.match(regex))
    {
        alert("Validacion Perfe");
        return true;
    }
    else
    {
        alert("mal crack");
        return false;
    }

    return true
}