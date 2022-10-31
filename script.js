const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const git = document.getElementById("git");

const htmlTxt = document.getElementById("html-txt");
const cssTxt = document.getElementById("css-txt");
const jsTxt = document.getElementById("js-txt");
const gitTxt = document.getElementById("git-txt");

//Mouseover Tab
html.addEventListener("mouseover", () => {
  htmlTxt.classList.add("active");
});

html.addEventListener("mouseout", () => {
  htmlTxt.classList.remove("active");
});

css.addEventListener("mouseover", () => {
  cssTxt.classList.add("active");
});

css.addEventListener("mouseout", () => {
  cssTxt.classList.remove("active");
});

js.addEventListener("mouseover", () => {
  jsTxt.classList.add("active");
});

js.addEventListener("mouseout", () => {
  jsTxt.classList.remove("active");
});

git.addEventListener("mouseover", () => {
  gitTxt.classList.add("active");
});

git.addEventListener("mouseout", () => {
  gitTxt.classList.remove("active");
});
