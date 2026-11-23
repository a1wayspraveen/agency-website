/**
 * ============================================================================
 * CODECRAFT STUDIO & PROJECTBUDDYHUB — CORE CLIENT-SIDE ENGINE
 * Pure Vanilla JavaScript (Zero Frameworks, Lightweight & High Craft)
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATA DEFINITIONS & AUDIENCE DICTIONARIES
  // --------------------------------------------------------------------------
  const AUDIENCE_DATA = {
    companies: {
      brandName: "CodeCraft Studio",
      brandTagline: "Engineering & Product Studio",
      logoSrc: "assets/CodeCraftStudio_logo.jpeg",
      logoAlt: "CodeCraft Studio Logo",
      heroAudienceFlag: "AUDIENCE // 01: ENTERPRISE & SCALING TECH",
      heroStatusText: "Production Engineering Tier",
      heroTitle: 'High-integrity software engineering, custom platforms, and <span class="accent-span">production-grade AI</span>.',
      heroDescription: 'We architect, build, and deploy robust web applications, mobile platforms, applied AI systems, and security-hardened infrastructure for enterprises and fast-growing startups.',
      heroPrimaryCtaText: 'Explore Services',
      heroPrimaryCtaHref: '#services',
      heroSecondaryCtaText: 'Review Past Work ↗',
      heroSecondaryCtaHref: '#portfolio',
      heroViewingLabel: 'Companies',
      heroSwitchBtnText: 'Switch to For Students ⇄',
      specsCardHeading: 'SYSTEM SPECS // PRODUCTION SLA',
      specsCardSubstatus: 'OPERATIONAL',
      kpi1Val: '99.9<span class="unit">%</span>',
      kpi1Lbl: 'Target Uptime SLA',
      kpi2Val: '&lt;180<span class="unit">ms</span>',
      kpi2Lbl: 'Avg P99 Response',
      kpi3Val: 'OWASP<span class="unit"> 10</span>',
      kpi3Lbl: 'Security Hardened',
      kpi4Val: 'Zero<span class="unit"> Bloat</span>',
      kpi4Lbl: 'Clean Architecture',
      specsBullets: [
        "End-to-end full stack delivery with CI/CD automation",
        "Custom applied AI pipelines with localized embeddings",
        "Zero-trust security reviews and vulnerability scans",
        "Modular code ownership transferred 100% to your team"
      ],
      deliverableTag: "Enterprise Mode",
      deliverables: {
        web: [
          "Scalable Node.js / Express or Next.js architecture",
          "Automated testing & CI/CD deployment pipelines",
          "Relational / Document DB schema design & indexing"
        ],
        mobile: [
          "Cross-platform codebase with offline-first synchronization",
          "Biometric auth, push notifications, and App Store submission"
        ],
        ai: [
          "Custom RAG with vector search (pgvector/Pinecone)",
          "Deterministic guardrails and evaluation metrics"
        ],
        design: [
          "Production Figma component library with auto-layout",
          "WCAG AA compliance and accessible keyboard flow"
        ],
        security: [
          "Static & dynamic vulnerability vulnerability reports",
          "JWT/session remediation and cryptographic verification"
        ]
      },
      process: {
        title: "Engineered Delivery Lifecycle",
        desc: "A structured, transparent workflow ensuring zero communication lag, predictable release milestones, and production-tested code delivery.",
        steps: [
          { num: "01", title: "Discovery & Architecture", desc: "We define precise API contracts, data models, infrastructure requirements, and security baselines before writing a single line of code." },
          { num: "02", title: "Sprint Development", desc: "Weekly iterative development cycles with clean Git commits, PR reviews, preview deployments, and continuous client test access." },
          { num: "03", title: "Security & QA Audits", desc: "Thorough OWASP vulnerability testing, database query optimization, load benchmarks, and cross-browser accessibility verification." },
          { num: "04", title: "Deployment & Handover", desc: "Production deployment to your cloud account, complete documentation, automated CI/CD pipeline handover, and post-launch SLA support." }
        ]
      },
      email: "code.craft.studio045@gmail.com",
      formAudienceVal: "companies"
    },

    students: {
      brandName: "ProjectBuddyHub",
      brandTagline: "Academic Capstone & Mentorship",
      logoSrc: "assets/ProjectBuddyHub.png",
      logoAlt: "ProjectBuddyHub Logo",
      heroAudienceFlag: "AUDIENCE // 02: UNIVERSITY STUDENTS & CAPSTONE RESEARCH",
      heroStatusText: "Academic Capstone & Viva Mentorship Tier",
      heroTitle: 'Guided final-year capstone projects, full IEEE documentation, and <span class="accent-span">1-on-1 viva coaching</span>.',
      heroDescription: 'Get complete source code, standard IEEE project reports, architecture walkthroughs, and personal viva defense mentorship across Web, Mobile, AI/ML, and Cybersecurity domains at student-friendly pricing.',
      heroPrimaryCtaText: 'Browse Student Projects',
      heroPrimaryCtaHref: '#portfolio',
      heroSecondaryCtaText: 'Request Mentorship ↗',
      heroSecondaryCtaHref: '#contact',
      heroViewingLabel: 'Students',
      heroSwitchBtnText: 'Switch to For Companies ⇄',
      specsCardHeading: 'CAPSTONE SPECS // ACADEMIC STANDARDS',
      specsCardSubstatus: 'ENROLLING',
      kpi1Val: '100<span class="unit">%</span>',
      kpi1Lbl: 'Verified Source Code',
      kpi2Val: 'IEEE<span class="unit"> Std</span>',
      kpi2Lbl: 'Project Thesis Report',
      kpi3Val: '1-on-1<span class="unit"> Prep</span>',
      kpi3Lbl: 'Viva Defense Coaching',
      kpi4Val: 'Budget<span class="unit"> Tier</span>',
      kpi4Lbl: 'Student-Friendly Fee',
      specsBullets: [
        "100% working, thoroughly commented source code",
        "Comprehensive IEEE-format project documentation & diagrams",
        "1-on-1 viva defense preparation & architecture walkthrough",
        "Complete local environment setup assistance & video demo"
      ],
      deliverableTag: "Student Capstone Mode",
      deliverables: {
        web: [
          "Full source code with step-by-step local setup guide",
          "Complete IEEE project report, ER diagrams & viva slides",
          "Student-friendly pricing with 1-on-1 viva coaching"
        ],
        mobile: [
          "Flutter / React Native source code with clear comments",
          "APK generation instructions + system architecture report"
        ],
        ai: [
          "PyTorch/TensorFlow models with clear dataset training scripts",
          "Accuracy/loss graphs & metric tables formatted for IEEE papers"
        ],
        design: [
          "Complete Figma UI mockup + design tokens and wireframes",
          "User flow and entity diagrams ready for thesis report"
        ],
        security: [
          "Cryptographic project code with test vectors and scripts",
          "Security audit methodology breakdown for viva examiner questions"
        ]
      },
      process: {
        title: "Academic Mentorship & Capstone Journey",
        desc: "A step-by-step guidance framework designed to help undergraduate and postgraduate engineering students master their project and ace their viva defense.",
        steps: [
          { num: "01", title: "Topic Selection & Synopsis", desc: "We help you select high-impact, university-approved capstone ideas and draft a formal project synopsis with clear problem statements." },
          { num: "02", title: "Architecture & Code Base", desc: "You receive clean, modular, and thoroughly commented source code with a recorded setup guide and live installation support." },
          { num: "03", title: "IEEE Report & Documentation", desc: "Complete 40-60 page academic documentation matching IEEE / university formatting rules, complete with DFD, UML, and ER diagrams." },
          { num: "04", title: "Viva Coaching & Defense", desc: "1-on-1 mock viva sessions with seasoned software engineers to review questions, code walkthroughs, and presentation slides." }
        ]
      },
      email: "studentsupport.project@gmail.com",
      formAudienceVal: "students"
    }
  };

  // --------------------------------------------------------------------------
  // 2. DOM ELEMENT CACHE
  // --------------------------------------------------------------------------
  const DOM = {
    html: document.documentElement,
    btnCompanies: document.getElementById('theme-btn-companies'),
    btnStudents: document.getElementById('theme-btn-students'),
    navbarLogo: document.getElementById('navbar-logo'),
    brandName: document.getElementById('brand-name'),
    brandTagline: document.getElementById('brand-tagline'),
    
    // Hero Elements
    heroAudienceFlag: document.getElementById('hero-audience-flag'),
    heroStatusText: document.getElementById('hero-status-text'),
    heroTitle: document.getElementById('hero-title'),
    heroDescription: document.getElementById('hero-description'),
    heroPrimaryCta: document.getElementById('hero-primary-cta'),
    heroSecondaryCta: document.getElementById('hero-secondary-cta'),
    heroViewingLabel: document.getElementById('hero-viewing-label'),
    heroSwitchTrigger: document.getElementById('hero-switch-trigger'),
    
    // Specs Card
    specsCardHeading: document.getElementById('specs-card-heading'),
    specsCardSubstatus: document.getElementById('specs-card-substatus'),
    kpiVal1: document.getElementById('kpi-val-1'),
    kpiLbl1: document.getElementById('kpi-lbl-1'),
    kpiVal2: document.getElementById('kpi-val-2'),
    kpiLbl2: document.getElementById('kpi-lbl-2'),
    kpiVal3: document.getElementById('kpi-val-3'),
    kpiLbl3: document.getElementById('kpi-lbl-3'),
    kpiVal4: document.getElementById('kpi-val-4'),
    kpiLbl4: document.getElementById('kpi-lbl-4'),
    specsBulletList: document.getElementById('specs-bullet-list'),

    // Services Deliverables
    deliverableTags: document.querySelectorAll('.deliverable-tag-text'),
    deliverablesWeb: document.getElementById('deliverables-web'),
    deliverablesMobile: document.getElementById('deliverables-mobile'),
    deliverablesAi: document.getElementById('deliverables-ai'),
    deliverablesDesign: document.getElementById('deliverables-design'),
    deliverablesSecurity: document.getElementById('deliverables-security'),

    // Process
    processTitle: document.getElementById('process-title'),
    processDesc: document.getElementById('process-desc'),
    processGrid: document.getElementById('process-grid'),

    // Contact & Form
    contactEmailText: document.getElementById('contact-email-text'),
    contactEmailCard: document.getElementById('contact-email-card'),
    formAudience: document.getElementById('form-audience'),
    inquiryForm: document.getElementById('inquiry-form'),
    formFeedback: document.getElementById('form-feedback'),

    // Mobile Navigation
    mobileToggle: document.getElementById('mobile-toggle'),
    mobileDrawer: document.getElementById('mobile-drawer'),

    // Toast
    toast: document.getElementById('toast-notice'),
    toastMsg: document.getElementById('toast-msg'),

    // Portfolio
    filterChips: document.querySelectorAll('.filter-chip'),
    projectCards: document.querySelectorAll('#projects-grid article')
  };

  // SVG Check Icon for Deliverable Bullets
  const CHECK_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;

  // --------------------------------------------------------------------------
  // 3. THEME SYSTEM CONTROLLER
  // --------------------------------------------------------------------------
  function applyTheme(targetTheme, persist = true) {
    if (targetTheme !== 'companies' && targetTheme !== 'students') {
      targetTheme = 'companies';
    }

    const data = AUDIENCE_DATA[targetTheme];

    // 1. Update Root attribute
    DOM.html.setAttribute('data-theme', targetTheme);

    // 2. Persist in localStorage
    if (persist) {
      try {
        localStorage.setItem('agency_theme_selection', targetTheme);
      } catch (e) {
        // LocalStorage might be restricted
      }
    }

    // 3. Update Segmented Switcher buttons
    const isCompanies = targetTheme === 'companies';
    DOM.btnCompanies.setAttribute('aria-pressed', isCompanies ? 'true' : 'false');
    DOM.btnCompanies.setAttribute('aria-checked', isCompanies ? 'true' : 'false');
    DOM.btnStudents.setAttribute('aria-pressed', isCompanies ? 'false' : 'true');
    DOM.btnStudents.setAttribute('aria-checked', isCompanies ? 'false' : 'true');

    // 4. Update Header Brand Identity
    if (DOM.navbarLogo) {
      DOM.navbarLogo.src = data.logoSrc;
      DOM.navbarLogo.alt = data.logoAlt;
    }
    if (DOM.brandName) DOM.brandName.textContent = data.brandName;
    if (DOM.brandTagline) DOM.brandTagline.textContent = data.brandTagline;

    // 5. Update Hero Section Content
    if (DOM.heroAudienceFlag) DOM.heroAudienceFlag.textContent = data.heroAudienceFlag;
    if (DOM.heroStatusText) DOM.heroStatusText.textContent = data.heroStatusText;
    if (DOM.heroTitle) DOM.heroTitle.innerHTML = data.heroTitle;
    if (DOM.heroDescription) DOM.heroDescription.textContent = data.heroDescription;
    
    if (DOM.heroPrimaryCta) {
      DOM.heroPrimaryCta.childNodes[0].textContent = data.heroPrimaryCtaText + " ";
      DOM.heroPrimaryCta.href = data.heroPrimaryCtaHref;
    }
    if (DOM.heroSecondaryCta) {
      DOM.heroSecondaryCta.textContent = data.heroSecondaryCtaText;
      DOM.heroSecondaryCta.href = data.heroSecondaryCtaHref;
    }

    if (DOM.heroViewingLabel) DOM.heroViewingLabel.textContent = data.heroViewingLabel;
    if (DOM.heroSwitchTrigger) DOM.heroSwitchTrigger.textContent = data.heroSwitchBtnText;

    // 6. Update Specs Card
    if (DOM.specsCardHeading) DOM.specsCardHeading.textContent = data.specsCardHeading;
    if (DOM.specsCardSubstatus) DOM.specsCardSubstatus.textContent = data.specsCardSubstatus;
    if (DOM.kpiVal1) DOM.kpiVal1.innerHTML = data.kpi1Val;
    if (DOM.kpiLbl1) DOM.kpiLbl1.textContent = data.kpi1Lbl;
    if (DOM.kpiVal2) DOM.kpiVal2.innerHTML = data.kpi2Val;
    if (DOM.kpiLbl2) DOM.kpiLbl2.textContent = data.kpi2Lbl;
    if (DOM.kpiVal3) DOM.kpiVal3.innerHTML = data.kpi3Val;
    if (DOM.kpiLbl3) DOM.kpiLbl3.textContent = data.kpi3Lbl;
    if (DOM.kpiVal4) DOM.kpiVal4.innerHTML = data.kpi4Val;
    if (DOM.kpiLbl4) DOM.kpiLbl4.textContent = data.kpi4Lbl;

    if (DOM.specsBulletList) {
      DOM.specsBulletList.innerHTML = data.specsBullets
        .map(bullet => `<li>${bullet}</li>`)
        .join('');
    }

    // 7. Update Services Deliverables Scope
    DOM.deliverableTags.forEach(tag => {
      tag.textContent = data.deliverableTag;
    });

    renderDeliverablesList(DOM.deliverablesWeb, data.deliverables.web);
    renderDeliverablesList(DOM.deliverablesMobile, data.deliverables.mobile);
    renderDeliverablesList(DOM.deliverablesAi, data.deliverables.ai);
    renderDeliverablesList(DOM.deliverablesDesign, data.deliverables.design);
    renderDeliverablesList(DOM.deliverablesSecurity, data.deliverables.security);

    // 8. Update Process Section
    if (DOM.processTitle) DOM.processTitle.textContent = data.process.title;
    if (DOM.processDesc) DOM.processDesc.textContent = data.process.desc;
    if (DOM.processGrid) {
      DOM.processGrid.innerHTML = data.process.steps
        .map(step => `
          <div class="process-step-card">
            <span class="process-step-num">${step.num}</span>
            <h3 class="process-step-title">${step.title}</h3>
            <p class="process-step-desc">${step.desc}</p>
          </div>
        `).join('');
    }

    // 9. Update Contact Channels & Form Dropdown
    if (DOM.contactEmailText) DOM.contactEmailText.textContent = data.email;
    if (DOM.contactEmailCard) DOM.contactEmailCard.href = `mailto:${data.email}`;
    if (DOM.formAudience) DOM.formAudience.value = data.formAudienceVal;

    // 10. Coordinate Audience Portfolio Filter
    const activeChip = document.querySelector('.filter-chip.active');
    const currentFilter = activeChip ? activeChip.getAttribute('data-filter') : 'all';
    if (currentFilter === 'companies' && targetTheme === 'students') {
      filterPortfolio('students');
    } else if (currentFilter === 'students' && targetTheme === 'companies') {
      filterPortfolio('companies');
    }
  }

  function renderDeliverablesList(container, items) {
    if (!container || !items) return;
    container.innerHTML = items
      .map(item => `<li>${CHECK_SVG} <span>${item}</span></li>`)
      .join('');
  }

  // --------------------------------------------------------------------------
  // 4. PORTFOLIO FILTER CONTROLLER
  // --------------------------------------------------------------------------
  function filterPortfolio(filterKey) {
    // 1. Update Tab States
    DOM.filterChips.forEach(chip => {
      const match = chip.getAttribute('data-filter') === filterKey;
      chip.classList.toggle('active', match);
      chip.setAttribute('aria-selected', match ? 'true' : 'false');
      chip.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    // 2. Filter Project Cards
    DOM.projectCards.forEach(card => {
      const cardAudience = (card.getAttribute('data-audience') || '').split(' ');
      const cardCategory = card.getAttribute('data-category') || '';

      let show = false;

      if (filterKey === 'all') {
        show = true;
      } else if (filterKey === 'companies') {
        show = cardAudience.includes('companies');
      } else if (filterKey === 'students') {
        show = cardAudience.includes('students');
      } else if (filterKey === 'webapp') {
        show = cardCategory === 'webapp';
      } else if (filterKey === 'ai') {
        show = cardCategory === 'ai';
      } else if (filterKey === 'security') {
        show = cardCategory === 'security';
      }

      if (show) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. STATIC CONTACT FORM & CLIPBOARD FALLBACK
  // --------------------------------------------------------------------------
  window.handleFormSubmit = function (event) {
    event.preventDefault();
    
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const audience = document.getElementById('form-audience').value;
    const service = document.getElementById('form-service').value;
    const brief = document.getElementById('form-brief').value.trim();

    if (!name || !email || !brief) {
      showToast('Please fill in all required fields.');
      return;
    }

    const currentTheme = DOM.html.getAttribute('data-theme') || 'companies';
    const targetEmail = AUDIENCE_DATA[currentTheme].email;

    // Show on-page confirmation
    if (DOM.formFeedback) {
      DOM.formFeedback.className = 'form-feedback-msg success';
      DOM.formFeedback.innerHTML = `
        <strong>✓ Inquiry Recorded:</strong> Thank you, ${name}. Since this is a static showcase site, a copy of your brief has been prepared. You may also click "Copy Brief & Open Email ↗" to send it directly to <code>${targetEmail}</code>.
      `;
    }

    showToast('Inquiry logged successfully!');
  };

  window.copyAndOpenEmail = function () {
    const name = document.getElementById('form-name').value.trim() || '[Name not provided]';
    const email = document.getElementById('form-email').value.trim() || '[Contact not provided]';
    const audience = document.getElementById('form-audience').value;
    const service = document.getElementById('form-service').options[document.getElementById('form-service').selectedIndex].text;
    const brief = document.getElementById('form-brief').value.trim() || '[No detailed brief provided yet]';

    const currentTheme = DOM.html.getAttribute('data-theme') || 'companies';
    const recipientEmail = AUDIENCE_DATA[currentTheme].email;

    const formattedBrief = 
`PROJECT INQUIRY BRIEF
-----------------------------------------
Sender Name: ${name}
Email/Phone: ${email}
Audience Type: ${audience === 'companies' ? 'Enterprise / Company' : 'Student / Academic Capstone'}
Pillar Requested: ${service}
-----------------------------------------
Problem Statement & Scope:
${brief}
-----------------------------------------
Submitted via CodeCraft Studio / ProjectBuddyHub`;

    // Copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(formattedBrief).then(() => {
        showToast('Brief copied to clipboard! Opening email client...');
      }).catch(() => {
        showToast('Opening email client...');
      });
    }

    // Launch mailto
    const subject = encodeURIComponent(`Project Inquiry: ${name} - ${service}`);
    const body = encodeURIComponent(formattedBrief);
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  // Prefill helper for project cards
  window.prefillInquiry = function (projectName, category) {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }

    const briefInput = document.getElementById('form-brief');
    const serviceSelect = document.getElementById('form-service');
    const nameInput = document.getElementById('form-name');

    if (briefInput) {
      briefInput.value = `Hello, I would like to request detailed architecture walkthrough / capstone package for: ${projectName}.`;
    }

    if (serviceSelect) {
      if (category === 'webapp') serviceSelect.value = 'webapp';
      else if (category === 'ai') serviceSelect.value = 'ai';
      else if (category === 'security') serviceSelect.value = 'security';
      else serviceSelect.value = 'capstone';
    }

    if (nameInput) {
      setTimeout(() => nameInput.focus(), 600);
    }
  };

  window.syncThemeFromForm = function (audienceVal) {
    if (audienceVal === 'companies' || audienceVal === 'students') {
      applyTheme(audienceVal, true);
    }
  };

  // --------------------------------------------------------------------------
  // 6. TOAST NOTIFICATION UTILITY
  // --------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    if (!DOM.toast || !DOM.toastMsg) return;
    DOM.toastMsg.textContent = message;
    DOM.toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      DOM.toast.classList.remove('show');
    }, 3800);
  }

  // --------------------------------------------------------------------------
  // 7. EVENT LISTENERS & INITIALIZATION
  // --------------------------------------------------------------------------
  function init() {
    // 1. Initial theme load (check localStorage, default to companies)
    let savedTheme = 'companies';
    try {
      savedTheme = localStorage.getItem('agency_theme_selection') || 'companies';
    } catch (e) {
      savedTheme = 'companies';
    }
    applyTheme(savedTheme, false);

    // 2. Segmented theme switcher buttons
    if (DOM.btnCompanies) {
      DOM.btnCompanies.addEventListener('click', () => {
        applyTheme('companies', true);
        filterPortfolio('companies');
      });
    }
    if (DOM.btnStudents) {
      DOM.btnStudents.addEventListener('click', () => {
        applyTheme('students', true);
        filterPortfolio('students');
      });
    }

    // 3. Hero switch trigger button
    if (DOM.heroSwitchTrigger) {
      DOM.heroSwitchTrigger.addEventListener('click', () => {
        const current = DOM.html.getAttribute('data-theme') || 'companies';
        const target = current === 'companies' ? 'students' : 'companies';
        applyTheme(target, true);
        filterPortfolio(target);
      });
    }

    // Hero CTAs project audience coordination
    if (DOM.heroPrimaryCta) {
      DOM.heroPrimaryCta.addEventListener('click', () => {
        const currentTheme = DOM.html.getAttribute('data-theme') || 'companies';
        if (currentTheme === 'students') {
          filterPortfolio('students');
        }
      });
    }
    if (DOM.heroSecondaryCta) {
      DOM.heroSecondaryCta.addEventListener('click', () => {
        const currentTheme = DOM.html.getAttribute('data-theme') || 'companies';
        if (currentTheme === 'companies') {
          filterPortfolio('companies');
        }
      });
    }

    // 4. Portfolio filter chips
    DOM.filterChips.forEach(chip => {
      chip.addEventListener('click', function () {
        const filterKey = this.getAttribute('data-filter');
        filterPortfolio(filterKey);
      });
    });

    // 5. Mobile Drawer Toggle
    if (DOM.mobileToggle && DOM.mobileDrawer) {
      DOM.mobileToggle.addEventListener('click', () => {
        const isOpen = DOM.mobileDrawer.classList.toggle('open');
        DOM.mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close on drawer link click
      document.querySelectorAll('.mobile-drawer-link').forEach(link => {
        link.addEventListener('click', () => {
          DOM.mobileDrawer.classList.remove('open');
          DOM.mobileToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // 6. Keyboard accessibility for segmented switcher (Left/Right arrow keys)
    const switcher = document.querySelector('.segmented-switcher');
    if (switcher) {
      switcher.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          applyTheme('students', true);
          DOM.btnStudents.focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          applyTheme('companies', true);
          DOM.btnCompanies.focus();
        }
      });
    }

    // 7. Update copyright year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
