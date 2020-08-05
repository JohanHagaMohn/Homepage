window.addEventListener("DOMContentLoaded", () => {
    header = document.querySelector("#header").style;
    setTimeout(() => {
        header.opacity = "0";
        setTimeout(() => {
            header.display = "none";
        }, 1950);
    }, 50);
});
