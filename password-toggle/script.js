const input = document.getElementById("pw-input");
const toggleButton = document.getElementById("pw-toggle-btn");

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
});

toggleButton.addEventListener("click", togglePasswordVisibility);

/**
 * toggle type attribut of input element between text or password
 */
function togglePasswordVisibility() {
  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
}
