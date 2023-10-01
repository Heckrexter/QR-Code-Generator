const baseurl = "https://api.qrserver.com/v1/create-qr-code/";
const image = document.getElementById("qrpic");

let maina = document.getElementsByClassName("main")[0];

function generate() {
    // set propery to custom state "expanded" in css
    // maina.style.setState({ expand: true });
    maina.classList.toggle('showbord');
    let test = document.getElementById("dinput").value;
    if (test == "") {
        image.src = "/api.qrserver.png";
        return;
    }
    let finalurl = `${baseurl}?data=${test}&bg-color=[240-248-255]`;
    image.src = finalurl;
}