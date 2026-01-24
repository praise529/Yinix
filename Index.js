const Signup_Name = document.getElementById("Signup_Name");
const Signup_Email = document.getElementById("Signup_Email");
const Signup_Password = document.getElementById("Signup_Password");
const Signup_Age = document.getElementById("Signup_Age");
const Role = document.getElementById("Role");

const Video_Box = document.getElementById("Video_Box");
const Video_Button = document.getElementById("Video_Button");
const Webcam_Video = document.querySelector("#Webcam_Video");

const Side_Bar = document.getElementById("Side_Bar");


async function Start_Video() 
{
  navigator.mediaDevices.getUserMedia({ video: true })
  .then((Stream) => {
    Webcam_Video.srcObject = Stream;
  })
  .catch((Err) => {
    console.error(Err);
  });
}

async function Toggle_Video() {
  const Stream = Webcam_Video.srcObject;

  if (Stream) {
    Stream.getTracks().forEach(Track => Track.stop());
    Webcam_Video.srcObject = null;
    Video_Button.innerHTML = `
    <span class="material-symbols-rounded">videocam_off</span>Video Off
    `;
  } else {
    await Start_Video();
    Video_Button.innerHTML = `
    <span class="material-symbols-rounded">videocam</span> Video On
    `;
  }
}




function Toggle_Side_Bar() {
  Side_Bar.classList.toggle("Expanded");
}


class SideBar extends HTMLElement {
  connectedCallback() {
    const Selected = this.getAttribute("Selected");
    this.innerHTML = `
      <div class="Side_Bar" id="Side_Bar">
        <a href="./index.html"><button ${Selected === "Home" && "class='Yinix'"}><i class="ph-bold ph-house-simple"></i><p>Home</p></button></a>
        <a href="./Tools.html"><button ${Selected === "Tools" && "class='Yinix'"}><i class="ph-bold ph-pencil-ruler"></i><p>Tools</p></button></a>
        <a href="#"><button ${Selected === "Your_Work" && "class='Yinix'"}><i class="ph-bold ph-clipboard-text"></i><p>Your Work</p></button></a>
        <a href="#"><button ${Selected === "Account" && "class='Yinix'"}><i class="ph-bold ph-user"></i><p>Account</p></button></a>
      </div>
    `;
  }
}

class Whiteboard_Tool extends HTMLElement {
  connectedCallback() {
    const Name = this.getAttribute("name");
    const Icon = this.getAttribute("icon");
    const Active = this.getAttribute("active");
    const Click_Event = this.getAttribute("click");

    this.innerHTML = `
        <div class="${Active && "Active"} Tool" data-Tool="${Name}" title="${Name}" ${Click_Event && `onclick="${Click_Event}"`}>
          <i class="ph-bold ph-${Icon}"></i>
        </div>
    `;
  }
}

customElements.define("side-bar", SideBar);
customElements.define("whiteboard-tool", Whiteboard_Tool);





var Yinix_Tool = document.querySelector(".Whiteboard_Area .Whiteboard_Tools .Tool.Active")
.getAttribute("data-Tool");

const Whiteboard = document.getElementById("Whiteboard");
const Pen_Cursor = document.getElementById("Pen_Cursor");
const Whiteboard_Tools = document.querySelectorAll(".Whiteboard_Area .Whiteboard_Tools .Tool");

Pen_Cursor.style.display = "none";

function Activate_Tool() {
  if (Yinix_Tool === "Pen") {
    Activate_Pen();
  } else {
    Deactivate_All();
  }
}

Whiteboard_Tools.forEach(Tool => {
  Tool.addEventListener("click", () => {
    Whiteboard_Tools.forEach(Tool => Tool.classList.remove("Active"));
    Tool.classList.add("Active");
    Yinix_Tool = Tool.getAttribute("data-Tool");

    Activate_Tool();
  });
});

function Activate_Pen() {
  Whiteboard.style.cursor = "none";
  Pen_Cursor.style.display = "block";
}

function Deactivate_All() {
  Pen_Cursor.style.display = "none";
}

Activate_Tool();

window.addEventListener("mousemove", (E) => {
  Pen_Cursor.style.left = E.clientX + "px";
  Pen_Cursor.style.top = E.clientY + "px";
});