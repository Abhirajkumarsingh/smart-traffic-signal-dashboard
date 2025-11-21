const light = document.getElementById('light');
const signalStatus = document.getElementById('signal-status');
const detectionStatus = document.getElementById('detection-status');
const mainCamera = document.getElementById('main-camera');
const mainStatus = document.getElementById('main-status');
const feed2 = document.getElementById('feed2-img');
const feed3 = document.getElementById('feed3-img');

const images = [
  { src: "4.jpg", detected: false },
  { src: "1.jpeg", detected: true },
  { src: "2.jpg", detected: true },
  { src: "5.jpg", detected: false },
  { src: "3.jpg", detected: true },
  { src: "6.jpg", detected: false }
];

let index = 0;

function updateDashboard() {
  const current = images[index];
  const next1 = images[(index + 1) % images.length];
  const next2 = images[(index + 2) % images.length];

  // Main feed update
  mainCamera.src = current.src;
  if (current.detected) {
    mainStatus.textContent = "Ambulance Detected";
    mainStatus.className = "status detected";
    detectionStatus.textContent = "Ambulance Detected - Signal Turned Green";
    detectionStatus.className = "status detected";
    light.classList.add("green");
    signalStatus.innerHTML = 'Current: <strong style="color:#00c853">GREEN</strong>';
  } else {
    mainStatus.textContent = "No Ambulance Detected";
    mainStatus.className = "status not-detected";
    detectionStatus.textContent = "No Ambulance Detected";
    detectionStatus.className = "status not-detected";
    light.classList.remove("green");
    signalStatus.innerHTML = 'Current: <strong style="color:red">RED</strong>';
  }

  // Update additional camera feeds
  feed2.src = next1.src;
  feed3.src = next2.src;

  index = (index + 1) % images.length;
}

setInterval(updateDashboard, 3000);
updateDashboard();
