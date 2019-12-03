
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];


btn.onclick = function() {
  modal1.style.display = "block";
}
btn1.onclick = function() {
    modal2.style.display = "block";
    modal1.style.display = "none";
  }
btn2.onclick = function() {
    modal2.style.display = "none";
    modal1.style.display = "none";
  }

span1.onclick = function() {
  modal1.style.display = "none";
  
}
span2.onclick = function() {
    modal2.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal1 || event.target == this.modal2) {
    this.modal1.style.display = "none";
    this.modal2.style.display = "none";
  }
}