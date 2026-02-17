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




function ToggleSideBar() {
  SideBar.classList.toggle("None");
}


class SideBarElement extends HTMLElement {
  connectedCallback() {
    const Selected = this.getAttribute("selected");
    this.innerHTML = `
      <div class="Side-Bar" id="Side-Bar"><br>
        <div class="Row">
          <img src="/Images/Favicon.png" width="40">
          <h2>Yinix</h2>
        </div><br>
        <a href="./index.html"><button ${Selected === "Home" && "class='Yinix'"}><i class="ph-bold ph-house-simple"></i><p>Home</p></button></a>
        <a href="./Tools.html"><button ${Selected === "Tools" && "class='Yinix'"}><i class="ph-bold ph-pencil-ruler"></i><p>Tools</p></button></a>
        <a href="#"><button ${Selected === "Your-Work" && "class='Yinix'"}><i class="ph-bold ph-clipboard-text"></i><p>Your Work</p></button></a>
        <a href="#"><button ${Selected === "Settings" && "class='Yinix'"}><i class="ph-bold ph-gear-six"></i><p>Settings</p></button></a>
      </div>
      <!-- <button id="Side-Bar-Button" class="White-Button Outline-Shadow" onclick="ToggleSideBar()"><i class="ph-bold ph-list"></i></button> -->
    `;
  }
}
class TopBarElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="Top-Bar" class="Top-Bar">
        <button class="White-Button" onclick="ToggleSideBar()"><i class="ph-bold ph-list"></i></button>
        <img id="Account-Picture" class="Account-Picture" src="./Images/Favicon BG.png">
      </nav>
    `;
  }
}

class WhiteboardTool extends HTMLElement {
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

class AttendanceSelect extends HTMLElement {
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
  Root.classList.toggle("Dark");
}





var IsSignedIn = false;