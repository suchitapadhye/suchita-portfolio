import React, { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, BrainCircuit, Code2, Database, Sparkles, ExternalLink, FileText, MapPin, GraduationCap, Layers3, Workflow, Award } from 'lucide-react';

const profile = {
  name: 'Suchita Padhye',
  email: 'suchitapadhye4@gmail.com',
  phone: '+91 7977762763',
  github: 'https://github.com/suchitapadhye',
  linkedin: 'https://www.linkedin.com/in/suchita-padhye-a73113270/', // Add your LinkedIn profile URL here when ready.
  resume: '/resume.pdf',
};

const projects = [
  {
    number: '01', category: 'GENERATIVE AI · IN PROGRESS', title: 'Agentic Marketing Intelligence Assistant',
    description: 'An agentic analytics assistant combining SQL analysis of structured marketing campaign data with RAG-based retrieval from campaign reports and business documents.',
    details: ['Designing tool-using workflows for campaign performance analysis, customer segmentation, and metric comparisons.', 'Building evidence-backed recommendations with source attribution.', 'Planning evaluation for SQL correctness, retrieval relevance, groundedness, and task completion.'],
    stack: ['Python', 'SQL', 'LangGraph', 'RAG', 'Vector Databases'], icon: Workflow, status: 'In progress'
  },
  {
    number: '02', category: 'DEEP LEARNING · MULTIMODAL AI', title: 'Explainable Audio-Visual Deepfake Detection',
    description: 'A multimodal deepfake detection pipeline that examines audio-visual consistency using learned audio and video representations.',
    details: ['Used Wav2Vec2 and VideoMAE for audio and video feature extraction.', 'Applied hybrid fusion and cross-modal attention to identify inconsistencies.', 'Built an interactive Gradio dashboard with consistency scoring.'],
    stack: ['Python', 'PyTorch', 'Transformers', 'Wav2Vec2', 'VideoMAE', 'Gradio'], metric: '88.86% ROC-AUC', icon: BrainCircuit
  },
  {
    number: '03', category: 'FULL-STACK · VOICE INTERACTION', title: 'EchoFit',
    description: 'A voice-controlled fitness web application providing personalized workout and meal recommendations.',
    details: ['Built a Flask backend and responsive JavaScript frontend.', 'Integrated the Web Speech API for hands-free workout control.', 'Used Firebase for application data and cloud services; deployed on Google Cloud Run.'],
    stack: ['Python', 'Flask', 'JavaScript', 'Firebase', 'Google Cloud Run'], icon: Code2
  },
  {
    number: '04', category: 'MOBILE · MAPS & INTEGRATION', title: 'SafeSteps',
    description: 'A women-centric safety navigation app that ranks routes using multiple safety-related signals.',
    details: ['Developed rule-based route ranking using crime indicators, lighting, weather, emergency-service proximity, and user feedback.', 'Integrated Google Maps and OpenStreetMap for route visualization.', 'Used Firebase Firestore for dynamic safety feedback.'],
    stack: ['React Native', 'Expo', 'Firebase', 'Google Maps', 'OpenStreetMap'], icon: MapPin
  },
  {
    number: '05', category: 'WEB APPLICATION · BUSINESS WORKFLOW', title: 'Inventory Management System',
    description: 'An inventory management platform developed for Vivanta Food International to support day-to-day business operations.',
    details: ['Implemented role-based authentication, inventory tracking, product search, and quotation generation.', 'Added near-expiry email alerts and AI-assisted stock summaries.', 'Used SQLite for persistence and Docker for containerization.'],
    stack: ['Python', 'Django', 'SQLite', 'Docker', 'Tailwind CSS'], icon: Database
  },
];

