import React, { useEffect } from 'react';
import './styles.css';

const portfolioMarkup = String.raw`
  <div class="page-bg">
    <div class="live-lines"></div>
    <div class="live-particles"></div><div class="grid-overlay"></div><div class="orb orb-red"></div><div class="orb orb-cyan"></div></div>
  <div class="cursor-glow"></div>
  <canvas class="smoke-canvas" aria-hidden="true"></canvas>
  <header class="site-header site-header-v509">
    <a href="#home" class="brand" aria-label="Back to top">
      <span class="brand-avatar"><img src="profile.png" alt="Muhammad Kevin Aribi"></span>
      <span class="brand-copy">
        <span class="brand-text">Muhammad Kevin Aribi</span>
        <span class="brand-subtitle">Corporate Operations &amp; BI Portfolio</span>
      </span>
    </a>
    <nav class="nav"><a href="#about">About Me</a><a href="#experience">Experience</a><a href="#proof">Scope of Work</a><a href="#capabilities">Capabilities</a><a href="#certifications">Certificates</a><a href="#contact" class="nav-contact">Contact</a></nav>
  </header>
  <main>
    <section id="home" class="hero hero-minimal section hero-aether">
      <canvas class="aether-canvas" aria-hidden="true"></canvas>
      <div class="aether-vignette" aria-hidden="true"></div>
      <div class="hero-center">
        <h1 class="hero-name">Muhammad Kevin Aribi</h1>
        <p class="hero-subtitle">Corporate Operations &amp; BI Portfolio</p>
        <a href="#about" class="scroll-cue" aria-label="Scroll to About Me">
          <span class="scroll-cue-line"></span>
          <span class="scroll-cue-circle">⌄</span>
        </a>
      </div>
    </section>

    <section id="about" class="section about-section">
      <div class="section-heading capabilities-heading reveal">
        <div class="capabilities-kicker-wrap">
          <div class="capabilities-kicker">
            <span class="capabilities-kicker-line"></span>
            <span class="capabilities-kicker-text">About Me</span>
          </div>
        </div>
      </div>
      <div class="about-shell reveal">
        <div class="about-top-grid">
          <div class="about-column about-left">
            <div class="portrait-shell about-portrait-shell about-portrait-shell-large">
              <div class="portrait-ring"><img src="profile.png" alt="Muhammad Kevin Aribi profile photo" class="profile-photo"></div>
              <div class="scan-line"></div>
            </div>
          </div>

          <div class="about-column about-right">
            <div class="hero-info-cards about-info-cards about-info-cards-right">
              <div class="info-card"><small>Current Role</small><strong>Business Project</strong><span>Telkomsel Project under Neuronworks</span></div>
              <div class="info-card"><small>Education</small><strong>Human Resource Management</strong><span>Universitas Bina Sarana Informatika</span></div>
            </div>
            <div class="hero-actions about-actions"><a href="#proof" class="btn primary">View Scope of Work</a><a href="cv-muhammad-kevin-aribi.pdf" class="btn secondary" target="_blank">Download CV</a></div>
            <div class="hero-metrics about-metrics about-metrics-right">
              <div class="metric-card"><strong>2025 - Present</strong><span>Telkomsel Project</span></div>
              <div class="metric-card"><strong>40+ Servers</strong><span>BI Monitoring Support</span></div>
              <div class="metric-card"><strong>Provide All Access</strong><span>D2P Activities</span></div>
            </div>
          </div>
        </div>

        <div class="about-bottom-stack">
          <div class="title-chip about-title-chip"><strong>Business Project</strong><span>IT Finance Business Intelligence Department</span></div>
          <div class="about-description-block about-description-full">
            <p class="hero-copy hero-about-copy about-left-copy">I started building things early - from reselling game accounts to running my own sneaker business, Enthusiast Sply, focused on Air Jordan 1 and ran for 4 years (2020-2024). Today, I work as a Business Project for Telkomsel under Neuronworks, where I handle business operations, project coordination, and system monitoring across multiple Business Intelligence domains.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="experience" class="section experience">
      <div class="section-heading capabilities-heading reveal">
        <div class="capabilities-kicker-wrap">
          <div class="capabilities-kicker">
            <span class="capabilities-kicker-line"></span>
            <span class="capabilities-kicker-text">Experience Highlights</span>
          </div>
        </div>
        
      </div>
      <div class="timeline">
        <article class="timeline-card reveal">
          <div class="timeline-year">2023</div>
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="card-topline">Telkom Indonesia</div>
            <h3>Technical Support Administrative Intern</h3>
            <p>Supported technical and administrative operations, performance reporting, data recap, DOA unit workflow, and internal creative materials.</p>
            <details class="experience-works">
              <summary><span>Selected Works</span><em>Tap to expand</em></summary>
              <div class="work-gallery">
                <a class="work-card" href="work-telkom-doa-charity.webp" target="_blank" rel="noopener">
                  <img src="work-telkom-doa-charity.webp" alt="DOA Charity event visual banner" loading="lazy">
                  <span>Designed a visual banner for a routine charity event.</span>
                </a>
                <a class="work-card" href="work-telkom-farewell-1.webp" target="_blank" rel="noopener">
                  <img src="work-telkom-farewell-1.webp" alt="Farewell documentation during internship period" loading="lazy">
                  <span>Farewell documentation during my internship period — Dec 2023.</span>
                </a>
                <a class="work-card" href="work-telkom-farewell-2.webp" target="_blank" rel="noopener">
                  <img src="work-telkom-farewell-2.webp" alt="Farewell documentation moment in December 2023" loading="lazy">
                  <span>Farewell documentation during my internship period — Dec 2023.</span>
                </a>
              </div>
            </details>
          </div>
        </article>
        <article class="timeline-card reveal">
          <div class="timeline-year">2020–2024</div>
          <div class="timeline-dot cyan"></div>
          <div class="timeline-content">
            <div class="card-topline cyan-text">Enthusiast Sply</div>
            <h3>Founder</h3>
            <p>Built and scaled a sneaker reselling business specializing in Air Jordan 1, managed 300+ transactions, developed sourcing strategy, and achieved Power Merchant PRO on Tokopedia.</p>
            <details class="experience-works">
              <summary><span>Selected Works</span><em>Tap to expand</em></summary>
              <div class="work-gallery">
                <a class="work-card" href="work-enthusiast-transactions.webp" target="_blank" rel="noopener">
                  <img src="work-enthusiast-transactions.webp" alt="Enthusiast Sply marketplace reviews and customer transactions" loading="lazy">
                  <span>Managed 300+ sneaker transactions through marketplace and direct selling channels.</span>
                </a>
                <a class="work-card" href="work-enthusiast-profile-card.webp" target="_blank" rel="noopener">
                  <img src="work-enthusiast-profile-card.webp" alt="Enthusiast Sply profile card" loading="lazy">
                  <span>Profile card presenting Enthusiast Sply’s services.</span>
                </a>
                <a class="work-card" href="work-enthusiast-documentation.webp" target="_blank" rel="noopener">
                  <img src="work-enthusiast-documentation.webp" alt="Enthusiast Sply product event and inventory documentation" loading="lazy">
                  <span>Documented products, event participation, and sneaker inventory.</span>
                </a>
              </div>
            </details>
          </div>
        </article>
        <article class="timeline-card reveal">
          <div class="timeline-year">2025 - Present</div>
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="card-topline">Telkomsel Project under Neuronworks</div>
            <h3>Business Project - IT Finance Business Intelligence Department</h3>
            <p>Coordinating business operations and project activities, managing escalations, monitoring 40+ BI servers, preparing monthly operational review decks, and managing access provisioning.</p>
            <a class="timeline-scope-link" href="#proof">Current scope detailed in Scope of Work section →</a>
          </div>
        </article>
      </div>
    </section>
    <section id="proof" class="section proof scope-section">
      <div class="proof-panel proof-panel-refined scope-panel reveal">
        <div class="proof-header proof-work-copy scope-work-copy">
          <span class="case-tag">Scope of Work</span>
          <h3>Business Project</h3>
          <div class="proof-responsibility-list scope-responsibility-list">
            <p><span class="scope-icon" aria-hidden="true">▦</span><span>Acted as PIC for utilization of all Business Intelligence servers (40+ servers).</span></p>
            <p><span class="scope-icon" aria-hidden="true">▧</span><span>Acted as PIC for presentation deck preparation for monthly operational reviews.</span></p>
            <p><span class="scope-icon" aria-hidden="true">◎</span><span>Acted as PIC for all required access for both <strong>[Dev &amp; Ops]</strong> team during D2P activities.</span></p>
            <p><span class="scope-icon" aria-hidden="true">◇</span><span>Acted as PIC for coordinating business operations and project activities with client.</span></p>
          </div>
        </div>
        <div class="selected-outputs" aria-label="Selected outputs from Telkomsel project">
          <div class="selected-outputs-title">
            <span class="selected-outputs-icon" aria-hidden="true">⌁</span>
            <h4>Selected Outputs</h4>
          </div>
          <div class="selected-output-list">
            <a class="selected-output-card" href="work-telkomsel-monitoring-tools.webp" target="_blank" rel="noopener">
              <img src="work-telkomsel-monitoring-tools.webp" alt="BI server utilization monitoring dashboard" loading="lazy">
              <div class="selected-output-copy">
                <span class="selected-output-number">01</span>
                <strong>Monitoring tools for BI server utilization</strong>
                <p>Monitored BI server utilization through internal monitoring tools.</p>
              </div>
            </a>
            <a class="selected-output-card" href="work-telkomsel-omr-deck.webp" target="_blank" rel="noopener">
              <img src="work-telkomsel-omr-deck.webp" alt="Operational Monthly Review presentation deck" loading="lazy">
              <div class="selected-output-copy">
                <span class="selected-output-number">02</span>
                <strong>Operational Monthly Review deck</strong>
                <p>Prepared one of the presentation decks for Operational Monthly Review.</p>
              </div>
            </a>
            <a class="selected-output-card" href="work-telkomsel-terminal-check.webp" target="_blank" rel="noopener">
              <img src="work-telkomsel-terminal-check.webp" alt="Terminal-based server utilization validation" loading="lazy">
              <div class="selected-output-copy">
                <span class="selected-output-number">03</span>
                <strong>Terminal-based server utilization checks</strong>
                <p>Validated server performance directly through terminal-based utilization checks.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="capabilities" class="section capabilities">
      <div class="section-heading capabilities-heading reveal">
        <div class="capabilities-kicker-wrap">
          <div class="capabilities-kicker">
            <span class="capabilities-kicker-line"></span>
            <span class="capabilities-kicker-text">Core Capabilities</span>
          </div>
        </div>
        <h2>Where I can create value.</h2>
      </div>
      <div class="capability-ticker-shell reveal">
        <div class="capability-ticker-track">
          <span>Business Operations</span>
          <span>Project Coordination</span>
          <span>Data Monitoring</span>
          <span>Operational Reporting</span>
          <span>Documentation</span>
          <span>Corporate Presentation</span>
          <span>Problem Solving</span>
          <span>Business Operations</span>
          <span>Project Coordination</span>
          <span>Data Monitoring</span>
          <span>Operational Reporting</span>
          <span>Documentation</span>
          <span>Corporate Presentation</span>
          <span>Problem Solving</span>
        </div>
      </div>
      


<div class="tools-grid reveal tool-showcase-grid">
        <div class="tool-showcase-card">
          <div class="tool-logo-stage office-stage">
            <img src="logo-word.png" alt="Microsoft Word" class="tool-real-logo office-tool-logo logo-motion motion-one">
            <img src="logo-excel.png" alt="Microsoft Excel" class="tool-real-logo office-tool-logo logo-motion motion-two">
            <img src="logo-ppt.png" alt="Microsoft PowerPoint" class="tool-real-logo office-tool-logo logo-motion motion-three">
            <img src="logo-microsoft.png" alt="Microsoft" class="tool-real-logo microsoft-tool-logo logo-motion motion-four">
          </div>
          <div class="tool-card-content">
            <h3>Microsoft Office</h3>
            <p>Excel, Word, PowerPoint, Documentation, Presentations</p>
          </div>
        </div>

        <div class="tool-showcase-card">
          <div class="tool-logo-stage duo-stage">
            <img src="logo-canva.png" alt="Canva" class="tool-real-logo canva-tool-logo logo-motion motion-one">
            <img src="logo-figma.png" alt="Figma" class="tool-real-logo figma-tool-logo logo-motion motion-two">
          </div>
          <div class="tool-card-content">
            <h3>Canva & Figma</h3>
            <p>Presentation decks, visual assets, and basic prototyping</p>
          </div>
        </div>

        <div class="tool-showcase-card">
          <div class="tool-logo-stage single-stage">
            <img src="logo-db.png" alt="Database / SQL" class="tool-real-logo db-tool-logo logo-motion motion-one">
          </div>
          <div class="tool-card-content">
            <h3>SQL Basic</h3>
            <p>Basic querying and understanding of data structure</p>
          </div>
        </div>
      </div>

      <div class="supporting-tools-panel supporting-tools-rebuilt reveal">
        <div class="supporting-tools-title-row">
          <span></span>
          <h3>Supporting Tools</h3>
          <span></span>
        </div>
        <div class="supporting-tools-dock">
          <div class="support-tool-card motion-one"><img src="logo-blackbox.png" alt="Blackbox" class="support-tool-logo"></div>
          <div class="support-tool-card motion-two"><img src="logo-vn.png" alt="VN" class="support-tool-logo"></div>
          <div class="support-tool-card motion-three"><img src="logo-lightroom.png" alt="Adobe Lightroom" class="support-tool-logo"></div>
          <div class="support-tool-card motion-four"><img src="logo-chatgpt.png" alt="ChatGPT" class="support-tool-logo"></div>
          <div class="support-tool-card motion-one"><img src="logo-claude.png" alt="Claude" class="support-tool-logo"></div>
          <div class="support-tool-card motion-two"><img src="logo-terminal.png" alt="Terminal" class="support-tool-logo"></div>
          <div class="support-tool-card motion-three"><img src="logo-capcut.png" alt="CapCut" class="support-tool-logo"></div>
          <div class="support-tool-card motion-four"><img src="logo-gemini.png" alt="Gemini" class="support-tool-logo"></div>
        </div>
      </div>
    </section>

    <section id="certifications" class="section certifications clean-certifications">
      <div class="section-heading capabilities-heading reveal">
        <div class="capabilities-kicker-wrap">
          <div class="capabilities-kicker">
            <span class="capabilities-kicker-line"></span>
            <span class="capabilities-kicker-text">Certifications</span>
          </div>
        </div>
        
      </div>
      <div class="cert-clean-grid">
        <article class="cert-clean-card reveal">
          <div class="cert-clean-preview">
            <a href="cert-hackerrank-sql.png" target="_blank" class="cert-clean-link single" aria-label="Preview Database SQL Certified certificate">
              <span class="cert-magnify" aria-hidden="true"></span>
              <img src="cert-hackerrank-sql.png" alt="Database SQL Certified by HackerRank">
            </a>
          </div>
          <div class="cert-clean-info">
            <div class="cert-clean-tags"><span>Data</span><span>SQL</span></div>
            <h3>Database SQL Certified</h3>
            <div class="cert-clean-issuer">HackerRank</div>
            <p>It includes simple queries, relationships, aggregator.</p>
          </div>
        </article>

        <article class="cert-clean-card reveal">
          <div class="cert-clean-preview">
            <a href="cert-idx-sekolah-pasar-modal.png" target="_blank" class="cert-clean-link single" aria-label="Preview Sekolah Pasar Modal certificate">
              <span class="cert-magnify" aria-hidden="true"></span>
              <img src="cert-idx-sekolah-pasar-modal.png" alt="Sekolah Pasar Modal certificate by Indonesia Stock Exchange">
            </a>
          </div>
          <div class="cert-clean-info">
            <div class="cert-clean-tags"><span>Capital Market</span><span>Literacy</span></div>
            <h3>Sekolah Pasar Modal</h3>
            <div class="cert-clean-issuer">Indonesia Stock Exchange</div>
            <p>Financial market literacy, fundamentals, and technical.</p>
          </div>
        </article>

        <article class="cert-clean-card reveal cert-clean-card--market">
          <div class="cert-clean-preview cert-clean-preview--market">
            <div class="cert-clean-double cert-clean-double--market">
              <a href="cert-lsp-market-research-management.png" target="_blank" class="cert-clean-link tall" aria-label="Preview Market Research Management certificate page 1">
                <span class="cert-magnify" aria-hidden="true"></span>
                <img src="cert-lsp-market-research-management.png" alt="Market Research Management certificate page 1 by LSP-PM">
              </a>
              <a href="cert-lsp-market-research-management-2.png" target="_blank" class="cert-clean-link tall" aria-label="Preview Market Research Management certificate page 2">
                <span class="cert-magnify" aria-hidden="true"></span>
                <img src="cert-lsp-market-research-management-2.png" alt="Market Research Management certificate page 2 by LSP-PM">
              </a>
            </div>
          </div>
          <div class="cert-clean-info">
            <div class="cert-clean-tags"><span>Research</span><span>Business Insight</span></div>
            <h3>Market Research</h3>
            <div class="cert-clean-issuer">Lembaga Sertifikasi Profesi Pasar Modal (LSP-PM)</div>
            <p>Define customer needs, complaints. Planning sales target, delivery target.</p>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="section contact">
      <div class="contact-card reveal">
        <div class="section-heading capabilities-heading contact-heading">
          <div class="capabilities-kicker-wrap">
            <div class="capabilities-kicker">
              <span class="capabilities-kicker-line"></span>
              <span class="capabilities-kicker-text">Seeking Opportunities</span>
            </div>
          </div>
          
        </div>
        <div class="seeking-table" aria-label="Seeking job roles">
          <span>Business Project</span>
          <span>Business Analyst</span>
          <span>Business Support</span>
          <span>Project Management</span>
          <span>Client-Facing Roles</span>
          <span>UI/UX Designer</span>
          <span>Design Creative</span>
          <span>Design by Project</span>
        </div>
        <div class="contact-bottom">
          <div class="qr-card"><img src="cv-qr.png" alt="QR code to CV" /><div><strong>Scan for CV</strong><span>Works best once this website is hosted online.</span></div></div>
          <div class="contact-links"><a href="mailto:kevinaribi064@gmail.com">kevinaribi064@gmail.com</a><a href="tel:+6281294379119">0812 9437 9119</a><a href="https://www.linkedin.com/in/muhammad-kevin-aribi" target="_blank">LinkedIn Profile</a><a href="cv-muhammad-kevin-aribi.pdf" target="_blank">Download CV</a></div>
        </div>
      </div>
    </section>
  </main>
  <script src="script.js"></script>
`;

