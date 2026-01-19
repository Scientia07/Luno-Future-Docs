/*
==============================================================================
FILE METADATA
==============================================================================
filename:       nav-component.js
created:        2026-01-19
updated:        2026-01-19
version:        1.0.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [dashboard/index.html, CLAUDE.md]
description:    Self-contained floating navigation component for demo navigation
==============================================================================
*/

(function() {
  'use strict';

  // Detect current path depth to calculate relative paths
  const path = window.location.pathname;
  const segments = path.split('/').filter(s => s && !s.endsWith('.html'));

  // Calculate base path based on depth
  let basePath = '';
  if (segments.length === 0 || (segments.length === 1 && segments[0] === '')) {
    basePath = './';
  } else if (segments.length === 1) {
    basePath = '../';
  } else if (segments.length === 2) {
    basePath = '../../';
  } else {
    basePath = '../'.repeat(segments.length);
  }

  // Navigation structure
  const navStructure = {
    dashboard: { label: 'Dashboard', path: 'dashboard/index.html', icon: '🏠' },
    core: {
      label: 'Core Formats',
      items: [
        { label: 'Reveal.js', path: 'reveal-js/index.html' },
        { label: 'Slidev', path: 'slidev/index.html' },
        { label: 'Motion Canvas', path: 'motion-canvas/index.html' },
        { label: 'Gamma Style', path: 'gamma-guide/index.html' },
        { label: 'Framer Style', path: 'framer-guide/index.html' },
        { label: 'Lottie + HTML', path: 'lottie-html/index.html' },
        { label: 'Scrollytelling', path: 'scrollytelling/index.html' }
      ]
    },
    enhanced: {
      label: 'Enhanced',
      items: [
        { label: 'Enhanced Hub', path: 'enhanced/index.html' },
        { label: 'Scrollytelling Pro', path: 'enhanced/scrollytelling-pro/index.html' },
        { label: 'Framer Offline', path: 'enhanced/framer-offline/index.html' },
        { label: 'Lottie Fixed', path: 'enhanced/lottie-fixed/index.html' },
        { label: 'Gamma Interactive', path: 'enhanced/gamma-interactive/index.html' }
      ]
    },
    offerte: {
      label: 'Offerte (LunoLabs)',
      items: [
        { label: 'Offerte Hub', path: 'offerte/index.html' },
        { label: 'Original', path: 'offerte/lunolabs-offerte.html' },
        { label: 'Offerte v2', path: 'offerte/lunolabs-offerte-v2.html' },
        { label: 'Scrollytelling', path: 'offerte/lunolabs-scrollytelling.html' },
        { label: 'Framer', path: 'offerte/lunolabs-framer.html' },
        { label: 'Gamma', path: 'offerte/lunolabs-gamma.html' },
        { label: 'Lottie', path: 'offerte/lunolabs-lottie.html' }
      ]
    }
  };

  // Inject CSS styles
  const styles = `
    .demo-nav-trigger {
      position: fixed;
      bottom: 24px;
      left: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .demo-nav-trigger:hover {
      background: rgba(15, 23, 42, 0.95);
      box-shadow: 0 4px 25px rgba(99, 102, 241, 0.3);
      transform: scale(1.05);
    }

    .demo-nav-trigger:focus {
      outline: 2px solid #6366f1;
      outline-offset: 2px;
    }

    .demo-nav-trigger svg {
      width: 24px;
      height: 24px;
      fill: rgba(255, 255, 255, 0.9);
      transition: transform 0.3s ease;
    }

    .demo-nav-trigger.active svg {
      transform: rotate(45deg);
    }

    .demo-nav-panel {
      position: fixed;
      bottom: 80px;
      left: 24px;
      width: 260px;
      max-height: calc(100vh - 120px);
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      z-index: 9998;
      overflow-y: auto;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px) scale(0.95);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .demo-nav-panel.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }

    .demo-nav-panel::-webkit-scrollbar {
      width: 6px;
    }

    .demo-nav-panel::-webkit-scrollbar-track {
      background: transparent;
    }

    .demo-nav-panel::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
    }

    .demo-nav-home {
      display: block;
      padding: 16px;
      background: linear-gradient(135deg, #6366f1, #ec4899);
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      border-radius: 12px 12px 0 0;
      transition: opacity 0.2s ease;
    }

    .demo-nav-home:hover {
      opacity: 0.9;
    }

    .demo-nav-home:focus {
      outline: 2px solid white;
      outline-offset: -4px;
    }

    .demo-nav-home span {
      margin-right: 8px;
    }

    .demo-nav-section {
      padding: 12px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .demo-nav-section:last-child {
      border-bottom: none;
    }

    .demo-nav-section-title {
      padding: 0 16px 8px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: rgba(255, 255, 255, 0.5);
    }

    .demo-nav-link {
      display: block;
      padding: 8px 16px;
      color: rgba(255, 255, 255, 0.75);
      text-decoration: none;
      font-size: 13px;
      transition: all 0.2s ease;
    }

    .demo-nav-link:hover {
      background: rgba(99, 102, 241, 0.15);
      color: white;
    }

    .demo-nav-link:focus {
      outline: 2px solid #6366f1;
      outline-offset: -2px;
    }

    .demo-nav-link.active {
      background: rgba(99, 102, 241, 0.2);
      color: #a5b4fc;
      font-weight: 500;
    }

    .demo-nav-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      z-index: 9997;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease;
    }

    .demo-nav-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 480px) {
      .demo-nav-trigger {
        bottom: 16px;
        left: 16px;
        width: 44px;
        height: 44px;
      }

      .demo-nav-panel {
        bottom: 68px;
        left: 16px;
        right: 16px;
        width: auto;
        max-height: calc(100vh - 100px);
      }
    }
  `;

  // Check if current page matches a nav path
  function isCurrentPage(navPath) {
    const currentPath = window.location.pathname;
    return currentPath.includes(navPath.replace('index.html', '').replace('.html', ''));
  }

  // Build navigation HTML
  function buildNavHTML() {
    let html = '';

    // Dashboard link
    html += `<a href="${basePath}${navStructure.dashboard.path}" class="demo-nav-home${isCurrentPage(navStructure.dashboard.path) ? ' active' : ''}">
      <span>${navStructure.dashboard.icon}</span>${navStructure.dashboard.label}
    </a>`;

    // Core Formats
    html += `<div class="demo-nav-section">
      <div class="demo-nav-section-title">${navStructure.core.label}</div>`;
    navStructure.core.items.forEach(item => {
      const activeClass = isCurrentPage(item.path) ? ' active' : '';
      html += `<a href="${basePath}${item.path}" class="demo-nav-link${activeClass}">${item.label}</a>`;
    });
    html += '</div>';

    // Enhanced
    html += `<div class="demo-nav-section">
      <div class="demo-nav-section-title">${navStructure.enhanced.label}</div>`;
    navStructure.enhanced.items.forEach(item => {
      const activeClass = isCurrentPage(item.path) ? ' active' : '';
      html += `<a href="${basePath}${item.path}" class="demo-nav-link${activeClass}">${item.label}</a>`;
    });
    html += '</div>';

    // Offerte
    html += `<div class="demo-nav-section">
      <div class="demo-nav-section-title">${navStructure.offerte.label}</div>`;
    navStructure.offerte.items.forEach(item => {
      const activeClass = isCurrentPage(item.path) ? ' active' : '';
      html += `<a href="${basePath}${item.path}" class="demo-nav-link${activeClass}">${item.label}</a>`;
    });
    html += '</div>';

    return html;
  }

  // Initialize navigation
  function init() {
    // Inject styles
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'demo-nav-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    // Create trigger button
    const trigger = document.createElement('button');
    trigger.className = 'demo-nav-trigger';
    trigger.setAttribute('aria-label', 'Open demo navigation');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
    </svg>`;
    document.body.appendChild(trigger);

    // Create panel
    const panel = document.createElement('nav');
    panel.className = 'demo-nav-panel';
    panel.setAttribute('aria-label', 'Demo navigation');
    panel.innerHTML = buildNavHTML();
    document.body.appendChild(panel);

    // Toggle function
    function toggleNav(open) {
      const isOpen = open !== undefined ? open : !panel.classList.contains('open');

      panel.classList.toggle('open', isOpen);
      overlay.classList.toggle('open', isOpen);
      trigger.classList.toggle('active', isOpen);
      trigger.setAttribute('aria-expanded', isOpen);
      trigger.setAttribute('aria-label', isOpen ? 'Close demo navigation' : 'Open demo navigation');

      if (isOpen) {
        // Focus first link
        const firstLink = panel.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    }

    // Event listeners
    trigger.addEventListener('click', () => toggleNav());
    overlay.addEventListener('click', () => toggleNav(false));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('open')) {
        toggleNav(false);
        trigger.focus();
      }
    });

    // Trap focus within panel when open
    panel.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusable = panel.querySelectorAll('a');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
