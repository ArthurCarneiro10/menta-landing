/**
 * Menta — Landing Page
 * UI interactions (mobile menu)
 *
 * A configuração do Tailwind (paleta menta) está inline no <head> do
 * index.html, pois precisa estar definida ANTES do CDN do Tailwind
 * processar as classes da página.
 */

(function initMobileMenu () {
  'use strict';

  const menuBtn    = document.getElementById('mobile-menu-btn');
  const closeBtn   = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const body       = document.body;

  // Se alguma referência não existir, sai sem quebrar
  if (!menuBtn || !closeBtn || !mobileMenu) return;

  /** Abre o menu mobile e bloqueia scroll do body */
  function openMenu () {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    body.classList.add('menu-open');
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  /** Fecha o menu mobile e libera scroll do body */
  function closeMenu () {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    body.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  /** Alterna entre aberto e fechado */
  function toggleMenu () {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  // Botões de abrir / fechar
  menuBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  // Fecha ao clicar em qualquer link interno do menu (UX fluida)
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fecha com a tecla Escape (acessibilidade)
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });
})();
