const nav = document.querySelector("header nav");
const hamburguer = document.querySelector(".hamburguer i");
const mainInfo = document.querySelector(".main-info");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});