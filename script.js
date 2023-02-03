function log() {
  const text = document.getElementById("text").value;
  const pass = document.getElementById("pass").value;
  if (text === "admin" && pass === "admin") {
    alert("successfull");
    location.href = "home.html";
  } else {
    alert("denied");
  }
}