function initializePortfolioInteractions() {
/* V50.18 — performance-safe interactions + lightweight smoke */
(() => {
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach((item) => observer.observe(item));
  } else {
    reveals.forEach((item) => item.classList.add("active"));
  }
})();

(() => {
  const glow = document.querySelector(".cursor-glow");
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
  if (!glow || reduceMotion || !finePointer) {
    if (glow) glow.style.display = "none";
    return;
  }

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let raf = 0;

  const render = () => {
    raf = 0;
    glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };

  window.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
    if (!raf) raf = requestAnimationFrame(render);
  }, { passive: true });

  window.addEventListener("pointerleave", () => { glow.style.opacity = "0"; }, { passive: true });
  window.addEventListener("pointerenter", () => { glow.style.opacity = "1"; }, { passive: true });
})();



(() => {
  const canvas = document.querySelector(".aether-canvas");
  const hero = document.querySelector(".hero-aether");
  if (!canvas || !hero) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let raf = 0;
  let running = true;
  const mouse = { x: null, y: null, radius: 190 };

  const palette = [
    "rgba(170, 100, 255, .86)",
    "rgba(33, 214, 255, .72)",
    "rgba(255, 45, 70, .58)",
  ];

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
  }

  function initParticles() {
    const base = Math.floor((width * height) / 16500);
    const count = Math.max(34, Math.min(92, base));
    particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.34,
      vy: (Math.random() - 0.5) * 0.34,
      size: 1 + Math.random() * 1.7,
      color: palette[i % palette.length],
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function drawParticle(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function updateParticle(p, t) {
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0 && dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        p.x -= (dx / dist) * force * 2.35;
        p.y -= (dy / dist) * force * 2.35;
      }
    }

    p.x += p.vx + Math.sin(t * 0.00035 + p.phase) * 0.08;
    p.y += p.vy + Math.cos(t * 0.00030 + p.phase) * 0.08;

    if (p.x < -20) p.x = width + 20;
    if (p.x > width + 20) p.x = -20;
    if (p.y < -20) p.y = height + 20;
    if (p.y > height + 20) p.y = -20;

    drawParticle(p);
  }

  function connect() {
    const maxDistance = Math.min(190, Math.max(105, width / 8.4));
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < maxDistance) {
          const opacity = (1 - dist / maxDistance) * 0.38;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(185, 115, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function draw(t) {
    if (running) {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(2, 4, 10, .34)";
      ctx.fillRect(0, 0, width, height);
      for (const p of particles) updateParticle(p, t);
      connect();
    }
    raf = requestAnimationFrame(draw);
  }

  function setMouse(event) {
    const rect = hero.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  }

  function clearMouse() {
    mouse.x = null;
    mouse.y = null;
  }

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 160);
  }, { passive: true });
  hero.addEventListener("pointermove", setMouse, { passive: true });
  hero.addEventListener("pointerleave", clearMouse, { passive: true });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting && document.visibilityState === "visible";
    }, { threshold: 0.08 });
    observer.observe(hero);
  }

  document.addEventListener("visibilitychange", () => {
    running = document.visibilityState === "visible";
  });

  resize();
  raf = requestAnimationFrame(draw);
})();

