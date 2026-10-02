const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// A real-world-style interaction: each plant card responds to its own button.
document.querySelectorAll(".plant-button").forEach((button) => {
  button.addEventListener("click", () => {
    const plant = button.dataset.plant;
    showToast(`Great choice! ${plant} is now on your plant shortlist. 🌿`);
  });
});

// Basic JavaScript button interaction (the required alert example).
const tips = [
  "Plant tip: Check the top few centimetres of soil before watering.",
  "Plant tip: Most indoor plants prefer bright, indirect light.",
  "Plant tip: Make sure your pot has drainage holes to help prevent soggy roots.",
  "Plant tip: Wipe dusty leaves gently so they can catch the light."
];
let tipIndex = 0;
document.getElementById("tipButton").addEventListener("click", () => {
  alert(tips[tipIndex]);
  tipIndex = (tipIndex + 1) % tips.length;
});

// Demo subscription form: validates email in the browser; no data is sent or stored.
document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const message = document.getElementById("formMessage");
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  message.textContent = `Thanks! ${email.value} is signed up in this demo. No email was sent.`;
  email.value = "";
});

document.getElementById("year").textContent = new Date().getFullYear();
