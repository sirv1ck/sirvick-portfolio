import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Projects", "Services", "Contact"];

const TECH_STACK = ["PHP", "MYSQLI", "React", "Node.js", "Python", "Solidity", "Web3", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Next.js", "GraphQL"];

const STATS = [
  { number: "7+", label: "Years Experience" },
  { number: "50+", label: "Projects Delivered" },
  { number: "3", label: "Blockchain Networks" },
  { number: "100%", label: "Client Satisfaction" },
];

const PROJECTS = [
  {
    icon: "🪙",
    title: "DigitWebCoin",
    description: "Cryptocurrency token platform with secure wallet integrations and real-time trading functionality. Built with blockchain security best practices.",
    tags: ["Solidity", "Web3.js", "React"],
    link: "https://digitwebcoin.com",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: "☀️",
    title: "SunWin Token",
    description: "DeFi token ecosystem with staking, rewards, and liquidity pool management. Deployed on BNB Chain with optimized gas efficiency.",
    tags: ["Smart Contracts", "BNB Chain", "DeFi"],
    link: "https://sunwintoken.com",
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    icon: "💬",
    title: "The Fan Forum",
    description: "Social networking platform with real-time chat, user authentication, and community features. Built for scalability and performance.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://thefanforum.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🚀",
    title: "CoinGatePad",
    description: "Cryptocurrency launchpad platform for token presales and IDOs. Complete with smart contract automation and secure payment processing.",
    tags: ["Ethereum", "TypeScript", "Web3"],
    link: "https://coingatead.com",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: "🏔️",
    title: "TONLAND",
    description: "TON blockchain ecosystem platform with wallet integration, NFT marketplace, and decentralized application features.",
    tags: ["TON", "React", "Python"],
    link: "https://tonland.tech",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: "🎓",
    title: "YukHub",
    description: "Educational platform with course management, student portals, and interactive learning modules with full admin dashboard.",
    tags: ["Next.js", "PostgreSQL", "AWS"],
    link: "https://yukhub.com",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: "🤝",
    title: "Joint Faith Peace Initiative",
    description: "Non-profit organization website with donation management, event registration, and content management system.",
    tags: ["PHP", "MySQL", "JavaScript"],
    link: "https://jointfaithpeaceinitiative.org",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: "💰",
    title: "EarnMoreNG",
    description: "Earning platform with task management, payment processing, and user reward system integrated with multiple payment gateways.",
    tags: ["Node.js", "Express", "React"],
    link: "https://earnmoreng.com",
    gradient: "from-lime-500 to-green-600",
  },
  {
    icon: "🎮",
    title: "EarnQuestHub",
    description: "Play-to-Earn gaming platform with blockchain rewards, leaderboards, and social features with complete NFT integration.",
    tags: ["Web3", "Solidity", "React"],
    link: "https://earnquesthub.com",
    gradient: "from-fuchsia-500 to-violet-600",
  },
];

const SERVICES = [
  { icon: "🌐", title: "Full-Stack Development", desc: "End-to-end web application development using React, Node.js, Python, and modern frameworks. Scalable, secure, and performance-optimized." },
  { icon: "⛓️", title: "Blockchain & Web3", desc: "Smart contract development, token deployment, DeFi solutions, and dApp architecture across Ethereum, BNB Chain, and TON networks." },
  { icon: "🤖", title: "AI/ML Integration", desc: "Machine learning model development, AI-powered features, and intelligent automation systems integrated into production applications." },
  { icon: "📡", title: "API Development", desc: "RESTful and GraphQL API design and implementation with robust authentication, documentation, and third-party integrations." },
  { icon: "☁️", title: "Cloud & DevOps", desc: "AWS deployment, Docker containerization, CI/CD pipeline setup, and infrastructure management for reliable production systems." },
  { icon: "🔒", title: "Security & Optimization", desc: "Code audits, performance optimization, security best practices, and system reliability engineering for mission-critical applications." },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --ink: #0b0c10;
    --ink2: #13151c;
    --ink3: #1c1f2b;
    --glass: rgba(255,255,255,0.03);
    --glass-border: rgba(255,255,255,0.07);
    --accent: #00d4ff;
    --accent2: #7c3aed;
    --accent3: #f59e0b;
    --text: #e8eaf0;
    --muted: #6b7280;
    --highlight: rgba(0,212,255,0.08);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--ink);
    color: var(--text);
    overflow-x: hidden;
  }

  .font-display { font-family: 'Syne', sans-serif; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--ink); }
  ::-webkit-scrollbar-thumb { background: var(--accent2); border-radius: 4px; }

  /* Nav */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 0 2rem;
    background: rgba(11,12,16,0.85);
    backdrop-filter: blur(24px);
    border-bottom: 1px solid var(--glass-border);
    height: 68px;
    display: flex; align-items: center; justify-content: space-between;
    transition: all 0.3s;
  }

  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800; font-size: 1.2rem;
    background: linear-gradient(135deg, #00d4ff, #7c3aed);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    letter-spacing: -0.5px;
    cursor: pointer;
  }

  .nav-links { display: flex; gap: 0.25rem; list-style: none; align-items: center; }

  .nav-link {
    font-family: 'DM Sans', sans-serif; font-weight: 400; font-size: 0.9rem;
    color: var(--muted);
    padding: 0.45rem 1rem;
    border-radius: 6px;
    cursor: pointer; transition: all 0.2s;
    letter-spacing: 0.02em;
    text-decoration: none; border: none; background: none;
  }

  .nav-link:hover, .nav-link.active {
    color: var(--text);
    background: var(--glass);
  }

  .nav-cta {
    font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.85rem;
    background: linear-gradient(135deg, #7c3aed, #00d4ff);
    color: #fff; border: none;
    padding: 0.5rem 1.25rem; border-radius: 8px;
    cursor: pointer; transition: all 0.2s; letter-spacing: 0.02em;
    text-decoration: none;
  }

  .nav-cta:hover { opacity: 0.88; transform: translateY(-1px); }

  /* Hero */
  .hero {
    min-height: 100vh; padding-top: 68px;
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%),
                radial-gradient(ellipse 50% 40% at 80% 80%, rgba(0,212,255,0.1) 0%, transparent 60%),
                radial-gradient(ellipse 40% 30% at 10% 60%, rgba(245,158,11,0.06) 0%, transparent 60%);
  }

  .hero-grid {
    position: absolute; inset: 0; z-index: 0;
    background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  }

  .hero-inner {
    position: relative; z-index: 1;
    max-width: 900px; margin: 0 auto;
    padding: 2rem; text-align: center;
  }

  .hero-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: rgba(0,212,255,0.08);
    border: 1px solid rgba(0,212,255,0.2);
    padding: 0.4rem 1rem; border-radius: 50px;
    font-size: 0.8rem; color: var(--accent);
    letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500;
    margin-bottom: 2rem; font-family: 'DM Sans', sans-serif;
  }

  .badge-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent);
    animation: blink 1.4s ease-in-out infinite;
  }

  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.8rem, 7vw, 5.5rem);
    font-weight: 800; line-height: 1.0;
    letter-spacing: -0.03em; margin-bottom: 1.5rem;
    color: var(--text);
  }

  .hero-title .line1 { display: block; }
  .hero-title .line2 {
    display: block;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #f59e0b 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }

  .hero-sub {
    font-size: 1.1rem; color: var(--muted); max-width: 560px; margin: 0 auto 2.5rem;
    line-height: 1.7; font-weight: 300;
  }

  .hero-tech {
    display: flex; flex-wrap: wrap; gap: 0.6rem;
    justify-content: center; margin-bottom: 3rem;
  }

  .tech-pill {
    background: var(--glass); border: 1px solid var(--glass-border);
    padding: 0.35rem 0.9rem; border-radius: 50px;
    font-size: 0.8rem; color: var(--muted); font-weight: 400;
    transition: all 0.2s; cursor: default; font-family: 'DM Sans', sans-serif;
  }

  .tech-pill:hover {
    background: rgba(0,212,255,0.07); border-color: rgba(0,212,255,0.3);
    color: var(--accent); transform: translateY(-2px);
  }

  .hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

  .btn-main {
    font-family: 'DM Sans', sans-serif; font-weight: 500;
    display: inline-flex; align-items: center; gap: 0.6rem;
    padding: 0.85rem 2rem; border-radius: 10px;
    font-size: 0.95rem; cursor: pointer; transition: all 0.25s;
    text-decoration: none; border: none;
  }

  .btn-primary-main {
    background: linear-gradient(135deg, #7c3aed, #00d4ff);
    color: #fff;
  }
  .btn-primary-main:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 12px 40px rgba(124,58,237,0.35); }

  .btn-outline-main {
    background: transparent;
    border: 1px solid var(--glass-border);
    color: var(--text);
  }
  .btn-outline-main:hover { background: var(--glass); border-color: rgba(255,255,255,0.15); transform: translateY(-2px); }

  /* Sections */
  .section { padding: 7rem 2rem; max-width: 1200px; margin: 0 auto; }
  .section-full { padding: 7rem 0; }
  .section-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

  .section-label {
    display: inline-block;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.12em;
    color: var(--accent); margin-bottom: 1rem;
  }

  .section-title-main {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700; line-height: 1.1;
    letter-spacing: -0.02em; margin-bottom: 1.5rem; color: var(--text);
  }

  /* About */
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }

  .about-text { color: var(--muted); font-size: 1.05rem; line-height: 1.9; font-weight: 300; }
  .about-text p { margin-bottom: 1.4rem; }
  .about-text strong { color: var(--text); font-weight: 500; }

  .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }

  .stat-box {
    background: var(--ink2); border: 1px solid var(--glass-border);
    border-radius: 14px; padding: 1.8rem;
    transition: all 0.3s; position: relative; overflow: hidden;
  }

  .stat-box::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(0,212,255,0.05), transparent);
    opacity: 0; transition: opacity 0.3s;
  }

  .stat-box:hover { border-color: rgba(0,212,255,0.25); transform: translateY(-4px); }
  .stat-box:hover::before { opacity: 1; }

  .stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 2.8rem; font-weight: 800;
    background: linear-gradient(135deg, #00d4ff, #7c3aed);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    line-height: 1;
  }

  .stat-lbl { font-size: 0.85rem; color: var(--muted); margin-top: 0.5rem; font-weight: 400; }

  /* Divider */
  .divider {
    height: 1px; background: var(--glass-border);
    margin: 0 2rem;
  }

  /* Projects */
  .projects-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.25rem;
  }

  .proj-card {
    background: var(--ink2); border: 1px solid var(--glass-border);
    border-radius: 16px; overflow: hidden;
    transition: all 0.3s; position: relative; cursor: pointer;
    display: flex; flex-direction: column;
  }

  .proj-card:hover { border-color: rgba(255,255,255,0.12); transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }

  .proj-header {
    height: 130px; display: flex; align-items: center; justify-content: center;
    font-size: 3.5rem; position: relative; overflow: hidden;
  }

  .proj-header-bg {
    position: absolute; inset: 0; opacity: 0.7;
    transition: opacity 0.3s;
  }

  .proj-card:hover .proj-header-bg { opacity: 1; }

  .proj-icon { position: relative; z-index: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); }

  .proj-body { padding: 1.4rem; flex: 1; display: flex; flex-direction: column; }

  .proj-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.15rem; font-weight: 700;
    color: var(--text); margin-bottom: 0.6rem; letter-spacing: -0.01em;
  }

  .proj-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; font-weight: 300; flex: 1; margin-bottom: 1rem; }

  .proj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.1rem; }

  .proj-tag {
    background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border);
    padding: 0.2rem 0.65rem; border-radius: 50px;
    font-size: 0.72rem; color: var(--muted); font-weight: 400; letter-spacing: 0.02em;
  }

  .proj-link {
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-size: 0.83rem; color: var(--accent); font-weight: 500;
    text-decoration: none; transition: gap 0.2s;
  }

  .proj-link:hover { gap: 0.7rem; }

  /* Services */
  .services-bg { background: var(--ink2); }

  .services-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.25rem;
  }

  .svc-card {
    background: var(--ink); border: 1px solid var(--glass-border);
    border-radius: 16px; padding: 2rem;
    transition: all 0.3s; position: relative; overflow: hidden;
  }

  .svc-card::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px; background: linear-gradient(90deg, #7c3aed, #00d4ff);
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }

  .svc-card:hover { border-color: rgba(255,255,255,0.1); transform: translateY(-4px); box-shadow: 0 15px 40px rgba(0,0,0,0.4); }
  .svc-card:hover::after { transform: scaleX(1); }

  .svc-icon-wrap {
    width: 52px; height: 52px; border-radius: 12px;
    background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; margin-bottom: 1.2rem;
  }

  .svc-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem; font-weight: 700;
    color: var(--text); margin-bottom: 0.7rem; letter-spacing: -0.01em;
  }

  .svc-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.7; font-weight: 300; }

  /* Contact */
  .contact-wrap {
    max-width: 700px; margin: 0 auto; text-align: center;
  }

  .contact-text { font-size: 1.05rem; color: var(--muted); line-height: 1.8; font-weight: 300; margin-bottom: 2.5rem; }

  .contact-links {
    display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 3rem;
  }

  .contact-link {
    display: flex; align-items: center; gap: 0.6rem;
    padding: 0.75rem 1.5rem; border-radius: 10px;
    background: var(--ink2); border: 1px solid var(--glass-border);
    color: var(--muted); font-size: 0.875rem; font-weight: 400;
    text-decoration: none; transition: all 0.2s;
  }

  .contact-link:hover { border-color: rgba(0,212,255,0.3); color: var(--text); transform: translateY(-2px); }

  /* Footer */
  .footer {
    border-top: 1px solid var(--glass-border);
    padding: 2rem; text-align: center;
    font-size: 0.825rem; color: var(--muted); font-weight: 300;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .nav-links, .nav-cta { display: none; }
    .about-grid { grid-template-columns: 1fr; gap: 3rem; }
    .projects-grid, .services-grid { grid-template-columns: 1fr; }
    .hero-title { font-size: 2.5rem; }
  }
