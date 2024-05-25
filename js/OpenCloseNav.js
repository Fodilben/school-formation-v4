function openNav() {
  const navContainer = document.getElementById("nav-container");
  const openButton = document.getElementById("openbtn");
  const closeButton = document.getElementById("closebtn");

  navContainer.style.width = "300px";
  openButton.style.display = "none";
  closeButton.style.display = "block";
}

function closeNav() {
  const navContainer = document.getElementById("nav-container");
  const openButton = document.getElementById("openbtn");
  const closeButton = document.getElementById("closebtn");

  navContainer.style.width = "0";
  openButton.style.display = "block";
  closeButton.style.display = "none";
}
