function fun( temp ) {

var modal = document.getElementById("myModal");

// Get the button that opens the modal
if( temp == 1 ){
var btn = document.getElementById("del-btn-1");
}
else if( temp == 2 ){
    var btn = document.getElementById("del-btn-2");
}
else if( temp == 3 ){
    var btn = document.getElementById("del-btn-3");
}
else if( temp == 4 ){
    var btn = document.getElementById("del-btn-4");
}
else if( temp == 5 ){
    var btn = document.getElementById("del-btn-5");
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }


} 

}
