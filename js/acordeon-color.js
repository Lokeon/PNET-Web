var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  switch (acc[i].id) {
    case "acordeon1":
      acc[i].appendChild(
        ".accordion:hover { background-color: #4D7C8A; color: white;}"
      );
      break;
    case "acordeon2":
      acc[i].appendChild(
        ".accordion:hover { background-color: #D8AC34; color: white;}"
      );
      break;
  }
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    switch (acc[i].id) {
      case "acordeon1":
        acc[i].style.backgroundColor = "#4D7C8A";
        break;
      case "acordeon2":
        acc[i].style.backgroundColor = "#D8AC34";
        break;
    }
  });
}
