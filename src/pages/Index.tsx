import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { projects, profile, type Category } from "@/data/portfolio";
import ProjectSketch from "@/components/ProjectSketch";

const categories: Category[] = ["All work", "AI & privacy", "Applications"];
const featured = projects.slice(0, 3);

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("along");
  const [category, setCategory] = useState<Category>("All work");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const currentProject = featured.find(
    (project) => project.id === activeProject,
  )!;

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <>
      <header className="site-header wrap">
        <a className="identity" href="#home" aria-label="Sujal Almeida, home">
          <span className="identity-mark">
            sa<span>✳</span>
          </span>
          <span>Sujal Almeida</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#background">Background</a>
          <a href="#contact">
            Say hello <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ["Work", "#work"],
              ["Background", "#background"],
              ["Say hello", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main-content">
        <section className="hero wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-intro">
            <div>
              <p className="location">
                <span className="status-dot" /> Boston, Massachusetts
              </p>
              <h1 id="hero-title">
                Curiosity in.
                <br />
                Useful software out.
              </h1>
            </div>
            <div className="hero-bio">
              <p>
                I’m Sujal, a computer science grad student at Northeastern. I
                build across AI, privacy, and everyday tools.
              </p>
              <p className="muted">
                From encrypted learning to a calmer desktop, I like turning a
                good question into something you can use.
              </p>
              <a
                className="text-link"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                Read my resume <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="hero-workspace">
            <div
              className="workspace-tabs"
              role="tablist"
              aria-label="Featured project sketches"
            >
              {featured.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  id={`tab-${project.id}`}
                  aria-controls="project-preview"
                  aria-selected={activeProject === project.id}
                  tabIndex={activeProject === project.id ? 0 : -1}
                  onClick={() => setActiveProject(project.id)}
                  onKeyDown={(event) => {
                    if (
                      ["ArrowLeft", "ArrowRight", "Home", "End"].includes(
                        event.key,
                      )
                    ) {
                      event.preventDefault();
                      const index = featured.findIndex(
                        (p) => p.id === activeProject,
                      );
                      const next =
                        event.key === "Home"
                          ? 0
                          : event.key === "End"
                            ? featured.length - 1
                            : (index +
                                (event.key === "ArrowRight" ? 1 : -1) +
                                featured.length) %
                              featured.length;
                      setActiveProject(featured[next].id);
                      document
                        .getElementById(`tab-${featured[next].id}`)
                        ?.focus();
                    }
                  }}
                >
                  {project.name}
                  <span>
                    {project.id === "along"
                      ? "macOS"
                      : project.id === "plan"
                        ? "Calendar"
                        : "Privacy & ML"}
                  </span>
                </button>
              ))}
              <span className="sketch-label">Project sketches</span>
            </div>
            <div
              role="tabpanel"
              id="project-preview"
              aria-labelledby={`tab-${activeProject}`}
              tabIndex={0}
            >
              <ProjectSketch kind={activeProject} />
              <div className="workspace-caption">
                <span>
                  <strong>{currentProject.name}</strong> /{" "}
                  {currentProject.subtitle}
                </span>
                <a href={currentProject.href} target="_blank" rel="noreferrer">
                  View project <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-footnote">
            <span>Thoughtful systems. Practical outcomes.</span>
            <a href="#work">
              Explore selected work <ArrowDown size={15} />
            </a>
          </div>
        </section>

        <section
          className="work-section wrap"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">Things I’ve built</p>
              <h2 id="work-title">
                Selected work<span className="red-period">.</span>
              </h2>
            </div>
            <p>
              A few explorations in making software
              <br className="desktop-break" /> more useful, human, and private.
            </p>
          </div>
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
                <span>
                  {item === "All work"
                    ? projects.length
                    : projects.filter((project) => project.category === item)
                        .length}
                </span>
              </button>
            ))}
          </div>
          <p className="sr-only" role="status">
            {
              projects.filter(
                (project) =>
                  category === "All work" || project.category === category,
              ).length
            }{" "}
            projects shown
          </p>
          <div className="project-grid">
            {projects
              .filter(
                (project) =>
                  category === "All work" || project.category === category,
              )
              .map((project) => (
                <article className="project-card" key={project.id}>
                  <ProjectSketch kind={project.id} compact />
                  <div className="project-content">
                    <div className="project-title">
                      <h3>{project.name}</h3>
                      <span>{project.category}</span>
                    </div>
                    <p>{project.description}</p>
                    <ul
                      className="stack"
                      aria-label={`${project.name} technologies`}
                    >
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <details>
                      <summary>
                        Behind the build <PlusIcon />
                      </summary>
                      <p>{project.detail}</p>
                    </details>
                    <div className="project-links">
                      <a
                        className="text-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.linkLabel}
                        <ArrowUpRight size={16} />
                      </a>
                      {project.demo && (
                        <a
                          className="text-link"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open app
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>
          <div className="more-work">
            <div>
              <h3>More from the workshop</h3>
              <p>
                Climate models, a fitness assistant, and the experiments along
                the way.
              </p>
            </div>
            <a
              className="text-link"
              href={`${profile.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              All repositories <Github size={18} />
            </a>
          </div>
        </section>

        <section
          className="background-section"
          id="background"
          aria-labelledby="background-title"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="section-kicker">The path so far</p>
                <h2 id="background-title">
                  Built on experience<span className="red-period">.</span>
                </h2>
              </div>
              <p>
                Learning by studying.
                <br />
                Learning even more by doing.
              </p>
            </div>
            <div className="experience-layout">
              <h3 className="subsection-heading">In the field</h3>
              <div className="experience-list">
                <article className="experience-item">
                  <div className="experience-meta">
                    <span>Feb – Aug 2026</span>
                    <span>Mumbai, India</span>
                  </div>
                  <div>
                    <h3>PwC India</h3>
                    <p className="role">Advisory Intern, IDAC</p>
                    <p>
                      Built two AI and agentic proofs of concept, including a
                      prompt amplifier and an agent that investigated dashboard
                      metrics through SQL.
                    </p>
                    <p className="experience-note">
                      Automated reminders across 75+ client interactions and
                      tested logical data models and data marts.
                    </p>
                  </div>
                </article>
                <article className="experience-item">
                  <div className="experience-meta">
                    <span>Dec 2024 – Jan 2025</span>
                    <span>Mumbai, India</span>
                  </div>
                  <div>
                    <h3>ICICI Prudential Life Insurance</h3>
                    <p className="role">Machine Learning Intern</p>
                    <p>
                      Processed over a million data points and engineered 25+
                      features for predictive models.
                    </p>
                    <div className="outcomes">
                      <span>
                        <strong>30%</strong>better data quality
                      </span>
                      <span>
                        <strong>87%</strong>model recall
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="education-layout">
              <h3 className="subsection-heading">In the classroom</h3>
              <div className="education-grid">
                <article>
                  <span className="education-year">2026 – 2028, expected</span>
                  <h3>Northeastern University</h3>
                  <p>MS in Computer Science</p>
                  <span className="muted">Boston, Massachusetts</span>
                  <p className="education-detail">
                    Programming Design Paradigms, Cybersecurity
                  </p>
                </article>
                <article>
                  <span className="education-year">2022 – 2026</span>
                  <h3>
                    Fr. Conceicao Rodrigues
                    <br />
                    College of Engineering
                  </h3>
                  <p>BE in Computer Engineering</p>
                  <span className="muted">Mumbai, India · CGPI 9.1/10</span>
                  <p className="education-detail">
                    Data Structures, Databases, Software Engineering
                  </p>
                </article>
              </div>
            </div>
            <div className="research-layout">
              <h3 className="subsection-heading">In print</h3>
              <div className="research-list">
                <a
                  href="https://doi.org/10.1049/icp.2025.4731"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <span className="publication-type">Conference paper</span>
                    <h3>
                      AI with Agency, Cities with Resilience: Deploying Agentic
                      Systems for Urban Disaster Response
                    </h3>
                    <p>
                      International Conference on Advancing Technology in
                      Engineering and Science
                    </p>
                  </div>
                  <ArrowUpRight size={22} />
                </a>
                <a
                  href="https://ijca.phdfocus.com/archives/volume187/issue43/harnessing-generative-ai-for-precision-chemistry-autonomous-molecular-design-retrosynthetic-planning-and-validated-discovery-pipeline/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <span className="publication-type">Journal article</span>
                    <h3>Harnessing Generative AI for Precision Chemistry</h3>
                    <p>International Journal of Computer Applications</p>
                  </div>
                  <ArrowUpRight size={22} />
                </a>
              </div>
            </div>
            <div className="toolkit-layout">
              <h3 className="subsection-heading">The toolkit</h3>
              <div className="toolkit-grid">
                <div>
                  <h4>Languages & applications</h4>
                  <p>
                    Python, SQL, Java, C++, TypeScript, React, React Native,
                    Django, Flask
                  </p>
                </div>
                <div>
                  <h4>Machine learning & AI</h4>
                  <p>
                    PyTorch, scikit-learn, OpenCV, NumPy, LangChain, Gemini,
                    Ollama
                  </p>
                </div>
                <div>
                  <h4>Privacy & security</h4>
                  <p>
                    Federated learning, homomorphic encryption, Flower, TenSEAL,
                    CKKS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="contact-section wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="section-kicker">
            <span className="status-dot" /> Good conversations start somewhere.
          </p>
          <div className="contact-heading">
            <h2 id="contact-title">
              What are you
              <br />
              working on?
            </h2>
            <p>
              Have an interesting problem, a research idea, or something you’re
              building?
              <br />
              <br />
              I’d like to hear about it.
            </p>
          </div>
          <div className="contact-actions">
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight />
            </a>
            <button
              className="copy-button"
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
            <span className="copy-feedback" role="status">
              {copied
                ? "Email copied"
                : copyError
                  ? "Please select the email address to copy it."
                  : ""}
            </span>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a className="identity-mark" href="#home" aria-label="Back to top">
          sa<span>✳</span>
        </a>
        <p>© {new Date().getFullYear()} Sujal Almeida</p>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Github size={15} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Linkedin size={15} />
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </>
  );
}
function PlusIcon() {
  return (
    <span className="details-icon" aria-hidden="true">
      +
    </span>
  );
}
