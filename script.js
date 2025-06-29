const inputBox = document.getElementById("inputBox");
const speakButton = document.getElementById("speakButton");
const speakOnly = document.getElementById("speakOnly");
const zoneButton = document.getElementById("zoneButton");
const getAdvice = document.getElementById("getAdvice");
const logout = document.getElementById("logout");

// Voice recognition
if (speakButton) {
  speakButton.addEventListener("click", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      inputBox.value = transcript;
    };
  });
}

// Speak Only Mode
if (speakOnly) {
  speakOnly.addEventListener("change", (e) => {
    if (e.target.checked) {
      inputBox.disabled = true;
      alert("Speak Only Mode is ON. Tap the mic to talk.");
    } else {
      inputBox.disabled = false;
    }
  });
}

// Zone Mode
if (zoneButton) {
  zoneButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#e0f7fa";
    alert("Zone Mode activated. Stay focused!");
  });
}

// Get Diet Advice
if (getAdvice) {
  getAdvice.addEventListener("click", () => {
    const userText = inputBox.value.trim();
    if (userText.length === 0) {
      alert("Please enter what you ate or use the mic.");
      return;
    }
    // Here you could connect to AI API:
    alert("AI Diet Advice (placeholder): Remember to eat more greens and stay hydrated!");
  });
}

// Logout
if (logout) {
  logout.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}