`;

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const gradients = {
    "from-amber-500 to-orange-600": "linear-gradient(135deg, #f59e0b, #ea580c)",
    "from-yellow-400 to-amber-500": "linear-gradient(135deg, #facc15, #f59e0b)",
    "from-blue-500 to-cyan-500": "linear-gradient(135deg, #3b82f6, #06b6d4)",
    "from-violet-500 to-purple-600": "linear-gradient(135deg, #8b5cf6, #9333ea)",
    "from-sky-500 to-blue-600": "linear-gradient(135deg, #0ea5e9, #2563eb)",
    "from-emerald-500 to-teal-600": "linear-gradient(135deg, #10b981, #0d9488)",
    "from-rose-500 to-pink-600": "linear-gradient(135deg, #f43f5e, #db2777)",
    "from-lime-500 to-green-600": "linear-gradient(135deg, #84cc16, #16a34a)",
    "from-fuchsia-500 to-violet-600": "linear-gradient(135deg, #d946ef, #7c3aed)",
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-logo">&lt;/Sirvick&gt;</div>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <button className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>
                {l}
              </button>
            </li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => scrollTo("contact")}>
          Hire Me
        </button>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for Projects
          </div>
          <h1 className="hero-title">
            <span className="line1">Full-Stack Developer</span>
            <span className="line2">& Blockchain Engineer</span>
          </h1>
          <p className="hero-sub">
            Crafting production-grade web applications, DeFi systems, and AI-powered solutions. 10+ years turning complex requirements into elegant, scalable code.
          </p>
          <div className="hero-tech">
            {TECH_STACK.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-main btn-primary-main" onClick={() => scrollTo("projects")}>
              View My Work →
            </button>
            <button className="btn-main btn-outline-main" onClick={() => scrollTo("contact")}>
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="about-grid">
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title-main">Bridging Web2 &amp; Web3 with Purpose</h2>
            <div className="about-text">
              <p>
                I'm a seasoned <strong>Full-Stack Developer and Blockchain Engineer</strong> with over a decade of experience building scalable web applications, decentralized systems, and AI-powered solutions.
              </p>
              <p>
                I specialize in architecting <strong>robust backend systems</strong>, crafting intuitive user interfaces, and deploying smart contracts across multiple blockchain networks including Ethereum, BNB Chain, and TON.
              </p>
              <p>
                From cryptocurrency tokens to Play-to-Earn platforms, from AI/ML models to enterprise web applications — I bring ideas to life with clean, efficient, production-ready code.
              </p>
            </div>
          </div>
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-box">
                <div className="stat-num">{s.number}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Projects */}
      <section className="section" id="projects">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title-main">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.title} className="proj-card">
              <div className="proj-header">
                <div className="proj-header-bg" style={{ background: gradients[p.gradient] }} />
                <span className="proj-icon">{p.icon}</span>
              </div>
              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="proj-tag">{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Services */}
      <section className="section" id="services">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">What I Offer</span>
          <h2 className="section-title-main">Services & Expertise</h2>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.title} className="svc-card">
              <div className="svc-icon-wrap">{s.icon}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Contact */}
      <section className="section" id="contact">
        <div className="contact-wrap">
          <span className="section-label">Contact</span>
          <h2 className="section-title-main">Let's Build Something Together</h2>
          <p className="contact-text">
            Currently available for freelance projects, full-time roles, and consulting engagements. Whether you need a platform built from scratch or help scaling an existing system — let's talk.
          </p>
          <div className="hero-btns">
            <a href="mailto:sirvickfred@gmail.com" className="btn-main btn-primary-main">
              Send a Message →
            </a>
            <a href="https://github.com/sirv1ck" target="_blank" rel="noopener noreferrer" className="btn-main btn-outline-main">
              View GitHub
            </a>
          </div>
          <div className="contact-links">
            {[
              { icon: "📧", label: "Email", href: "mailto:sirvickfred@gmail.com", text: "sirvickfred@gmail.com" },
              { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/in/sirv1ck", text: "linkedin.com/in/sirv1ck" },
              { icon: "💻", label: "GitHub", href: "https://github.com/sirv1ck", text: "github.com/sirv1ck" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Sirvick · Built with Love · All rights reserved</p>
      </footer>
    </div>
  );
}