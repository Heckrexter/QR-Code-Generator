const baseurl = "https://api.qrserver.com/v1/create-qr-code/";
const image = document.getElementById("qrpic");

let maina = document.getElementsByClassName("main")[0];

function generate() {
    let test = document.getElementById("dinput").value;
    if (test == "") {
        image.src = "/api.qrserver.png";
        return;
    }
    let finalurl = `${baseurl}?data=${test}&bg-color=[240-248-255]`;
    console.log(finalurl);
    image.src = finalurl;
}