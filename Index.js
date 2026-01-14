const Signup_Name = document.getElementById("Signup_Name");
const Signup_Email = document.getElementById("Signup_Email");
const Signup_Password = document.getElementById("Signup_Password");
const Signup_Age = document.getElementById("Signup_Age");
const Role = document.getElementById("Role");



const Video_Box = document.getElementById("Video_Box");
const Video_Button = document.getElementById("Video_Button");
const Webcam_Video = document.querySelector("#Webcam_Video");

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

Start_Video();