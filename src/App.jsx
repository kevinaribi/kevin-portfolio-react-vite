import React, { useEffect } from 'react';
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

function App() {
  useReveal();

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
          <div className="hero-bg-card" aria-hidden="true" />
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
            <div>
              <div className="section-title contact-title">
                <p>Seeking Opportunities</p>
              </div>
              <div className="role-list">
                {roles.map((role) => <span key={role}>{role}</span>)}
              </div>
            </div>
            <div className="contact-side">
              <div className="qr-card">
                <img src="cv-qr.png" alt="Scan for CV" loading="lazy" />
                <strong>Scan for CV</strong>
              </div>
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
