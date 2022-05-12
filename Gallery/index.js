document.querySelector("button").addEventListener("click", function () {
  const username = document.getElementById("Email1").value;
  const password = document.getElementById("Password1").value;
  if (username != "admin@gmail.com" || password != "admin") {
    alert("Username atau Password yang anda masukkan salah.");
  }
});
