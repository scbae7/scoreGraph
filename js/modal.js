function alertString(text) {
  document.getElementById("alertModule").style.display = "block";
  document.getElementById("alertModuleText").innerHTML = text;
  document.getElementById("popUp").style.display = "block";
}
document.getElementById("closeAlert").onclick = function () {
  document.getElementById("alertModule").style.display = "none";
  document.getElementById("popUp").style.display = "none";
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // closeAlert 버튼 클릭한 것처럼 동작
    const closeBtn = document.getElementById("closeAlert");
    if (closeBtn) {
      closeBtn.click();
    }
  }
});