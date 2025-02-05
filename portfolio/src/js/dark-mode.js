document.addEventListener("DOMContentLoaded", () => {
  let darkMode = localStorage.getItem("darkMode");
  const themeSwitch = document.querySelector("#theme-switch");
  const moonIcon = '<i class="fas fa-moon"></i>';
  const sunIcon = '<i class="fas fa-sun"></i>';

  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "active");
    themeSwitch.innerHTML = sunIcon; // Show sun icon
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "inactive");
    themeSwitch.innerHTML = moonIcon; // Show moon icon
  };

  // Check localStorage for saved theme
  if (darkMode === "active") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  // Toggle Dark Mode on Click
  themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "active") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});
