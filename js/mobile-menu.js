{
  const menuOpenBtn = document.querySelector("[data-menu-button-open]");
  const menuCloseBtn = document.querySelector("[data-menu-button-close]");
  const mobileMenu = document.querySelector("[data-menu]");

  menuOpenBtn.addEventListener("click", () => {
    const expanded =
      menuOpenBtn.getAttribute("aria-expanded") === "true" || false;

    menuOpenBtn.classList.toggle("is-open");
    menuOpenBtn.setAttribute("aria-expanded", !expanded);

    mobileMenu.classList.toggle("is-open");
    
  });
  menuCloseBtn.addEventListener("click", () => {
    const expanded =
      menuCloseBtn.getAttribute("aria-expanded") === "true" || false;

    menuCloseBtn.classList.toggle("is-close");
    menuCloseBtn.setAttribute("aria-expanded", !expanded);

    mobileMenu.classList.toggle("is-open");
    
  });
};