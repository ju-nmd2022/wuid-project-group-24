window.onload = function () {
  var id = sessionStorage.getItem("boxplan");
  var item = document.getElementById("item");
  var name = "";
  var img = "";
  var box = false;

  if (id != null) {
    box = true;
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
  }

  if (box == false) {
    item.insertAdjacentHTML(
      "beforeend",
      "<div style='text-align: center'>" +
        "<h2>You have not chosen a box</h2>" +
        "<p>Select a box on the shop page to view this page</p>" +
        "<a href='shop.html'><button class='button'><h3>Go to shop</h3></button></a>" +
        "</div>"
    );
  } else {
    item.insertAdjacentHTML(
      "beforeend",
      "<div class='divider'>" +
        "<h1 style='text-align: center'>You chose</h1>" +
        "</div>" +
        "<div class='flex'>" +
        "<div>" +
        "<img src=" +
        img +
        ">" +
        "</div>" +
        "<div>" +
        "<div class='divider'>" +
        "<h1>" +
        name +
        "</h1>" +
        "<p style='text-align: center'>Monthly subscription</p>" +
        "</div>" +
        "<div class='divider'>" +
        "<div class='flex'>" +
        "<div>" +
        "<p>How many people?</p>" +
        "<p>Shipping</p>" +
        "<p>Taxes</p>" +
        "</div>" +
        "<div>" +
        "<p>0</p>" +
        "<p>$$$</p>" +
        "<p>$$$</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='flex'>" +
        "<div>" +
        "<h2>Total</h2>" +
        "</div>" +
        "<div>" +
        "<p style='font-size: 2vw;'>$$$</p>" +
        "</div>" +
        "</div>" +
        "<div style='text-align: center;'>" +
        "<button class='button' style='width: 25vw; height: 10vh; border-radius: 20px;' onClick='checkout();'><h2>Continue to checkout</h2></button>" +
        "</div>"
    );
  }
};

function checkout() {
  alert("Thank you for your purchase!");
  sessionStorage.clear();
  location.reload();
}
