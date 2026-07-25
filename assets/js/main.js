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

  // 2. Submenu de Serviços (Clique / Toggle de Classe .active)
  const dropdownParent = document.querySelector(".dropdown");
  const dropdownToggle = document.getElementById("servicesToggle");

  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener("click", (event) => {
      event.preventDefault(); // Impede o salto de página do link #
      
      // Alterna a classe .active no container pai
      const isOpen = dropdownParent.classList.toggle("active");
      
      // Atualiza atributo de acessibilidade
      dropdownToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Fecha o submenu automaticamente ao clicar fora
    document.addEventListener("click", (event) => {
      if (!dropdownParent.contains(event.target)) {
        dropdownParent.classList.remove("active");
        dropdownToggle.setAttribute("aria-expanded", "false");
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
