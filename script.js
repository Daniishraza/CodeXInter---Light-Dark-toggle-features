const btn = document.querySelector(".btn");
const container = document.querySelector(".container");


function updateTheme(mode) {
    if (mode === "dark") {
        container.style.backgroundColor = "black";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        btn.innerText = "Dark";
    } else {
        container.style.backgroundColor = "white";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.innerText = "Light";
    }
}


let currentMode = localStorage.getItem("mode") || "light";
updateTheme(currentMode);
btn.addEventListener("click", (e) => {
    e.preventDefault();


    if (btn.innerText === "Light") {
        currentMode = "dark";
    } else {
        currentMode = "light";
    }


    updateTheme(currentMode);
    localStorage.setItem("mode", currentMode);
});
