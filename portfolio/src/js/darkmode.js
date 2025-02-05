document.addEventListener("DOMContentLoaded", function () {
  const elements = {
    themeToggleBtn: document.getElementById("toggle-btn"),
    themeStyleLink: document.getElementById("theme-style"),
    themeIcon: document.getElementById("theme-icon")
  };

  if (!elements.themeStyleLink || !elements.themeToggleBtn || !elements.themeIcon) {
    console.error("Required theme elements not found!");
    return;
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  elements.themeToggleBtn.addEventListener("click", () => {
    const currentTheme = elements.themeStyleLink.getAttribute("href").includes("dark") ? "light" : "dark";
    setTheme(currentTheme);
  });

  function setTheme(theme) {
    elements.themeStyleLink.setAttribute("href", 
      theme === "dark" ? "./src/css/styles.css" : "./src/css/styles.css"
    );
    elements.themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("darkmode", theme === "dark");
  }
});