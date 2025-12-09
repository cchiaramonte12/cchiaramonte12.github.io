// Subtle fade-in animation on page load
window.addEventListener("load", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 100);
  });
});

// Smooth page transitions - only fade main content, not nav
document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname || !link.hostname) {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      
      // Only apply transition for internal links
      if (href && !href.startsWith("#") && !href.startsWith("mailto:") && !link.hasAttribute("target")) {
        e.preventDefault();
        
        // Fade out only main content
        const mainContent = document.querySelector(".main-content");
        if (mainContent) {
          mainContent.style.opacity = "0";
        }
        
        // Navigate after fade
        setTimeout(() => {
          window.location.href = href;
        }, 200);
      }
    });
  }
});
