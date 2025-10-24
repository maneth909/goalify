// Append modal HTML to body
document.body.insertAdjacentHTML("beforeend", `
<div id="auth-modal" class="fixed inset-0 bg-black/70 flex items-center justify-center opacity-0 pointer-events-none transition-opacity">
  <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-80 relative text-white">
    <button id="close-auth" class="absolute top-3 right-3 text-gray-300 hover:text-white">&times;</button>
    <h2 id="auth-title" class="text-2xl font-bold mb-4 text-center">Login</h2>
    <input id="auth-name" type="text" placeholder="Full Name" class="w-full mb-3 px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 hidden"/>
    <input id="auth-email" type="email" placeholder="Email" class="w-full mb-3 px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    <input id="auth-password" type="password" placeholder="Password" class="w-full mb-4 px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    <button id="auth-submit" class="w-full py-2 bg-blue-500 hover:bg-blue-400 rounded font-semibold mb-2">Login</button>
    <p class="text-center text-sm" id="auth-switch">Don't have an account? <span id="switch-btn" class="text-blue-400 hover:underline cursor-pointer">Sign Up</span></p>
  </div>
</div>
`);

// Show modal
const authModal = document.getElementById("auth-modal");
const authSubmit = document.getElementById("auth-submit");
const authTitle = document.getElementById("auth-title");
const authName = document.getElementById("auth-name");
const switchBtn = document.getElementById("switch-btn");
const closeAuth = document.getElementById("close-auth");

function openAuthModal() {
  authModal.classList.remove("opacity-0","pointer-events-none");
  authModal.classList.add("opacity-100");
}
function closeAuthModal() {
  authModal.classList.add("opacity-0","pointer-events-none");
  authModal.classList.remove("opacity-100");
}

// Attach login/signup buttons from navbar
document.querySelectorAll(".nav-auth").forEach(btn => {
  btn.addEventListener("click", openAuthModal);
});
closeAuth.addEventListener("click", closeAuthModal);

// Switch between login and signup
let isLogin = true;
switchBtn.addEventListener("click", () => {
  isLogin = !isLogin;
  if(isLogin){
    authTitle.textContent = "Login";
    authSubmit.textContent = "Login";
    authName.classList.add("hidden");
    switchBtn.textContent = "Sign Up";
    document.getElementById("auth-switch").innerHTML = `Don't have an account? <span id="switch-btn" class="text-blue-400 hover:underline cursor-pointer">Sign Up</span>`;
  } else {
    authTitle.textContent = "Sign Up";
    authSubmit.textContent = "Sign Up";
    authName.classList.remove("hidden");
    switchBtn.textContent = "Login";
    document.getElementById("auth-switch").innerHTML = `Already have an account? <span id="switch-btn" class="text-blue-400 hover:underline cursor-pointer">Login</span>`;
  }
});

// Dummy submit
authSubmit.addEventListener("click", () => {
  alert(`${isLogin ? "Login" : "Sign Up"} successful (demo)`);
  closeAuthModal();
});
