import { useEffect, useMemo, useState } from "react";

const navItems = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

const contactInfo = {
  name: "Dipali",
  fullName: "Dipali Dharmik",
  role: "Full Stack Python Developer",
  profileImages: [
    "/dipali-img.jpg",
    "/dipali-img.png",
    "/dipali-img.jpeg",
    "/assets/dipali-img.jpg",
    "/assets/dipali-img.png",
    "/assets/dipali-img.jpeg",
    "/assets/profile.jpg",
    "/assets/profile.png",
    "/assets/profile.jpeg",
  ],
  email: "dharmikdipali9@gmail.com",
  phone: "+919356745404",
  github: "https://github.com/dharmikdipali9-ai",
  linkedin: "https://linkedin.com/in/dipalidharmik",
  company: "Kavya Infoweb Pvt. Ltd.",
};

const footerLinks = ["Home", "About", "Projects", "Skills", "Contact"];

const socialLinks = [
  {
    label: "GitHub",
    href: contactInfo.github,
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: contactInfo.linkedin,
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${contactInfo.email}`,
    icon: "mail",
  },
  {
    label: "Call",
    href: `tel:${contactInfo.phone}`,
    icon: "phone",
  },
];

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
  ["PHP", 70],
  ["Docker", 80],
];

const experiences = [
  {
    role: "Associate Software Developer",
    company: "Kavya Infoweb Pvt. Ltd",
    location: "Nagpur",
    period: "June 2025 - Present",
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
    title: "AI Resume Analyzer",
    description:
      "An AI-powered full-stack Resume Analyzer platform built using React, Django REST Framework, PostgreSQL, and AI-based resume processing tools.",
    stack: ["React", "Django REST", "PostgreSQL", "AI Tools"],
    demo: "https://ai-resume-analyzer-mu-coral.vercel.app/",
    github: "https://github.com/dharmikdipali9-ai/ai-resume-analyzer",
    image: "/assets/projects/resume-analyzer-dashboard.png",
  },
  {
    title: "AI Based Personal Finance",
    description:
      "Full-stack finance dashboard to manage income, expenses, budgets, JWT authentication, email OTP verification, and smart insights.",
    stack: ["React", "Flask", "MySQL", "Cloudinary"],
    demo: "https://ai-finance-manager-nu.vercel.app/",
    github: "https://github.com/dharmikdipali9-ai/ai-finance-manager",
    image: "/assets/projects/ai-finance-dashboard.png",
  },
  {
    title: "Inkspire Blog Platform",
    description:
      "Blogging platform with authentication, role-based access control, CRUD publishing, comments, likes, reports, and admin moderation.",
    stack: ["Flask", "PostgresSQL", "Neon", "JavaScript"],
    demo: "https://inkspire-blog-platform-bkhr.onrender.com/",
    github: "https://github.com/dharmikdipali9-ai/Inkspire-blog-platform",
    image: "/assets/projects/inkspire-home.png",
  },
  {
    title: "Developer Portfolio",
    description:
      "Responsive dark-theme portfolio with smooth navigation, animated sections, contact flow, and resume download support.",
    stack: ["React", "CSS", "JavaScript"],
    demo: "https://portfolio-dipali-dharmik.vercel.app/",
    github: "https://github.com/dharmikdipali9-ai/portfolio",
    image: "/assets/projects/portfolio-preview.png",
  }
];

const phrases = [
  "Django applications",
  "REST APIs",
  "responsive React UIs",
  "database-backed products",
];

function SocialIcon({ name }) {
  const commonProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  if (name === "github") {
    return (
      <svg {...commonProps}>
        <path
          d="M12 2.75a9.25 9.25 0 0 0-2.92 18.03c.46.08.63-.2.63-.44v-1.58c-2.56.56-3.1-1.1-3.1-1.1-.42-1.08-1.03-1.37-1.03-1.37-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.41 2.17 1 2.7.77.08-.6.32-1 .59-1.23-2.04-.23-4.19-1.02-4.19-4.55 0-1 .36-1.83.95-2.47-.1-.23-.41-1.17.09-2.44 0 0 .78-.25 2.54.94a8.78 8.78 0 0 1 4.62 0c1.76-1.19 2.53-.94 2.53-.94.51 1.27.19 2.21.1 2.44.59.64.94 1.46.94 2.47 0 3.54-2.15 4.32-4.2 4.55.33.28.63.85.63 1.71v2.39c0 .24.16.53.64.44A9.25 9.25 0 0 0 12 2.75Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...commonProps}>
        <path
          d="M6.71 19H3.66V9.16h3.05V19ZM5.18 7.82a1.77 1.77 0 1 1 0-3.54 1.77 1.77 0 0 1 0 3.54ZM20.35 19h-3.04v-4.79c0-1.14-.02-2.61-1.59-2.61-1.6 0-1.84 1.25-1.84 2.53V19h-3.04V9.16h2.92v1.34h.04c.41-.77 1.4-1.59 2.88-1.59 3.08 0 3.65 2.03 3.65 4.67V19h.02Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path
          d="M7.1 4.25 8.9 3.8c.84-.21 1.71.22 2.05 1.01l.89 2.08c.3.71.1 1.53-.48 2.03l-1.13.97a11.05 11.05 0 0 0 3.88 3.88l.97-1.13c.5-.58 1.32-.78 2.03-.48l2.08.89c.79.34 1.22 1.21 1.01 2.05l-.45 1.8A2.75 2.75 0 0 1 17.08 19C10.41 19 5 13.59 5 6.92c0-1.26.86-2.36 2.1-2.67Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m5.25 7.25 6.75 5 6.75-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProfileImage({ className = "", fallback = "DD" }) {
  const [imageIndex, setImageIndex] = useState(0);
  const imageSrc = contactInfo.profileImages[imageIndex];

  function handleImageError() {
    setImageIndex((current) => current + 1);
  }

  return (
    <div
      className={`${className} ${imageSrc ? "has-image" : ""}`.trim()}
      aria-label={`${contactInfo.fullName} profile`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={contactInfo.fullName}
          onError={handleImageError}
        />
      ) : (
        fallback
      )}
    </div>
  );
}

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
              href="/assets/dipali_dharmik_full_stack_python_developer_updated.pdf"
              download="dipali_dharmik_full_stack_python_developer_updated.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="profile-orbit">
            <ProfileImage className="profile-photo" fallback="Dipali" />
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
          <p className="section-note">
            I am a Full Stack Python Developer with hands-on experience building
            scalable, production-ready web applications using React.js, Flask, Django,
            REST APIs, authentication systems, and SQL databases.
          </p>
        </div>
        <div className="about-content reveal">
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
          <div className="contact-map" aria-label="Map of Surat city">
            <iframe
              title="Surat city map"
              src="https://www.google.com/maps?q=Surat%2C%20Gujarat&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
            Phone
            <input type="number" name="number" placeholder="+912345678912" required />
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
  const [footerEmail, setFooterEmail] = useState("");

  function handleFooterSubmit(event) {
    event.preventDefault();
    const email = footerEmail.trim();
    const subject = encodeURIComponent("Portfolio connection request");
    const body = encodeURIComponent(
      email
        ? `Hi ${contactInfo.fullName},\n\nI would like to connect with you.\n\nMy email: ${email}`
        : `Hi ${contactInfo.fullName},\n\nI would like to connect with you.`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setFooterEmail("");
  }

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            {contactInfo.name}<span>.</span>
          </a>
          <p>
            {contactInfo.role} specializing in modern responsive web applications,
            REST APIs, and interactive interfaces focused on performance and user
            experience.
          </p>
        </div>

        <div className="footer-column">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            {footerLinks.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-connect">
          <h2>Stay Connected</h2>
          <p>Send your email and I will connect with you personally.</p>
          <form className="footer-form" onSubmit={handleFooterSubmit}>
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              value={footerEmail}
              onChange={(event) => setFooterEmail(event.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="footer-column">
          <h2>Follow Me</h2>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                aria-label={link.label}
                title={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy; {year} <span>All Rights Reserved</span> | Designed & Developed
          by{" "}
          <a href="https://www.linkedin.com/in/dipalidharmik/" target="_blank" rel="noreferrer">
            {contactInfo.fullName}
          </a>
        </p>
      </div>
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
