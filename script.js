/* Lucky Fours — Maison interactions. Deliberate, slow. */

(() => {
  'use strict';

  /* ── masthead stuck state ── */
  const mast = document.querySelector('.mast');
  if (mast) {
    const onScroll = () => {
      if (window.scrollY > 8) mast.classList.add('is-stuck');
      else mast.classList.remove('is-stuck');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── scroll reveals ── */
  const targets = document.querySelectorAll(
    '.edit, .cols-head, .chapter, .all__head, .ref, .gift, .maison, .serv, .news, .foot__top'
  );
  targets.forEach((el) => el.classList.add('in'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add('is-in'));
  }

  /* ── bag counter on link-arrow.red clicks (faux add-to-bag) ── */
  const bag = document.querySelector('.bag-count');
  let count = 0;
  document.querySelectorAll('.link-arrow--red').forEach((btn) => {
    if (btn.classList.contains('news') || !btn.closest('.chapter')) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      count += 1;
      if (bag) {
        bag.textContent = count;
        bag.animate(
          [{ transform: 'scale(1)' }, { transform: 'scale(1.45)' }, { transform: 'scale(1)' }],
          { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
        );
      }
    });
  });

  /* ── hero figure subtle parallax (desktop only) ── */
  const heroImg = document.querySelector('.hero__figure img');
  const heroFig = document.querySelector('.hero__figure');
  if (heroImg && heroFig && window.matchMedia('(hover: hover) and (min-width: 901px)').matches) {
    heroFig.addEventListener('mousemove', (e) => {
      const r = heroFig.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      heroImg.style.transform = `scale(1.02) translate3d(${x * -10}px, ${y * -8}px, 0)`;
    });
    heroFig.addEventListener('mouseleave', () => {
      heroImg.style.transform = '';
    });
  }
})();
