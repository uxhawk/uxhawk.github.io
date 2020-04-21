var theme = "light";
const htmlTag = document.getElementsByTagName("html")[0];
const themeBtn = document.getElementById("theme-btn");

function init() {
    var storedTheme = localStorage.getItem("theme");

    if (storedTheme !== null) {
        theme = storedTheme;
    }
    setStyle();
}

function storeTheme() {
    localStorage.setItem("theme", theme);
}

function setStyle() {
    if (theme === "light") {
        htmlTag.removeAttribute("data-theme");
        themeBtn.classList.add("far", "fa-moon");
        themeBtn.classList.remove("fas", "fa-sun");
    } else {
        htmlTag.setAttribute("data-theme", "dark");
        themeBtn.classList.remove("far", "fa-moon");
        themeBtn.classList.add("fas", "fa-sun");
    }
}

function toggleTheme() {
    if (theme === "light") {
        theme = "dark";

        storeTheme();
        setStyle();
    } else {
        theme = "light"

        storeTheme();
        setStyle();
    }
}

init();
$("#theme-btn").click(toggleTheme);