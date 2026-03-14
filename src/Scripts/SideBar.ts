export var SideBarOpen: boolean = false;
export function OpenSideBar() {
    SideBarOpen = true;
    document.getElementById("Side-Bar")?.classList.add("Open");
    document.getElementById("Side-Bar-Backdrop")?.classList.add("Shown");
    document.getElementById("Side-Bar-Close-Button")?.classList.add("Shown");
}
export function CloseSideBar() {
    SideBarOpen = false;
    document.getElementById("Side-Bar")?.classList.remove("Open");
    document.getElementById("Side-Bar-Backdrop")?.classList.remove("Shown");
    document.getElementById("Side-Bar-Close-Button")?.classList.remove("Shown");
}