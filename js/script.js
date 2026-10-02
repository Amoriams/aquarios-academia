/**
 * AQUARIUS ACADEMIA — JAVASCRIPT PRINCIPAL
 * Vanilla JavaScript (Sem frameworks externos)
 * Funcionalidades:
 * 1. Intersection Observer para Animações ao Rolar (Scroll Reveal)
 * 2. Lazy Loading otimizado para imagens
 * 3. Compilador de formulário para WhatsApp com formatação e emojis
 * 4. Menu mobile responsivo e acessível
 * 5. Header sticky com efeito backdrop
 * 6. Indicador de status em tempo real (Aberto/Fechado)
 * 7. Contadores numéricos animados
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initLazyLoading();
  initMobileMenu();
  initStickyHeader();
  initContactFormWhatsApp();
  initBusinessStatus();
  initCounters();
});

/* ==========================================================================
   1. ANIMAÇÕES AO ACIONAR A BARRA DE ROLAGEM (SCROLL REVEAL)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if (!('IntersectionObserver' in window)) {
    // Fallback caso navegador antigo não suporte
    animatedElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Uma vez revelado, pode parar de observar para economizar memória
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   2. LAZY LOADING AVANÇADO DE IMAGENS COM BLUR-UP
   ========================================================================== */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img.lazy-load');

  if (!('IntersectionObserver' in window)) {
    lazyImages.forEach(img => {
      if (img.dataset.src) img.src = img.dataset.src;
      img.classList.add('lazy-loaded');
    });
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        img.onload = () => {
          img.classList.add('lazy-loaded');
        };
        // Se a imagem já estiver em cache
        if (img.complete) {
          img.classList.add('lazy-loaded');
        }
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '100px 0px',
    threshold: 0.01
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

/* ==========================================================================
   3. FORMULÁRIO DE CONTATO INTELIGENTE PARA O WHATSAPP COM EMOJIS
   ========================================================================== */
function initContactFormWhatsApp() {
  const form = document.getElementById('whatsapp-contact-form');
  if (!form) return;

  // Número oficial da academia conforme SPEC (11) 5512-2020
  const whatsappNumber = '551155122020';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('form-name');
    const phoneInput = document.getElementById('form-phone');
    const modalityInput = document.getElementById('form-modality');
    const goalInput = document.getElementById('form-goal');
    const messageInput = document.getElementById('form-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const modality = modalityInput ? modalityInput.value : '';
    const goal = goalInput ? goalInput.value : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !phone) {
      showToast('⚠️ Por favor, preencha pelo menos seu nome e telefone.');
      return;
    }

    // Compilação estruturada e elegante com emojis
    const textLines = [
      '🏋️‍♂️ *CONTATO VIA SITE — AQUARIUS ACADEMIA* 🏊‍♂️',
      '',
      `👋 *Olá, equipe Aquarius!* Gostaria de informações sobre planos e horários.`,
      '',
      `👤 *Nome:* ${name}`,
      `📱 *Telefone/WhatsApp:* ${phone}`,
      `⚡ *Modalidade:* ${modality || 'A definir'}`,
      `🎯 *Interesse:* ${goal || 'Informações gerais'}`,
    ];

    if (message) {
      textLines.push(`💬 *Mensagem/Dúvida:* ${message}`);
    }

    textLines.push('');
    textLines.push('📍 *Unidade:* Vila das Belezas — São Paulo/SP');
    textLines.push('✨ _Enviado através do formulário do site oficial_');

    const compiledMessage = textLines.join('\n');
    const encodedMessage = encodeURIComponent(compiledMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    showToast('🚀 Redirecionando para o WhatsApp da Aquarius...');

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      form.reset();
    }, 800);
  });
}

