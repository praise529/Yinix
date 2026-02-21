const SignupName = document.getElementById("SignupName");
const SignupEmail = document.getElementById("SignupEmail");
const SignupPassword = document.getElementById("SignupPassword");
const SignupAge = document.getElementById("SignupAge");
const Role = document.getElementById("Role");

const VideoBox = document.getElementById("VideoBox");
const VideoButton = document.getElementById("VideoButton");
const WebcamVideo = document.querySelector("#WebcamVideo");

const SideBar = document.querySelector("side-bar");

const Root = document.documentElement;
var Mode = localStorage.getItem("Yinix-Mode") || "White";

if (Mode === "White") {
  Root.classList.remove("Dark");
} else {
  Root.classList.add("Dark");
}

async function StartVideo() 
{
  navigator.mediaDevices.getUserMedia({ video: true })
  .then((Stream) => {
    WebcamVideo.srcObject = Stream;
  })
  .catch((Err) => {
    console.error(Err);
  });
}

async function ToggleVideo() {
  const Stream = WebcamVideo.srcObject;

  if (Stream) {
    Stream.getTracks().forEach(Track => Track.stop());
    WebcamVideo.srcObject = null;
    VideoButton.innerHTML = `
    <span class="material-symbols-rounded">videocamoff</span>Video Off
    `;
  } else {
    await StartVideo();
    VideoButton.innerHTML = `
    <span class="material-symbols-rounded">videocam</span> Video On
    `;
  }
}




function ToggleSideBar()
{
  SideBar.classList.toggle("None");
}


class SideBarElement extends HTMLElement
{
  connectedCallback() {
    const Selected = this.getAttribute("selected");
    this.innerHTML = `
      <div class="Side-Bar" id="Side-Bar"><br>
        <button class="White-Button" id="Side-Bar-Close-Button" onclick="CloseSideBar()"><i class="ph-bold ph-x-circle"></i></button>
        <a href="/index.html" class="Row" style="cursor: pointer; user-select: none; text-decoration: none;">
          <img src="/Images/Favicon.png" width="40">
          <h2>Yinix</h2>
        </a><br>
        <a href="./index.html"><button ${Selected === "Home" && "class='Yinix'"}><i class="ph-bold ph-house-simple"></i><p>Home</p></button></a>
        <a href="#"><button class="Dropdown" id="Classes-Dropdown" onclick="ToggleClassesDropdown()">
          <i class="ph-bold ph-chalkboard-simple"></i><p>Classes</p>
          <i class="ph-bold ph-caret-down Dropdown-Arrow"></i>
        </button></a>
        <div class="Classes-Dropdown-Items" id="Classes-Dropdown-Items"></div>
        <a href="./Tools.html"><button ${Selected === "Tools" && "class='Yinix'"}><i class="ph-bold ph-pencil-ruler"></i><p>Tools</p></button></a>
        <a href="#"><button ${Selected === "Your-Work" && "class='Yinix'"}><i class="ph-bold ph-clipboard-text"></i><p>Your Work</p></button></a>
        <a href="/Settings.html"><button ${Selected === "Settings" && "class='Yinix'"}><i class="ph-bold ph-gear-six"></i><p>Settings</p></button></a>
      </div>
      <div class="Side-Bar-Backdrop Hidden"></div>
    `;
  }
}
class TopBarElement extends HTMLElement
{
  connectedCallback() {
    this.innerHTML = `
      <nav id="Top-Bar" class="Top-Bar">
        <button class="White-Button" onclick="OpenSideBar()" style="border: none; font-size: 1.5rem; background: var(--Main-White-1);" onclick="ToggleSideBar()"><i class="ph-bold ph-list"></i></button>
        <img id="Account-Picture" class="Account-Picture" src="/Images/Favicon BG.png">
      </nav>
    `;
  }
}

class WhiteboardTool extends HTMLElement
{
  connectedCallback() {
    const Name = this.getAttribute("name");
    const Icon = this.getAttribute("icon");
    const Active = this.getAttribute("active");
    const ClickEvent = this.getAttribute("click");

    this.innerHTML = `
        <div class="${Active && "Active"} Tool" data-Tool="${Name}" title="${Name}" ${ClickEvent && `onclick="${ClickEvent}"`}>
          <i class="ph-bold ph-${Icon}"></i>
        </div>
    `;
  }
}

class AttendanceSelect extends HTMLElement
{
  connectedCallback() {
    this.innerHTML = `
      <select>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Late">Late</option>
      </select>
    `;
  }
}

customElements.define("top-bar", TopBarElement);
customElements.define("side-bar", SideBarElement);
customElements.define("whiteboard-tool", WhiteboardTool);
customElements.define("attendance-select", AttendanceSelect);





function Theme() {
  const NewMode = Mode === "White" ? "Black" : "White";
  Root.classList.toggle("Dark");
  localStorage.setItem("Yinix-Mode", NewMode)
}







var IsSignedIn = false;
var SideBarOpen = true;
var ClassesDropdownOpen = true;
const SideBarBackdrop = document.querySelector(".Side-Bar-Backdrop");
const ClassesDropdown = document.getElementById("Classes-Dropdown");
const SideBarCloseButton = document.querySelector("#Side-Bar-Close-Button");
const ClassesDropdownItems = document.getElementById("Classes-Dropdown-Items");
const ClassesDropdownIcon = document.querySelector("#Classes-Dropdown .Dropdown-Arrow");

ClassesDropdownItems.classList.add("Hidden");

fetch("http://localhost:1100/API/Accounts/695e6739da8c72da1206c85e/Classrooms")
.then((Json) => { return Json.json() })
.then((Data) => {
    ClassesDropdownItems.innerHTML = "";
    Data.Classrooms.forEach(Class => {
      ClassesDropdownItems.innerHTML += `
        <a href="#"><button class="Classes-Dropdown-Item">
          <!-- <i class="ph-bold ph-chalkboard-simple"></i> -->
          <p>${Class.Name}</p>
        </button></a>
      `;
    });
})
.catch((Err) => console.error(Err));

function ToggleClassesDropdown() {
  ClassesDropdownItems.classList.toggle("Hidden");
  ClassesDropdownIcon.classList.toggle("ph-caret-down");
  ClassesDropdownIcon.classList.toggle("ph-caret-up");
}

function OpenSideBar() {
  SideBar.classList.remove("Hidden");
  SideBar.classList.add("Open");
  SideBarBackdrop.classList.remove("Hidden");
}
function CloseSideBar() {
  SideBar.classList.add("Hidden");
  SideBar.classList.remove("Open");
  SideBarBackdrop.classList.add("Hidden")
}
function ClickOutsideSideBar(E) {
  if (SideBarBackdrop.contains(E.target)) {
    CloseSideBar();
  }
}

if (window.innerWidth >= 640) {
  SideBar.classList.remove("Open")
  SideBar.classList.remove("Hidden");
} else if (window.innerWidth < 640) {
  SideBar.classList.add("Hidden");
  
}

function HandleResize() {
  if (window.innerWidth >= 640) {
    SideBar.classList.remove("Open");
    SideBar.classList.remove("Hidden");
    SideBarBackdrop.classList.add("Hidden");
    SideBarCloseButton.classList.add("Hidden");
    window.removeEventListener("mousedown", ClickOutsideSideBar);
  } else {
    SideBar.classList.add("Hidden");
    window.addEventListener("mousedown", ClickOutsideSideBar);
  }
}

HandleResize();
window.addEventListener("resize", HandleResize);