const skillGroups = [
  { title: 'Programming', icon: Code2, skills: ['Python', 'Java', 'JavaScript', 'SQL'] },
  { title: 'AI / Machine Learning', icon: BrainCircuit, skills: ['Pandas', 'NumPy', 'TensorFlow', 'PyTorch', 'Transformers', 'Supervised Learning', 'Model Evaluation'] },
  { title: 'Generative & Agentic AI', icon: Sparkles, skills: ['LLMs', 'Prompt Engineering', 'RAG', 'Embeddings', 'Semantic Search', 'LangGraph', 'Vector Databases', 'Tool Calling', 'Agentic AI', 'LLM Evaluation'] },
  { title: 'Frameworks & APIs', icon: Layers3, skills: ['Flask', 'Django', 'Gradio', 'REST APIs', 'Firebase'] },
  { title: 'Databases & Tools', icon: Database, skills: ['MySQL', 'SQLite', 'Firestore', 'Git', 'GitHub', 'Docker', 'Google Cloud Platform'] },
  { title: 'Core CS', icon: Code2, skills: ['DSA', 'OOP', 'DBMS', 'Debugging', 'Software Development'] },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Research', '#research'], ['Contact', '#contact']];
  return <header className="header"><a className="brand" href="#home">SP<span>.</span></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button><nav className={open ? 'nav nav-open' : 'nav'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={15}/></a></nav></header>;
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;
  return <article className={`project-card ${expanded ? 'expanded' : ''}`}>
    <div className="project-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span><span className="project-icon"><Icon size={21}/></span></div>
    <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p>{project.metric && <div className="metric"><strong>{project.metric}</strong><span>on FakeAVCeleb</span></div>}
      {expanded && <ul className="project-details">{project.details.map((d, i) => <li key={i}>{d}</li>)}</ul>}
      <div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
    </div>
    <button className="project-more" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Explore project'} <ArrowUpRight size={16}/></button>
    <span className="project-status">{project.status || 'Completed project'}</span>
  </article>;
}

function App() {
  return <><Header />
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy reveal"><div className="eyebrow"><span className="eyebrow-dot"/> COMPUTER SCIENCE · ARTIFICIAL INTELLIGENCE</div>
          <h1>Building thoughtful<br/><span className="gradient-text">AI-powered</span> solutions.</h1>
          <p className="hero-lead">Hi, I’m <strong>Suchita Padhye</strong> — a Computer Science student exploring the intersection of AI, intelligent systems, and software engineering.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-secondary" href={`mailto:${profile.email}`}>Get in touch <Mail size={16}/></a><a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer">View resume <FileText size={16}/></a></div>
          <div className="hero-meta"><span><MapPin size={15}/> Pune, India</span><span><GraduationCap size={16}/> VIT Pune · Class of 2027</span></div>
        </div>
        <div className="hero-visual reveal"><div className="photo-halo"/><div className="photo-frame"><img src="/profile.jpeg" alt="Portrait of Suchita Padhye" /></div><div className="floating-note note-ai"><span className="note-icon"><BrainCircuit size={17}/></span><span><b>AI & ML</b><small>Building intelligent systems</small></span></div><div className="floating-note note-code"><Code2 size={17}/><span>Curious by design</span></div><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/></div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section className="section section-wrap about-section" id="about"><div className="section-heading"><span className="section-kicker">01 / A LITTLE ABOUT ME</span><h2>Curiosity drives<br/>everything I build.</h2></div>
        <div className="about-grid"><div className="about-main"><p className="about-intro">I enjoy turning complex ideas into useful, working solutions — whether that means experimenting with machine learning models, building AI-powered workflows, or developing applications that solve practical problems.</p><p>My interests span Generative AI, agentic systems, multimodal machine learning, and full-stack development. I value learning by building, collaborating with others, and understanding how technology moves from an idea to a product people can use.</p><p>I’m always looking for opportunities to take on meaningful challenges, deepen my technical skills, and contribute to teams building impactful products.</p></div>
          <div className="education-card"><div className="education-icon"><GraduationCap size={22}/></div><span className="card-label">EDUCATION</span><h3>Vishwakarma Institute of Technology</h3><p>B.Tech. · Computer Science and Engineering (Artificial Intelligence)</p><div className="education-bottom"><span>2023 — 2027</span><strong>8.75 <small>/ 10 CGPA</small></strong></div></div></div>
      </section>

      <section className="section skills-section" id="skills"><div className="section-wrap"><div className="section-heading"><span className="section-kicker">02 / MY TOOLKIT</span><h2>Skills I work with.</h2><p className="section-subtitle">A growing toolkit across software engineering, machine learning, and generative AI.</p></div>
        <div className="skills-grid">{skillGroups.map(group => {const Icon = group.icon; return <div className="skill-card" key={group.title}><div className="skill-title"><span><Icon size={19}/></span><h3>{group.title}</h3></div><div className="tags">{group.skills.map(s => <span key={s}>{s}</span>)}</div></div>})}</div>
        <p className="learning-note"><Sparkles size={16}/> <span><strong>Currently exploring:</strong> LangChain, advanced RAG, vector databases, statistical experimentation, and responsible AI.</span></p>
      </div></section>

      <section className="section section-wrap projects-section" id="projects"><div className="section-heading projects-heading"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Projects with purpose.</h2><p className="section-subtitle">A selection of things I’ve built, explored, and learned from.</p></div><span className="project-count">05 PROJECTS</span></div>
        <div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project}/>)}</div>
      </section>

      <section className="section research-section" id="research"><div className="section-wrap research-inner"><div><span className="section-kicker">04 / RESEARCH & PUBLICATION</span><h2>Exploring ideas<br/>beyond the build.</h2><p className="section-subtitle">I’m interested in research that connects emerging AI capabilities with meaningful, human-centred applications.</p></div><article className="publication-card"><div className="publication-icon"><Award size={23}/></div><span className="card-label">RESEARCH PUBLICATION</span><h3>Auracare — A Virtual Mental Health Assistant</h3><p>Research work presented and published at Smartcom Pune; Scopus-indexed.</p><span className="publication-foot">Research · Conversational AI</span></article></div></section>

      <section className="section section-wrap contact-section" id="contact"><div className="contact-panel"><div className="contact-glow"/><span className="section-kicker">05 / WHAT’S NEXT?</span><h2>Have an interesting<br/>problem to solve?</h2><p>I’d love to connect, exchange ideas, and explore opportunities to build something meaningful together.</p><a className="button button-white" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17}/></a><div className="contact-email"><Mail size={16}/>{profile.email}</div></div>
        <div className="social-row"><span>LET’S CONNECT</span><div><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a> : <span className="social-placeholder"><Linkedin size={17}/> LinkedIn link coming soon</span>}</div></div>
      </section>
    </main>
    <footer className="footer"><a className="brand" href="#home">SP<span>.</span></a><span>Designed & built with curiosity by Suchita Padhye.</span><a href="#home">Back to top ↑</a></footer>
  </>;
}

export default App;
