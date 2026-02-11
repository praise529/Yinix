const Signup_Name = document.getElementById("Signup_Name");
const Signup_Email = document.getElementById("Signup_Email");
const Signup_Password = document.getElementById("Signup_Password");
const Signup_Age = document.getElementById("Signup_Age");
const Role = document.getElementById("Role");

const Video_Box = document.getElementById("Video_Box");
const Video_Button = document.getElementById("Video_Button");
const Webcam_Video = document.querySelector("#Webcam_Video");

const Side_Bar = document.querySelector("side-bar .Side_Bar");


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
  Side_Bar.classList.toggle("None");
}


class SideBar extends HTMLElement {
  connectedCallback() {
    const Selected = this.getAttribute("Selected");
    this.innerHTML = `
      <div class="Side_Bar" id="Side_Bar">
        <a href="./index.html"><button ${Selected === "Home" && "class='Yinix'"}><i class="ph-bold ph-house-simple"></i><p>Home</p></button></a>
        <a href="./Tools.html"><button ${Selected === "Tools" && "class='Yinix'"}><i class="ph-bold ph-pencil-ruler"></i><p>Tools</p></button></a>
        <a href="#"><button ${Selected === "Your_Work" && "class='Yinix'"}><i class="ph-bold ph-clipboard-text"></i><p>Your Work</p></button></a>
        <a href="./Account.html"><button ${Selected === "Account" && "class='Yinix'"}><i class="ph-bold ph-user"></i><p>Account</p></button></a>
      </div>
      <button id="Side_Bar_Button" onclick="Toggle_Side_Bar()"><i class="ph-bold ph-list"></i></button>
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

class Attendance_Select extends HTMLElement {
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

customElements.define("side-bar", SideBar);
customElements.define("whiteboard-tool", Whiteboard_Tool);
customElements.define("attendance-select", Attendance_Select);











var Is_Signed_In = false;