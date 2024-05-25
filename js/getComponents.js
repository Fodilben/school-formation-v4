const headerContainer = document.getElementById("header-container");
const navContainer = document.getElementById("nav-container");

async function loadHTML(filePath, container) {
  try {
    const response = await fetch(filePath);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

loadHTML("./header.html", headerContainer);
loadHTML("./sideBar.html", navContainer);
