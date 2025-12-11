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

// Team: click circles to switch bio
const personButtons = document.querySelectorAll(".team-person");
const bioBlocks = document.querySelectorAll(".team-bio");

personButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-person");
    if (!id) return;

    // highlight selected circle
    personButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // show matching bio
    bioBlocks.forEach((block) => {
      if (block.getAttribute("data-person") === id) {
        block.hidden = false;
      } else {
        block.hidden = true;
      }
    });
  });
});

// "Learn more" toggles
bioBlocks.forEach((block) => {
  const learnBtn = block.querySelector(".team-learn");
  if (!learnBtn) return;

  learnBtn.addEventListener("click", () => {
    const isLong = block.classList.toggle("show-long");
    learnBtn.textContent = isLong ? "Show less" : "Learn more";
  });
});
