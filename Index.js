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

customElements.define("side-bar", SideBar);