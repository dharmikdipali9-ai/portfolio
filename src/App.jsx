import { useEffect, useMemo, useState } from "react";

const navItems = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

const skills = [
  ["Python", 92],
  ["React", 88],
  ["Flask", 88],
  ["Django", 84],
  ["JavaScript", 86],
  ["FastAPI", 80],
  ["MySQL", 82],
  ["PostgreSQL", 76],
  ["REST APIs", 87],
  ["Tailwind CSS", 80],
];

const experiences = [
  {
    role: "Associate Software Developer",
    company: "Kavya Infoweb Pvt. Ltd",
    location: "Nagpur",
    period: "Nov 2025 - Present",
    summary:
      "Building scalable web applications with React.js and Flask while contributing to real product features in Agile workflows.",
    highlights: [
      "Developed and maintained responsive React interfaces with reusable components.",
      "Designed and integrated RESTful APIs for frontend-backend communication.",
      "Improved usability, performance, and maintainability across application flows.",
      "Collaborated with team members to deliver features on time and improve product quality.",
    ],
  },
];

const projects = [
  {
    title: "AI Based Personal Finance",
    description:
      "Full-stack finance dashboard to manage income, expenses, budgets, JWT authentication, email OTP verification, and smart insights.",
    stack: ["React", "Flask", "MySQL", "Cloudinary"],
    demo: "https://ai-finance-manager-nu.vercel.app/",
    github: "https://github.com/dharmikdipali9-ai",
    image: "./assets/projects/ai-finance-dashboard.png",
  },
  {
    title: "Inkspire Blog Platform",
    description:
      "Blogging platform with authentication, role-based access control, CRUD publishing, comments, likes, reports, and admin moderation.",
    stack: ["Flask", "MySQL", "SQLite", "JavaScript"],
    demo: "https://inkspire-blog-platform-bkhr.onrender.com/",
    github: "https://github.com/dharmikdipali9-ai",
    image: "./assets/projects/inkspire-home.png",
  },
  {
    title: "Developer Portfolio",
    description:
      "Responsive dark-theme portfolio with smooth navigation, animated sections, contact flow, and resume download support.",
    stack: ["React", "CSS", "JavaScript"],
    demo: "#home",
    github: "https://github.com/dharmikdipali9-ai",
    image: "./assets/projects/portfolio-preview.svg",
  },
  {
    title: "API Authentication System",
    description:
      "Backend-ready authentication concept with JWT flows, protected endpoints, validation patterns, and clean API integration structure.",
    stack: ["Flask", "JWT", "REST APIs"],
    demo: "#contact",
    github: "https://github.com/dharmikdipali9-ai",
    image: "./assets/projects/api-preview.svg",
  },
];

const phrases = [
  "Django applications",
  "REST APIs",
  "responsive React UIs",
  "database-backed products",
];

function useTyping(words) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = words[phraseIndex];
    let delay = 78;

    if (!deleting && charIndex === phrase.length) {
      delay = 1200;
      const timeout = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex === 0) {
      delay = 250;
      const timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % words.length);
      }, delay);
      return () => clearTimeout(timeout);
    }

    delay = deleting ? 38 : 78;
    const timeout = setTimeout(() => {
      setCharIndex((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, words]);

  return words[phraseIndex].slice(0, charIndex);
}

function useScrollEffects() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const setHeaderState = () => setIsScrolled(window.scrollY > 20);
    setHeaderState();
    window.addEventListener("scroll", setHeaderState);
    return () => window.removeEventListener("scroll", setHeaderState);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    document.querySelectorAll("main section[id]").forEach((section) => {
      navObserver.observe(section);
    });

    return () => navObserver.disconnect();
  }, []);

  return { activeSection, isScrolled };
}

