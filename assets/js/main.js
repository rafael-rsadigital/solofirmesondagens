document.addEventListener("DOMContentLoaded", () => {
  // 1. Reduz o Header ao Rolar a Página
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

  // 2. Alterna (Toggle) o Submenu de Serviços ao Clicar
  const dropdownParent = document.querySelector(".dropdown");
  const dropdownToggle = document.getElementById("servicesToggle");

  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener("click", (event) => {
      event.preventDefault(); // Impede o salto de página do href="#"
      
      // Alterna a classe 'active' para abrir ou fechar o submenu
      const isOpen = dropdownParent.classList.toggle("active");
      
      // Atualiza atributo de acessibilidade
      dropdownToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Fecha o submenu automaticamente caso o usuário clique fora dele
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
