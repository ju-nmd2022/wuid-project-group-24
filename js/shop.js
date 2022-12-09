// Opens a modal for the product you clicked on
function openModal(id) {
  var modal = document.getElementById("modal");
  var content = document.getElementById("content");
  var span = document.getElementsByClassName("close")[0];
  var details = document.getElementById("detail");
  var id = id;
  var name = "";
  var text = "";
  var img = "";
  let width = window.innerWidth;

  // Display modal
  modal.style.display = "block";

  // Remove previously added html to the modal-content
  details.remove();

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.animation = "modalclose 0.4s infinite";
    setTimeout(function () {
      modal.style.animation = "idle 0s infinite";
      modal.style.display = "none";
    }, 395);
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.animation = "modalclose 0.4s infinite";
      setTimeout(function () {
        modal.style.animation = "idle 0s infinite";
        modal.style.display = "none";
      }, 395);
    }
  };

  // Change text and image depending on which icon was clicked
  // The id is the id of the image you click
  // Name is the name of the box
  // Text is the product description
  // img is the image url
  if (id == "regular") {
    name = "The regular box";
    text =
      "The everyday regular food box offers both classic and exciting new dishes made with local, in-season ingredients. You can choose from 2-5 portions per serving between 20+ recipes each week. With the box comes the Smaksak app, monthly playlists and other surprises as well as a special invitation to the ambience lives.";
    img = "../images/smaksakbox1.png";
  } else if (id == "vegetarian") {
    name = "The vegetarian box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "vegan") {
    name = "The vegan box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "family") {
    name = "The family box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "allergy-friendly") {
    name = "The allergy friendly box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "premium") {
    name = "The premium box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "pescetarian") {
    name = "The pescetarian box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "carnitarian") {
    name = "The carnitarian box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "low-carb") {
    name = "The low carb box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "holiday") {
    name = "The holiday box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "animal-friendly") {
    name = "The animal friendly box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "weekend") {
    name = "The weekend box";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  }

  // Add modal-content html
  // Phone version
  if (width < 1400) {
    content.insertAdjacentHTML(
      "beforeend",
      "<div id='detail' style='min-height: 80vh;'>" +
        "<img src='" +
        img +
        "' style='width: 50vw;' />" +
        "<h1>" +
        name +
        "</h1>" +
        "<p>" +
        text +
        "</p>" +
        "<br><br><br>" +
        "<button class='button' onClick=" +
        "chooseBox('" +
        id +
        "'); style='border-radius: 40px 10px;'><h2>Pick your plan</h2></button>" +
        "<h2 class='hide-phone'>Examples of recipes to chose from</h2>" +
        "<div class='recipes'>" +
        "<div>" +
        "<img src='../images/wild-rice-pilaf.jpg' />" +
        "<h3>Wild rice pilaf</h3>" +
        "</div>" +
        "<div>" +
        "<img src='../images/lentil-salad.jpg' />" +
        "<h3>Lentil sallad</h3>" +
        "</div>" +
        "<div>" +
        "<img src='../images/sofritas.jpg' />" +
        "<h3>Sofritas</h3>" +
        "</div>" +
        "<div>" +
        "<img src='../images/Roasted-VegetablesIMG_0415-760x1140.jpg' />" +
        "<h3>Roasted vegetables</h3>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
  } else {
    content.insertAdjacentHTML(
      "beforeend",
      "<div id='detail' style='min-height: 60vh;'>" +
        "<div style='float: left; clear: right; padding: 1vw; max-width: 30vw;'>" +
        "<h1>" +
        name +
        "</h1>" +
        "<p>" +
        text +
        "</p>" +
        "<br><br><br>" +
        "<button class='button' onClick=" +
        "chooseBox('" +
        id +
        "'); style='border-radius: 40px 10px;'><h2>Pick your plan</h2></button>" +
        "</div>" +
        "<div style='float:right; padding: 1vw;'>" +
        "<img src='" +
        img +
        "' style='width: 25vw;' />" +
        "</div>" +
        "<div class='recipes'>" +
        "<div style='width: 30vw;'><h2 class='hide-phone'>Examples of recipes to chose from</h2></div>" +
        "<div>" +
        "<img src='../images/wild-rice-pilaf.jpg' />" +
        "<h3>Wild rice pilaf</h3>" +
        "</div>" +
        "<div>" +
        "<img src='../images/lentil-salad.jpg' />" +
        "<h3>Lentil sallad</h3>" +
        "</div>" +
        "<div>" +
        "<img src='../images/sofritas.jpg' />" +
        "<h3>Sofritas</h3>" +
        "</div>" +
        "<div>" +
        "<img src='../images/Roasted-VegetablesIMG_0415-760x1140.jpg' />" +
        "<h3>Roasted vegetables</h3>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
  }
}

// Go to the process page and save the id
function chooseBox(id) {
  sessionStorage.setItem("boxplan", id);
  window.open("../html/process.html", "_self");
}

// Change image when hovering box
function changeImage(id, img) {
  document.getElementById(id).src = img;
}
