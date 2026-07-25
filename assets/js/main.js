document.addEventListener("DOMContentLoaded", () => {
  // 1. Efeito de Encolhimento do Header ao Rolar a Página
  const header = document.getElementById("main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // 2. Efeito Sanfona do FAQ (Accordion)
  const faqDetails = document.querySelectorAll(".faq-container details");
  faqDetails.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      faqDetails.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });
});
