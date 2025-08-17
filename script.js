function updateTime() {
  var TimeNow = new Date().toLocaleString();
  var TimeText = document.querySelector("#timeElement");
  TimeText.innerHTML = TimeNow;
}
setInterval(updateTime, 1000);

// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  const header = document.getElementById(element.id + "header");
  const dragTarget = header ? header : element;

  dragTarget.onmousedown = startDragging;

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();

    // Convert current position to pixels and remove transform
    const rect = element.getBoundingClientRect();
    element.style.top = rect.top + "px";
    element.style.left = rect.left + "px";
    element.style.transform = ""; // This is the key fix

    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = dragWindow;
  }

  function dragWindow(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomeScreen = document.querySelector("#welcome");

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "flex";

  // Reset position and transform every time
 
}

var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");

welcomeScreenClose.addEventListener("click", function () {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function () {
  location.reload();
});