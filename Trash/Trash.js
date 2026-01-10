// Enable pencil
function Pencil() {
    Whiteboard.addEventListener("mousedown", StartWriting);
    Whiteboard.addEventListener("mousemove", Write);
    Whiteboard.addEventListener("mouseup", StopWriting);
    Whiteboard.addEventListener("mouseleave", StopWriting);
    Whiteboard.addEventListener("touchstart", StartWriting_Touch);
    Whiteboard.addEventListener("touchmove", Write_Touch);
    Whiteboard.addEventListener("touchend", StopWriting);

}

// Disable pencil
function RemovePencil() {
    Whiteboard.removeEventListener("mousedown", StartWriting);
    Whiteboard.removeEventListener("mousemove", Write);
    Whiteboard.removeEventListener("mouseup", StopWriting);
    Whiteboard.removeEventListener("mouseleave", StopWriting);
    Whiteboard.removeEventListener("touchstart", StartWriting_Touch);
    Whiteboard.removeEventListener("touchmove", Write_Touch);
    Whiteboard.removeEventListener("touchend", StopWriting);

}

function StartWriting(e) {
    const rect = Whiteboard.getBoundingClientRect();
    PastX = e.clientX - rect.left;
    PastY = e.clientY - rect.top;

    Writing = true;

    Whiteboard_Context.beginPath();
    Whiteboard_Context.moveTo(PastX, PastY);
}

function Write(e) {
    if (!Writing) return;

    Marker_Colour.addEventListener("change", () => {
        Whiteboard_Context.strokeStyle = Marker_Colour_Value;

        if (Whiteboard_Context.strokeStyle !== Marker_Colour_Value) {
            Whiteboard_Context.strokeStyle = Marker_Colour_Value;
        }
    });

    const rect = Whiteboard.getBoundingClientRect();
    const X = e.clientX - rect.left;
    const Y = e.clientY - rect.top;

    Whiteboard_Context.lineTo(X, Y);
    Whiteboard_Context.stroke();

    PastX = X;
    PastY = Y;
}

function StopWriting() {
    Writing = false;
    Whiteboard_Context.closePath();
}

function ResizeCanvas() {
    // Save current drawing
    const temp = document.createElement("canvas");
    temp.width = Whiteboard.width;
    temp.height = Whiteboard.height;
    temp.getContext("2d").drawImage(Whiteboard, 0, 0);

    // Apply new size
    Whiteboard.width = Whiteboard.clientWidth;
    Whiteboard.height = Whiteboard.clientHeight;

    if (Whiteboard_Context.strokeStyle !== Marker_Colour_Value || Whiteboard_Context.lineWidth !== 10
        || Whiteboard_Context.lineCap !== "round" || Whiteboard_Context.lineJoin !== "round") {
        Whiteboard_Context.strokeStyle = Marker_Colour_Value;
        Whiteboard_Context.lineWidth = 10;
        Whiteboard_Context.lineCap = "round";
        Whiteboard_Context.lineJoin = "round";
    }

    Marker_Colour.addEventListener("change", () => {
        Whiteboard_Context.strokeStyle = Marker_Colour_Value;

        if (Whiteboard_Context.strokeStyle !== Marker_Colour_Value) {
            Whiteboard_Context.strokeStyle = Marker_Colour_Value;
        }
    });

    // Restore drawing
    Whiteboard_Context.drawImage(temp, 0, 0);
}

function StartWriting_Touch(e) {
    e.preventDefault(); // stop scrolling
    const rect = Whiteboard.getBoundingClientRect();

    const touch = e.touches[0];
    PastX = touch.clientX - rect.left;
    PastY = touch.clientY - rect.top;

    Writing = true;
    Whiteboard_Context.beginPath();
    Whiteboard_Context.moveTo(PastX, PastY);
}

function Write_Touch(e) {
    if (!Writing) return;
    e.preventDefault();

    const rect = Whiteboard.getBoundingClientRect();
    const touch = e.touches[0];

    const X = touch.clientX - rect.left;
    const Y = touch.clientY - rect.top;

    Whiteboard_Context.lineTo(X, Y);
    Whiteboard_Context.stroke();

    PastX = X;
    PastY = Y;
}

// // <canvas class="Whiteboard" id="Whiteboard">
// <div id="Text_Blocks"></div>
//             </canvas >

Whiteboard_Context.strokeStyle = Marker_Colour_Value;
Whiteboard_Context.lineWidth = 10;
Whiteboard_Context.lineCap = "round";
Whiteboard_Context.lineJoin = "round";
Whiteboard.width = Whiteboard.clientWidth;
Whiteboard.height = Whiteboard.clientHeight;



if (Whiteboard_Context.strokeStyle !== Marker_Colour_Value || Whiteboard_Context.lineWidth !== 10
    || Whiteboard_Context.lineCap !== "round" || Whiteboard_Context.lineJoin !== "round") {
    Whiteboard_Context.strokeStyle = Marker_Colour_Value;
    Whiteboard_Context.lineWidth = 10;
    Whiteboard_Context.lineCap = "round";
    Whiteboard_Context.lineJoin = "round";
}

console.log(Marker_Colour_Value, " ", Whiteboard_Context.strokeStyle, " - ", Whiteboard_Context.lineWidth)



// Set marker color
if (!Marker_Colour_Value) {
    console.warn(`Color_Creator not found... instead got ${Marker_Colour_Value}`);
}

Marker_Colour.addEventListener("change", () => {
    Whiteboard_Context.strokeStyle = Marker_Colour_Value;

    if (Whiteboard_Context.strokeStyle !== Marker_Colour_Value) {
        Whiteboard_Context.strokeStyle = Marker_Colour_Value;
    }
});


const Whiteboard = document.getElementById("Whiteboard");
Whiteboard.classList.remove("Pen");

const WhiteboardTools = document.querySelectorAll(
    ".Whiteboard_Area .Whiteboard_Tools .Tool"
);


WhiteboardTools.forEach(Tool => {
    Tool.addEventListener("click", () => {
        const Type = Tool.getAttribute("data-Tool");
        ClearWhiteboardTools();
        Tool.classList.add("Active");

        console.log(Type);

        if (Type === "Pencil") {
            Whiteboard.classList.add("Pencil");
        } else if (Type === "Text") {
            Whiteboard.classList.remove("Pencil");
        }
    });
    if (Tool.classList.contains("Active")) {
        const Type = Tool.getAttribute("data-Tool");
        if (Type === "Pencil") {
            Whiteboard.classList.add("Pencil");
        }
    }
})

function ClearWhiteboardTools() {
    WhiteboardTools.forEach(Tool => {
        Tool.classList.remove("Active");
    });
}


const TextBlocks = document.querySelectorAll(".Whiteboard_Area .Whiteboard .Text");

function CreateTextBlock() {
    Whiteboard.innerHTML += `<div class="Text" contenteditable="true">Text</div>`;
}

TextBlocks.forEach(TextBlock => {
    console.log(TextBlock);
    TextBlock.addEventListener("click", (E) => {
        if (E.shiftKey) {
            TextBlock.style.resize = "horizontal";
        } else {
            TextBlock.style.resize = "both";
        }
    });
    TextBlock.addEventListener("keypress", (E) => {
        if (E.key == "delete") {
            console.log(TextBlock)
        }
    });
});