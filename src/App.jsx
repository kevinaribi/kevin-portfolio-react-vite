import React, { useEffect, useState } from 'react';
import './styles.css';

const navItems = [
  ['About Me', '#about'],
  ['Experience', '#experience'],
  ['Scope of Work', '#proof'],
  ['Capabilities', '#capabilities'],
  ['Certificates', '#certifications'],
  ['Contact', '#contact'],
];

const metrics = [
  ['2025 - Present', 'Telkomsel Project'],
  ['40+ Servers', 'BI Monitoring Support'],
  ['Provide All Access', 'D2P Activities'],
];

const experiences = [
  {
    year: '2023',
    company: 'Telkom Indonesia',
    role: 'Technical Support Administrative Intern',
    description:
      'Supported technical and administrative operations, performance reporting, data recap, DOA unit workflow, and internal creative materials.',
    works: [
      ['Designed a visual banner for a routine charity event.', 'work-telkom-doa-charity.webp'],
      ['Farewell documentation during my internship period — Dec 2023.', 'work-telkom-farewell-1.webp'],
      ['Farewell documentation during my internship period — Dec 2023.', 'work-telkom-farewell-2.webp'],
    ],
  },
  {
    year: '2020–2024',
    company: 'Enthusiast Sply',
    role: 'Founder',
    description:
      'Built and scaled a sneaker reselling business specializing in Air Jordan 1, managed 300+ transactions, developed sourcing strategy, and achieved Power Merchant PRO on Tokopedia.',
    works: [
      ['Managed 300+ sneaker transactions through marketplace and direct selling channels.', 'work-enthusiast-transactions.webp'],
      ['Profile card presenting Enthusiast Sply’s services.', 'work-enthusiast-profile-card.webp'],
      ['Documented products, event participation, and sneaker inventory.', 'work-enthusiast-documentation.webp'],
    ],
  },
  {
    year: '2025 - Present',
    company: 'Telkomsel Project under Neuronworks',
    role: 'Business Project - IT Finance Business Intelligence Department',
    description:
      'Coordinating business operations and project activities, managing escalations, monitoring 40+ BI servers, preparing monthly operational review decks, and managing access provisioning.',
    scopeLink: 'Current scope detailed in Scope of Work section →',
  },
];

const responsibilities = [
  'Acted as PIC for utilization of all Business Intelligence servers (40+ servers).',
  'Acted as PIC for presentation deck preparation for monthly operational reviews.',
  'Acted as PIC for all required access for both [Dev & Ops] team during D2P activities.',
  'Acted as PIC for coordinating business operations and project activities with client.',
];

const outputs = [
  {
    number: '01',
    title: 'Monitoring tools for BI server utilization',
    description: 'Monitored BI server utilization through internal monitoring tools.',
    image: 'work-telkomsel-monitoring-tools.webp',
  },
  {
    number: '02',
    title: 'Operational Monthly Review deck',
    description: 'Prepared one of the presentation decks for Operational Monthly Review.',
    image: 'work-telkomsel-omr-deck.webp',
  },
  {
    number: '03',
    title: 'Terminal-based server utilization checks',
    description: 'Validated server performance directly through terminal-based utilization checks.',
    image: 'work-telkomsel-terminal-check.webp',
  },
];

const capabilityTicker = [
  'Business Operations',
  'Project Coordination',
  'Data Monitoring',
  'Operational Reporting',
  'Documentation',
  'Corporate Presentation',
  'Problem Solving',
];

const coreTools = [
  {
    name: 'Microsoft Office',
    description: 'Excel, Word, PowerPoint, Documentation, Presentations',
    logos: ['logo-word.png', 'logo-excel.png', 'logo-ppt.png', 'logo-microsoft.png'],
  },
  {
    name: 'Canva & Figma',
    description: 'Presentation decks, visual assets, and basic prototyping',
    logos: ['logo-canva.png', 'logo-figma.png'],
  },
  {
    name: 'SQL Basic',
    description: 'Basic querying and understanding of data structure',
    logos: ['logo-db.png'],
  },
];

const supportingTools = [
  ['Blackbox', 'logo-blackbox.png'],
  ['VN', 'logo-vn.png'],
  ['Adobe Lightroom', 'logo-lightroom.png'],
  ['ChatGPT', 'logo-chatgpt.png'],
  ['Claude', 'logo-claude.png'],
  ['Terminal', 'logo-terminal.png'],
  ['CapCut', 'logo-capcut.png'],
  ['Gemini', 'logo-gemini.png'],
];

