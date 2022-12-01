window.onload = function () {
  var id = sessionStorage.getItem("boxplan");
  var item = document.getElementById("item");
  var name = "";
  var img = "";

  if (id != null) {
    if (id == "regular") {
      // Regular
      name = "The regular box";
      img = "../images/smaksakbox1.png";
    } else if (id == "vegetarian") {
      // Vegetarian
      name = "The vegetarian box";
      img = "../images/smaksakbox1.png";
    } else if (id == "vegan") {
      // Vegan
      name = "The vegan box";
      img = "../images/smaksakbox1.png";
    } else if (id == "family") {
      // Family
      name = "The family box";
      img = "../images/smaksakbox1.png";
    } else if (id == "allergy-friendly") {
      // Allergy friendly
      name = "The allergy friendly box";
      img = "../images/smaksakbox1.png";
    } else if (id == "premium") {
      // Premium
      name = "The premium box";
      img = "../images/smaksakbox1.png";
    } else if (id == "pescetarian") {
      // Pescetarian
      name = "The pescetarian box";
      img = "../images/smaksakbox1.png";
    } else if (id == "carnitarian") {
      // Carnitarian
      name = "The carnitarian box";
      img = "../images/smaksakbox1.png";
    } else if (id == "low-carb") {
      // Low carb
      name = "The low carb box";
      img = "../images/smaksakbox1.png";
    } else if (id == "holiday") {
      // Holiday
      name = "The holiday box";
      img = "../images/smaksakbox1.png";
    } else if (id == "animal-friendly") {
      // Animal friendly
      name = "The animal friendly box";
      img = "../images/smaksakbox1.png";
    } else if (id == "weekend") {
      // Weekend
      name = "The weekend box";
      img = "../images/smaksakbox1.png";
    }

    item.insertAdjacentHTML(
      "beforeend",
      "<img src='" + img + "'>" + "<h1>" + name + "</h1>"
    );
  }
};
