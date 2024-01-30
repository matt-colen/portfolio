document.body.addEventListener("click", (e) => {
  if (e.target.id === "ham-btn" || e.target.id === "mobile-nav-close-btn") {
    document.querySelector("#nav-ham-menu").classList.toggle("hidden");
  }
});
