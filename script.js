// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Close menu when a link is clicked (on mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

// Auto-update footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Team: switch active person + bio
const teamChips = document.querySelectorAll(".team-chip");
const teamBios = document.querySelectorAll(".team-bio");

teamChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const person = chip.getAttribute("data-person");
    if (!person) return;

    // highlight active chip
    teamChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    // show matching bio
    teamBios.forEach((bio) => {
      if (bio.getAttribute("data-person") === person) {
        bio.hidden = false;
      } else {
        bio.hidden = true;
      }
    });
  });
});

// Team: "Connect on LinkedIn" buttons open link
document.querySelectorAll(".team-connect").forEach((btn) => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  });
});