function Header() {
  const { activeSection, isScrolled } = useScrollEffects();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#home" className="brand">
          Dipali<span>.</span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                key={item}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const typedText = useTyping(phrases);

  return (
    <section id="home" className="hero section">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Full Stack Python Developer</p>
          <h1>
            Hi, I am <span>Dipali Dharmik</span>
          </h1>
          <h2>
            I build <span>{typedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-intro">
            I create scalable web applications with React, Flask, Django, secure APIs,
            and practical product thinking.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href="#contact">
              Contact Me
            </a>
            <a
              className="btn resume"
              href="./assets/dipali_dharmik_Full_Stack_Python_Developer.pdf"
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="profile-orbit">
            <div className="profile-card">
              <div className="avatar" aria-label="Dipali Dharmik initials">
                DD
              </div>
              <div>
                <strong>Backend + Frontend</strong>
                <span>React, Flask, Django</span>
              </div>
            </div>
            <div className="floating-chip chip-one">REST APIs</div>
            <div className="floating-chip chip-two">PostgreSQL</div>
            <div className="floating-chip chip-three">Responsive UI</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container two-column">
        <div className="section-heading reveal">
          <p className="eyebrow">About</p>
          <h2>Developer with a practical, product-minded approach.</h2>
        </div>
        <div className="about-content reveal">
          <p>
            I am a Full Stack Python Developer with hands-on experience building
            scalable, production-ready web applications using React.js, Flask, Django,
            REST APIs, authentication systems, and SQL databases.
          </p>
          <div className="timeline">
            <article>
              <span>Focus</span>
              <h3>Frontend, backend, and APIs</h3>
              <p>
                I like building complete product flows, from reusable interfaces to
                backend logic, authentication, database design, and deployment-ready APIs.
              </p>
            </article>
            <article>
              <span>Education</span>
              <h3>Computer Science & Web Technologies</h3>
              <p>
                B.Tech in Computer Science Engineering from Vidarbha Institute of
                Technology, Nagpur, with a CGPA of 8.45.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Experience</p>
          <h2>Current work building practical full-stack applications.</h2>
        </div>
        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-card reveal" key={`${item.role}-${item.company}`}>
              <div className="experience-meta">
                <span>{item.period}</span>
                <strong>{item.location}</strong>
              </div>
              <div className="experience-body">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.summary}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Skills</p>
          <h2>Tools I use to turn ideas into working products.</h2>
        </div>
        <div className="skills-grid">
          {skills.map(([name, level]) => (
            <article className="skill-card reveal" key={name}>
              <div className="skill-top">
                <span>{name}</span>
                <strong>{level}%</strong>
              </div>
              <div className="progress">
                <span style={{ width: `${level}%` }}></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ image, title }) {
  return (
    <div className="project-preview">
      <img src={image} alt={`${title} preview`} loading="lazy" />
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Projects</p>
          <h2>Selected work built around real product flows.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <ProjectPreview image={project.image} title={project.title} />
              <div className="project-accent"></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} target={project.demo.startsWith("#") ? undefined : "_blank"} rel="noreferrer">
                  {project.demo.startsWith("#") ? "Preview" : "Live Demo"}
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!formspreeEndpoint) {
      setStatus("Add your Formspree endpoint in .env as VITE_FORMSPREE_ENDPOINT to receive messages.");
      return;
    }

    setIsSending(true);
    setStatus("Sending your message...");

    try {
      formData.append("_subject", "New portfolio contact message");

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errorMessage =
          errorData?.errors?.[0]?.message || errorData?.error || "Message could not be sent.";
        throw new Error(errorMessage);
      }

      setStatus(`Thanks, ${payload.name || "there"}! Your message has been sent.`);
      form.reset();
    } catch (error) {
      setStatus(`${error.message} Please email me directly at dharmikdipali9@gmail.com.`);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let us build something useful and beautifully engineered.</h2>
          <p>
            Have a role, project, or collaboration in mind? Send a message and I will
            get back to you.
          </p>
          <p className="contact-meta">Surat, Gujarat | +91 9356745404</p>
          <div className="social-links">
            <a href="https://github.com/dharmikdipali9-ai" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/dipalidharmik" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:dharmikdipali9@gmail.com">Email</a>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me about your project" required></textarea>
          </label>
          <button className="btn primary" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="site-footer">
      <p>&copy; {year} Dipali Dharmik. Built with care.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
