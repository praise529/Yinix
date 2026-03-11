const Root = document.documentElement;
var Theme = Root.classList.contains("Dark");

function SaveTheme(Theme: string | undefined) {
    if (typeof Theme === undefined) return;
    localStorage.setItem("Yinix-Theme", Theme || "Light");
}
function ToggleTheme() {
    Root.classList.toggle("Dark");
    SaveTheme(Root.classList.contains("Dark") ? "Dark" : "Light");
}
function SetTheme(Theme: string | undefined) {
    if (Theme === "Light") {
        Root.classList.remove("Dark");
    } else if (Theme === "Dark") {
        Root.classList.add("Dark")
    }
    SaveTheme(Theme);
}

function SetUpTheme() {
    const Theme = localStorage.getItem("Yinix-Theme");
    if (Theme === "Light") {
        Root.classList.remove("Dark");
    } else if (Theme === "Dark") {
        Root.classList.add("Dark");
    } else {
        Root.classList.remove("Dark");
    }
}

export { ToggleTheme, SetTheme, SetUpTheme, Root, Theme };