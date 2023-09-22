var length = document.querySelectorAll("#question").length;
for (let i = 0; i < length; i++) {
document.querySelectorAll("#question")[i].addEventListener("click", function () {
document.querySelectorAll(".answer")[i].classList.toggle("display");
document.querySelectorAll(".main")[i].classList.toggle("zoom-in-out-box");}
);}