const certifications = [
  {
    tags: ['Data', 'SQL'],
    title: 'Database SQL Certified',
    issuer: 'HackerRank',
    description: 'It includes simple queries, relationships, aggregator.',
    images: ['cert-hackerrank-sql.png'],
  },
  {
    tags: ['Capital Market', 'Literacy'],
    title: 'Sekolah Pasar Modal',
    issuer: 'Indonesia Stock Exchange',
    description: 'Financial market literacy, fundamentals, and technical.',
    images: ['cert-idx-sekolah-pasar-modal.png'],
  },
  {
    tags: ['Research', 'Business Insight'],
    title: 'Market Research',
    issuer: 'Lembaga Sertifikasi Profesi Pasar Modal (LSP-PM)',
    description: 'Define customer needs, complaints. Planning sales target, delivery target.',
    images: ['cert-lsp-market-research-management.png', 'cert-lsp-market-research-management-2.png'],
  },
];

const roles = [
  'Business Project',
  'Business Analyst',
  'Business Support',
  'Project Management',
  'Client-Facing Roles',
  'UI/UX Designer',
  'Design Creative',
  'Design by Project',
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function HeroLiquidCanvas({ theme = 'night' }) {
  useEffect(() => {
    const canvas = document.querySelector('.hero-liquid-canvas');
    if (!canvas) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBlob = (x, y, radiusX, radiusY, alpha, rgb) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, Math.max(radiusX, radiusY));
      const blobColor = rgb || (theme === 'day' ? '56,52,48' : '255,255,255');
      gradient.addColorStop(0, `rgba(${blobColor},${alpha})`);
      gradient.addColorStop(0.42, `rgba(${blobColor},${alpha * 0.38})`);
      gradient.addColorStop(1, `rgba(${blobColor},0)`);
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(radiusX / Math.max(radiusX, radiusY), radiusY / Math.max(radiusX, radiusY));
      ctx.translate(-x, -y);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, Math.max(radiusX, radiusY), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const render = (time = 0) => {
      const t = time * 0.00055;
      ctx.clearRect(0, 0, width, height);

      const isDay = theme === 'day';
      const base = ctx.createLinearGradient(0, 0, width, height);
      if (isDay) {
        base.addColorStop(0, '#f8f5ef');
        base.addColorStop(0.38, '#ede7db');
        base.addColorStop(0.7, '#e5ddd0');
        base.addColorStop(1, '#fbf8f2');
      } else {
        base.addColorStop(0, '#070707');
        base.addColorStop(0.5, '#111111');
        base.addColorStop(1, '#030303');
      }
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.globalCompositeOperation = isDay ? 'multiply' : 'screen';
      ctx.filter = isDay ? 'blur(46px)' : 'blur(34px)';

      drawBlob(
        width * (0.22 + Math.sin(t * 1.1) * 0.055),
        height * (0.33 + Math.cos(t * 1.4) * 0.055),
        width * 0.34,
        height * 0.24,
        isDay ? 0.22 : 0.48
      );
      drawBlob(
        width * (0.73 + Math.cos(t * 0.9) * 0.05),
        height * (0.58 + Math.sin(t * 1.25) * 0.05),
        width * 0.36,
        height * 0.28,
        isDay ? 0.14 : 0.28
      );
      drawBlob(
        width * (0.48 + Math.sin(t * 1.6 + 1.4) * 0.035),
        height * (0.42 + Math.cos(t * 1.15 + 0.8) * 0.04),
        width * 0.24,
        height * 0.18,
        isDay ? 0.095 : 0.18
      );
      ctx.restore();

      if (isDay) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.filter = 'blur(52px)';
        drawBlob(width * (0.19 + Math.cos(t * 0.72) * 0.03), height * (0.22 + Math.sin(t * 0.95) * 0.03), width * 0.26, height * 0.19, 0.28, '255,255,255');
        drawBlob(width * (0.77 + Math.sin(t * 0.82) * 0.03), height * (0.66 + Math.cos(t * 1.04) * 0.03), width * 0.24, height * 0.18, 0.16, '255,255,255');
        ctx.restore();
      }

      ctx.save();
      ctx.globalCompositeOperation = isDay ? 'multiply' : 'screen';
      ctx.filter = isDay ? 'blur(30px)' : 'blur(22px)';
      ctx.lineCap = 'round';

      const ribbon = (offset, alpha, lineWidth) => {
        const gradient = ctx.createLinearGradient(0, height * 0.18, width, height * 0.86);
        const ribbonColor = theme === 'day' ? '78,72,66' : '255,255,255';
        gradient.addColorStop(0, `rgba(${ribbonColor},${alpha * 0.15})`);
        gradient.addColorStop(0.42, `rgba(${ribbonColor},${alpha})`);
        gradient.addColorStop(0.72, `rgba(${ribbonColor},${alpha * 0.28})`);
        gradient.addColorStop(1, `rgba(${ribbonColor},0)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        const startY = height * (0.34 + Math.sin(t + offset) * 0.055);
        ctx.moveTo(-width * 0.1, startY);
        ctx.bezierCurveTo(
          width * (0.14 + Math.sin(t * 1.05 + offset) * 0.06),
          height * (0.12 + Math.cos(t * 1.2 + offset) * 0.09),
          width * (0.44 + Math.cos(t * 0.8 + offset) * 0.08),
          height * (0.62 + Math.sin(t * 1.1 + offset) * 0.08),
          width * 1.08,
          height * (0.46 + Math.cos(t * 0.9 + offset) * 0.08)
        );
        ctx.stroke();
      };

      ribbon(0.4, isDay ? 0.095 : 0.13, width * (isDay ? 0.1 : 0.08));
      ribbon(2.25, isDay ? 0.072 : 0.09, width * (isDay ? 0.125 : 0.11));
      ribbon(4.1, isDay ? 0.055 : 0.07, width * (isDay ? 0.085 : 0.07));
      ctx.restore();

      ctx.save();
      const shade = ctx.createRadialGradient(width * 0.52, height * 0.42, 0, width * 0.52, height * 0.42, width * 0.68);
      if (theme === 'day') {
        shade.addColorStop(0, 'rgba(255,255,255,0)');
        shade.addColorStop(0.72, 'rgba(255,255,255,0.04)');
        shade.addColorStop(1, 'rgba(255,255,255,0.26)');
      } else {
        shade.addColorStop(0, 'rgba(0,0,0,0)');
        shade.addColorStop(0.78, 'rgba(0,0,0,0.24)');
        shade.addColorStop(1, 'rgba(0,0,0,0.72)');
      }
      ctx.fillStyle = shade;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      frame += 1;
      if (!reduceMotion) rafId = window.requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return <canvas className="hero-liquid-canvas" aria-hidden="true" />;
}

function App() {
  useReveal();
  const [formStatus, setFormStatus] = useState('idle');

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '02a11c87-fa7a-40ba-bc4c-cd1fc44b4f61');
    formData.append('subject', 'Portfolio Contact Form');
    formData.append('from_name', 'Muhammad Kevin Aribi Portfolio');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        event.currentTarget.reset();
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="site-shell">
      <div className="visual-bg" aria-hidden="true">
        <span className="blur blur-one" />
        <span className="blur blur-two" />
        <span className="grain" />
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Muhammad Kevin Aribi">
          <img src="profile.png" alt="Muhammad Kevin Aribi" />
          <span>
            <strong>Muhammad Kevin Aribi</strong>
            <small>Corporate Operations &amp; BI Portfolio</small>
          </span>
        </a>
        <nav className="nav" aria-label="Navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className={label === 'Contact' ? 'nav-pill' : ''}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-bg-card" aria-hidden="true">
            <HeroLiquidCanvas />
          </div>
          <div className="hero-inner reveal is-visible">
            <p className="eyebrow">Corporate Operations &amp; BI Portfolio</p>
            <h1>Muhammad Kevin Aribi</h1>
            <a href="#about" className="scroll-cue" aria-label="Scroll to About Me">
              <span>Scroll to About Me</span>
              <i />
            </a>
          </div>
        </section>

        <section id="about" className="section-pad about">
          <div className="section-title reveal">
            <p>About Me</p>
          </div>
          <div className="about-grid reveal">
            <div className="portrait-panel">
              <img src="profile.png" alt="Muhammad Kevin Aribi profile photo" />
            </div>
            <div className="about-content">
              <div className="about-cards">
                <article>
                  <span>Current Role</span>
                  <strong>Business Project</strong>
                  <small>Telkomsel Project under Neuronworks</small>
                </article>
                <article>
                  <span>Education</span>
                  <strong>Human Resource Management</strong>
                  <small>Universitas Bina Sarana Informatika</small>
                </article>
              </div>
              <div className="about-actions">
                <a href="#proof">View Scope of Work</a>
                <a href="cv-muhammad-kevin-aribi.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
              </div>
              <div className="metric-row">
                {metrics.map(([value, label]) => (
                  <article key={value}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </article>
                ))}
              </div>
              <div className="role-chip">
                <strong>Business Project</strong>
                <span>IT Finance Business Intelligence Department</span>
              </div>
              <p className="about-copy">
                I started building things early - from reselling game accounts to running my own sneaker business, Enthusiast Sply, focused on Air Jordan 1 and ran for 4 years (2020-2024). Today, I work as a Business Project for Telkomsel under Neuronworks, where I handle business operations, project coordination, and system monitoring across multiple Business Intelligence domains.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad experience">
          <div className="section-title reveal">
            <p>Experience Highlights</p>
          </div>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-card reveal" key={`${item.company}-${item.year}`}>
                <div className="experience-meta">
                  <span>{item.year}</span>
                  <strong>{item.company}</strong>
                </div>
                <div className="experience-body">
                  <h2>{item.role}</h2>
                  <p>{item.description}</p>
                  {item.scopeLink && <a href="#proof" className="scope-link">{item.scopeLink}</a>}
                  {item.works && (
                    <details className="work-details">
                      <summary>
                        <span>Selected Works</span>
                        <em>Tap to expand</em>
                      </summary>
                      <div className="work-grid">
                        {item.works.map(([caption, image]) => (
                          <a href={image} target="_blank" rel="noopener noreferrer" className="work-card" key={image}>
                            <img src={image} alt={caption} loading="lazy" />
                            <span>{caption}</span>
                          </a>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className="section-pad scope">
          <div className="section-title reveal">
            <p>Scope of Work</p>
            <h2>Business Project</h2>
          </div>
          <div className="scope-grid reveal">
            <div className="responsibility-list">
              {responsibilities.map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
            <div className="outputs-wrap">
              <p className="outputs-label">Selected Outputs</p>
              {outputs.map((item) => (
                <a href={item.image} target="_blank" rel="noopener noreferrer" className="output-card" key={item.number}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div>
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="section-pad capabilities">
          <div className="section-title reveal">
            <p>Core Capabilities</p>
            <h2>Where I can create value.</h2>
          </div>
          <div className="ticker reveal">
            <div>
              {[...capabilityTicker, ...capabilityTicker].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
          <div className="tool-grid reveal">
            {coreTools.map((tool) => (
              <article className="tool-card" key={tool.name}>
                <div className="tool-logos">
                  {tool.logos.map((logo) => (
                    <img src={logo} alt={tool.name} key={logo} loading="lazy" className={`logo-icon logo-${logo.replace(/\.[^/.]+$/, '')}`} />
                  ))}
                </div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </article>
            ))}
          </div>
          <div className="supporting reveal">
            <p>Supporting Tools</p>
            <div>
              {supportingTools.map(([name, logo]) => (
                <span key={name}>
                  <img src={logo} alt={name} loading="lazy" className={`support-logo logo-${logo.replace(/\.[^/.]+$/, '')}`} />
                  <small>{name}</small>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-pad certifications">
          <div className="section-title reveal">
            <p>Certifications</p>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article className="cert-card reveal" key={cert.title}>
                <div className="cert-tags">
                  {cert.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <h2>{cert.title}</h2>
                <strong>{cert.issuer}</strong>
                <p>{cert.description}</p>
                <div className={`cert-images cert-count-${cert.images.length}`}>
                  {cert.images.map((image) => (
                    <a href={image} target="_blank" rel="noopener noreferrer" key={image}>
                      <img src={image} alt={cert.title} loading="lazy" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-pad contact">
          <div className="contact-panel reveal">
            <div className="contact-main">
              <div className="section-title contact-title">
                <p>Seeking Opportunities</p>
              </div>
              <div className="role-list role-list-grid">
                {roles.map((role) => <span key={role}>{role}</span>)}
              </div>
              <form className="message-form" onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Email" required />
                  </label>
                </div>
                <label>
                  <span>Message</span>
                  <textarea name="message" placeholder="Message" rows="5" required />
                </label>
                <input type="checkbox" name="botcheck" className="hidden-field" tabIndex="-1" autoComplete="off" />
                <button type="submit" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && <p className="form-status">Message sent.</p>}
                {formStatus === 'error' && <p className="form-status">Message failed.</p>}
              </form>
            </div>
            <div className="contact-side contact-side-no-qr">
              <div className="contact-links">
                <a href="mailto:kevinaribi064@gmail.com">kevinaribi064@gmail.com</a>
                <a href="tel:081294379119">0812 9437 9119</a>
                <a href="https://www.linkedin.com/in/muhammad-kevin-aribi" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                <a href="cv-muhammad-kevin-aribi.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
