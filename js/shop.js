// Opens a modal for the product you clicked on
function openModal(id) {
  var modal = document.getElementById("modal");
  var content = document.getElementById("content");
  var span = document.getElementsByClassName("close")[0];
  var details = document.getElementById("detail");
  var name = "";
  var text = "";
  var img = "";

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
  if (id == "test1") {
    name = "Regular";
    text =
      "The everyday regular food box offers both classic and exciting new dishes made with local, in-season ingredients. You can choose from 2-5 portions per serving between 20+ recipes each week. With the box comes the Smaksak app, monthly playlists and other surprises as well as a special invitation to the ambience lives.";
    img = "../images/smaksakbox1.png";
  } else if (id == "test2") {
    name = "This is test 2";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  } else if (id == "test3") {
    name = "This is test 3";
    text =
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
    img = "../images/smaksakbox1.png";
  }

  // Add modal-content html
  content.insertAdjacentHTML(
    "beforeend",
    "<div id='product'>" +
      "<div style='float: left; width: 25vw; padding: 1vw;'>" +
      "<h1>" +
      name +
      "</h1>" +
      "<p>" +
      text +
      "</p>" +
      "</div>" +
      "<div style='float:left; padding: 1vw;'>" +
      "<img src='" +
      img +
      "' style='width: 20vw;' />" +
      "</div>" +
      "<div style='padding: 1vw;'>" +
      "<button><h3>Pick your plan</h3></button>" +
      "</div>" +
      "</div>"
  );
}

// Goes to the plan page and selects this box
function chooseBox(id) {}
