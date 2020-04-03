// Get accordion 1
var acc = document.getElementsByClassName("accordion");
// Get accordion 2
var acc1 = document.getElementsByClassName("accordion1");
// Get accordion 3
var acc2 = document.getElementsByClassName("accordion2");
var i;

// Triggers active when clicked for accordion 1
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Triggers active when clicked for accordion 2
for (i = 0; i < acc1.length; i++) {
  acc1[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Triggers active when clicked for accordion 3
for (i = 0; i < acc2.length; i++) {
  acc2[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
