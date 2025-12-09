// On load, animate fade-in
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, i * 80);
  });
});

// Smooth fade-out when navigating between pages
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (
      link.href &&
      link.href !== window.location.href &&
      !link.href.includes("#")
    ) {
      e.preventDefault();
      document.body.style.transition = "opacity 0.3s ease";
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = link.href;
      }, 300);
    }
  });
});
