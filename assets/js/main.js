document.addEventListener("DOMContentLoaded", () => {
  // 1. Diminuir o Menu Superior ao Rolar (Scroll Effect)
  const header = document.getElementById("main-header");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. Menu Hambúrguer (Mobile)
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", () => {
        mobileBtn.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // 3. Efeito Sanfona do FAQ (Abrir um fecha os outros)
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
