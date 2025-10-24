const themes = [
  "from-gray-900 via-blue-900 to-black",
  "from-gray-900 via-purple-900 to-black",
  "from-gray-900 via-emerald-900 to-black"
];
let currentTheme = 0;
const body = document.getElementById("body");
document.getElementById("theme-toggle").addEventListener("click", () => {
  currentTheme = (currentTheme + 1) % themes.length;
  body.style.transition = "background 0.5s";
  body.className = `bg-gradient-to-br ${themes[currentTheme]} text-white font-sans transition-colors duration-500`;
});
