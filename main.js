const btn = document.querySelector(".searchBar");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
  input.classList.toggle("active");
  input.focus();
  input.value = "";
});
