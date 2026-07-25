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

  // 2. Abertura e Fechamento Exclusivo por CLIQUE do Submenu de Serviços
  const dropdownParent = document.querySelector(".dropdown");
  const dropdownToggle = document.getElementById("servicesToggle");

  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener("click", (event) => {
      event.preventDefault(); // Impede o salto de página da tag #
      event.stopPropagation(); // Impede o evento de propagar para o document
      
      // Alterna a classe .active no item pai .dropdown
      const isOpen = dropdownParent.classList.toggle("active");
      
      // Atualiza atributo de acessibilidade
      dropdownToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Fecha a caixa suspensa ao clicar em qualquer outro ponto fora dela
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