/* ==========================================================================
   4. MENU MOBILE RESPONSIVO E ACESSÍVEL
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const backdrop = document.getElementById('mobile-backdrop');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Fechar com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   5. HEADER STICKY COM EFEITO DE BLUR E SOMBRA AO ROLAR
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('shadow-xl', 'bg-opacity-95', 'border-b', 'border-blue-900/30');
    } else {
      header.classList.remove('shadow-xl', 'bg-opacity-95', 'border-b', 'border-blue-900/30');
    }
  }, { passive: true });
}

/* ==========================================================================
   6. STATUS DA ACADEMIA EM TEMPO REAL (ABERTO / FECHADO)
   ========================================================================== */
function initBusinessStatus() {
  const statusBadges = document.querySelectorAll('.live-status-badge');
  if (statusBadges.length === 0) return;

  function updateStatus() {
    const now = new Date();
    // Ajustar para fuso horário de Brasília (UTC-3)
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const brTime = new Date(utc - (3600000 * 3));

    const day = brTime.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hour = brTime.getHours();
    const minute = brTime.getMinutes();
    const currentTotalMinutes = hour * 60 + minute;

    let isOpen = false;
    let statusText = '';
    let statusSubtext = '';

    if (day >= 1 && day <= 5) {
      // Segunda a Sexta: 06:00 às 22:00
      const openMinutes = 6 * 60;
      const closeMinutes = 22 * 60;
      if (currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes) {
        isOpen = true;
        statusText = 'Aberto Agora';
        statusSubtext = 'Fecha às 22h';
      } else {
        isOpen = false;
        statusText = 'Fechado no momento';
        statusSubtext = currentTotalMinutes < openMinutes ? 'Abre hoje às 06h' : 'Abre amanhã às 06h';
      }
    } else if (day === 6) {
      // Sábado: 08:00 às 17:00
      const openMinutes = 8 * 60;
      const closeMinutes = 17 * 60;
      if (currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes) {
        isOpen = true;
        statusText = 'Aberto Agora';
        statusSubtext = 'Fecha às 17h';
      } else {
        isOpen = false;
        statusText = 'Fechado no momento';
        statusSubtext = currentTotalMinutes < openMinutes ? 'Abre hoje às 08h' : 'Abre segunda às 06h';
      }
    } else {
      // Domingo
      isOpen = false;
      statusText = 'Fechado aos domingos';
      statusSubtext = 'Abre segunda às 06h';
    }

    statusBadges.forEach(badge => {
      if (isOpen) {
        badge.innerHTML = `
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-beacon"></span>
            ${statusText} • ${statusSubtext}
          </span>
        `;
      } else {
        badge.innerHTML = `
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700">
            <span class="w-2 h-2 rounded-full bg-slate-500"></span>
            ${statusText} • ${statusSubtext}
          </span>
        `;
      }
    });
  }

  updateStatus();
  // Atualiza a cada minuto
  setInterval(updateStatus, 60000);
}

/* ==========================================================================
   7. CONTADORES NUMÉRICOS ANIMADOS
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (counters.length === 0) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target') || '0');
          const isDecimal = counter.getAttribute('data-decimal') === 'true';
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 1800; // ms
          const startTime = performance.now();

          function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing cúbico para desaceleração suave
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOutProgress;

            if (isDecimal) {
              counter.textContent = `${prefix}${currentVal.toFixed(1)}${suffix}`;
            } else {
              counter.textContent = `${prefix}${Math.floor(currentVal).toLocaleString('pt-BR')}${suffix}`;
            }

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              if (isDecimal) {
                counter.textContent = `${prefix}${target.toFixed(1)}${suffix}`;
              } else {
                counter.textContent = `${prefix}${target.toLocaleString('pt-BR')}${suffix}`;
              }
            }
          }

          requestAnimationFrame(step);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   8. UTILITÁRIO DE TOAST
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="px-5 py-3 rounded-xl bg-slate-900 border border-blue-500/40 text-white text-sm shadow-2xl flex items-center gap-3">
      <span>${message}</span>
    </div>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
