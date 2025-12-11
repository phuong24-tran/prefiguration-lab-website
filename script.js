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

// Team cards: click to highlight + show detail bar
const personCards = document.querySelectorAll(".team-person-card");
const detailBlocks = document.querySelectorAll(".team-detail");

personCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-person");
    if (!id) return;

    // set active card
    personCards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    // show matching detail
    detailBlocks.forEach((block) => {
      if (block.getAttribute("data-person") === id) {
        block.hidden = false;
      } else {
        block.hidden = true;
      }
    });
  });
});