(() => {
  const canvas = document.querySelector(".smoke-canvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const smallScreen = window.matchMedia && window.matchMedia("(max-width: 760px)").matches;
  const lowPowerHint = navigator.deviceMemory && navigator.deviceMemory <= 4;
  if (reduceMotion || smallScreen || lowPowerHint) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let running = true;
  let lastFrame = 0;
  const frameInterval = 1000 / 24;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    createParticles();
  }

  function createParticles() {
    const count = clamp(Math.floor((width * height) / 82000), 12, 30);
    particles = Array.from({ length: count }, () => {
      const z = Math.random();
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        r: 84 + Math.random() * 130,
        vx: (-0.035 + Math.random() * 0.07) * (0.5 + z),
        vy: (-0.035 - Math.random() * 0.045) * (0.5 + z),
        hue: Math.random() > 0.62 ? "cyan" : "red",
        phase: Math.random() * Math.PI * 2
      };
    });
  }

  function drawBlob(p, t) {
    const depth = 0.56 + p.z * 0.78;
    const x = p.x + mouseX * (p.z - 0.35) * 18 + Math.sin(t * 0.00008 + p.phase) * 16 * p.z;
    const y = p.y + mouseY * (p.z - 0.35) * 12 + Math.cos(t * 0.00007 + p.phase) * 12 * p.z;
    const radius = p.r * depth;
    const base = p.hue === "cyan" ? "rgba(66, 188, 255," : "rgba(255, 78, 112,";
    const g = ctx.createRadialGradient(x, y, radius * 0.04, x, y, radius);
    g.addColorStop(0, `${base}${0.022 + p.z * 0.014})`);
    g.addColorStop(0.45, `${base}${0.010 + p.z * 0.010})`);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate(t) {
    if (running && t - lastFrame >= frameInterval) {
      lastFrame = t;
      ctx.clearRect(0, 0, width, height);
      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;
      ctx.globalCompositeOperation = "source-over";

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = height + p.r;
        if (p.y > height + p.r) p.y = -p.r;
        drawBlob(p, t);
      }
    }
    requestAnimationFrame(animate);
  }

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 180);
  }, { passive: true });

  window.addEventListener("pointermove", (event) => {
    targetMouseX = (event.clientX / Math.max(width, 1) - 0.5) * 2;
    targetMouseY = (event.clientY / Math.max(height, 1) - 0.5) * 2;
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    running = document.visibilityState === "visible";
  });

  const hero = document.querySelector(".hero");
  if (hero && "IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting && document.visibilityState === "visible";
      canvas.style.opacity = running ? "" : "0";
    }, { threshold: 0.04 });
    heroObserver.observe(hero);
  }

  resize();
  requestAnimationFrame(animate);
})();

(() => {
  const sections = [...document.querySelectorAll("main > section")];
  if (!("IntersectionObserver" in window) || !sections.length) return;
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.find((entry) => entry.isIntersecting);
    if (!visible) return;
    sections.forEach((section) => section.classList.remove("section-active"));
    visible.target.classList.add("section-active");
  }, { threshold: 0.36 });
  sections.forEach((section) => observer.observe(section));
})();

}

export default function App() {
  useEffect(() => {
    initializePortfolioInteractions();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />;
}
