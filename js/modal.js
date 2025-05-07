function alertString(text) {
  document.getElementById("alertModule").style.display = "block";
  document.getElementById("alertModuleText").innerHTML = text;
  document.getElementById("popUp").style.display = "block";
}
document.getElementById("closeAlert").onclick = function () {
  document.getElementById("alertModule").style.display = "none";
  document.getElementById("popUp").style.display = "none";
}