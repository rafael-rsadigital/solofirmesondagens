document.addEventListener("DOMContentLoaded", () => {
  const dropdownParent = document.querySelector(".dropdown");
  const dropdownToggle = document.getElementById("servicesToggle");

  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener("click", (event) => {
      // Impede o link de recarregar a página
      event.preventDefault();
      
      // Alterna a classe 'active' para abrir/fechar o menu
      const isOpen = dropdownParent.classList.toggle("active");
      
      // Atualiza atributo de acessibilidade
      dropdownToggle.setAttribute("aria-expanded", isOpen);
    });

    // Fecha o menu se o usuário clicar em qualquer outro lugar fora do cabeçalho
    document.addEventListener("click", (event) => {
      if (!dropdownParent.contains(event.target)) {
        dropdownParent.classList.remove("active");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
