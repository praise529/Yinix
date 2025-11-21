const WhiteboardTools = document.querySelectorAll(
  ".Whiteboard_Area .Whiteboard_Tools .Tool"
);

WhiteboardTools.forEach(Tool => {
    Tool.addEventListener("click", () => {
        const Type = Tool.getAttribute("data-Tool");
        ClearWhiteboardTools();
        Tool.classList.add("Active");

        console.log(Type)
    });
})

function ClearWhiteboardTools() {
    WhiteboardTools.forEach(Tool => {
        Tool.classList.remove("Active");
    });
}