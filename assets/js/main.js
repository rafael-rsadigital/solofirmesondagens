document.addEventListener("DOMContentLoaded", () => {
  // 1. Reduz o Header ao Rolar a Página (Scroll Effect)
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

  // 2. Comportamento do Dropdown no Toque (Mobile)
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownParent = document.querySelector(".dropdown");

  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener("click", (e) => {
      // Em telas menores, alterna a visibilidade do submenu no toque
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownParent.classList.toggle("open");
      }
    });
  }

  // 3. Efeito Sanfona do FAQ (Accordion)
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
