
const darkBtn = document.querySelector(".toggler-dark");
const lightBtn = document.querySelector(".toggler-light");

lightBtn.addEventListener("click", setLightMode);
darkBtn.addEventListener("click", setDarkMode);

function setDarkMode() {
    setTheme("dark")
}
function setLightMode() {
    setTheme("light")
}

function setTheme(newTheme) {
    document.documentElement.setAttribute("data-theme",newTheme);
    localStorage.setItem("theme",newTheme)
}