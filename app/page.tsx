import Image from "next/image";
import profilePhoto from "@/app/assets/me.jpg";
import { education } from "@/app/data/education";
import { experiences } from "@/app/data/experiences";
import { profile } from "@/app/data/profile";
import { projects } from "@/app/data/projects";
import { socials } from "@/app/data/socials";
import { ScrollEffects } from "@/app/components/layout/ScrollEffects";

const skills = [
  ["⚛", "React"],
  ["TS", "TypeScript"],
  ["N", "Next.js"],
  ["JS", "JavaScript"],
  ["◈", "Node.js"],
  ["◇", "Tailwind CSS"],
  ["⑂", "Git"],
  ["▱", "Docker"],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`} aria-label="Pedro Henrique">
      <span>P</span><span>H</span>
    </span>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <header className="site-header">
        <a href="#inicio" aria-label="Ir para o início"><Logo /></a>
        <nav aria-label="Navegação principal">
          <a className="active" href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#skills">Skills</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="button button-dark header-cta" href={profile.resumeUrl} download>
          Baixar CV <span aria-hidden="true">⇩</span>
        </a>
      </header>

      <main>
        <section className="hero shell" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Olá, eu sou</p>
            <h1>Desenvolvedor<br /><strong>Full Stack</strong></h1>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Ver projetos <span>→</span></a>
              <a className="button button-outline" href={`mailto:${profile.email}`}>Entrar em contato <span>✉</span></a>
            </div>
            <p className="connect-label">Conecte-se comigo</p>
            <div className="social-row">
              {socials.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
                  {social.label === "GitHub" ? "GH" : "in"}
                </a>
              ))}
              <a href={`mailto:${profile.email}`} aria-label="E-mail">✉</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dot-grid" />
            <div className="portrait-panel">
              <Image src={profilePhoto} alt={`Foto profissional de ${profile.name}`} priority />
            </div>
            <span className="tech-float react">⚛</span>
            <span className="tech-float node">JS</span>
            <span className="tech-float type">TS</span>
            <span className="tech-float javascript">JS</span>
            <div className="code-card">
              <code><b>const</b> developer = {"{"}<br />
                &nbsp;name: <em>&apos;{profile.name}&apos;</em>,<br />
                &nbsp;skills: <em>[&apos;React&apos;, &apos;TypeScript&apos;, &apos;Node.js&apos;]</em>,<br />
                &nbsp;passion: <em>&apos;Criar soluções incríveis&apos;</em><br />
                {"}"};
              </code>
            </div>
          </div>
        </section>

        <section className="about-strip" id="sobre">
          <div className="shell about-grid">
            <div className="about-copy">
              <h2><Icon>⌁</Icon> Sobre mim</h2>
              <p>{profile.about}</p>
            </div>
            <div className="stats">
              <div><Icon>◷</Icon><strong>+2 anos</strong><span>de experiência</span></div>
              <div><Icon>⌂</Icon><strong>{projects.length}+</strong><span>projetos cadastrados</span></div>
              <div><Icon>▦</Icon><strong>8+</strong><span>tecnologias</span></div>
              <div><Icon>▣</Icon><strong className="available">Disponível</strong><span>para novos projetos</span></div>
            </div>
          </div>
        </section>

        <section className="shell content-section" id="skills">
          <h2 className="section-title"><span /> Skills &amp; Tecnologias <span /></h2>
          <div className="skill-grid">
            {skills.map(([symbol, label], index) => (
              <div className={`skill skill-${index}`} key={label}><b>{symbol}</b><span>{label}</span></div>
            ))}
          </div>
        </section>

        <section className="shell content-section projects" id="projetos">
          <div className="section-heading">
            <h2 className="section-title"><span /> Projetos em destaque <span /></h2>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">Ver todos →</a>
          </div>
          <div className="project-grid">
            {projects.slice(0, 3).map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className={`project-preview preview-${index}`}>
                  <div className="preview-bar"><i /><i /><i /></div>
                  <div className="preview-layout"><span /><span /><span /><span /><span /><span /></div>
                </div>
                <div className="project-body">
                  <div className="card-title"><h3>{project.name}</h3><a href={project.repositoryUrl} aria-label={`Abrir ${project.name}`}>↗</a></div>
                  <p>{project.description}</p>
                  <div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="shell career-grid content-section" id="experiencia">
          <div>
            <h2 className="section-title"><span /> Experiência <span /></h2>
            <div className="timeline">
              {experiences.slice(0, 3).map((experience, index) => (
                <article key={`${experience.company}-${index}`}>
                  <i />
                  <h3>{experience.role}</h3>
                  <p className="meta">{experience.company} · {experience.period}</p>
                  <p>{experience.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="education-card" id="formacao">
            <h2><Icon>◆</Icon> Formação</h2>
            {education.slice(0, 2).map((item) => (
              <div key={`${item.institution}-${item.course}`}>
                <h3>{item.course}</h3>
                <p>{item.institution} · {item.period}</p>
              </div>
            ))}
            <h2 className="cert-title"><Icon>♟</Icon> Certificações</h2>
            <ul><li>Desenvolvimento Web Full Stack</li><li>React e TypeScript</li><li>Node.js e APIs REST</li></ul>
          </aside>
        </section>

        <section className="contact-banner shell" id="contato">
          <div><h2>Vamos trabalhar juntos?</h2><p>{profile.availability}.</p></div>
          <a className="button button-primary" href={`mailto:${profile.email}`}>Entrar em contato <span>✉</span></a>
        </section>
      </main>

      <footer>
        <div className="shell footer-grid">
          <div><Logo light /><p>Desenvolvendo soluções digitais<br />que fazem a diferença.</p><small>© {new Date().getFullYear()} Todos os direitos reservados.</small></div>
          <div><h3>Navegação</h3><a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#experiencia">Experiência</a><a href="#skills">Skills</a><a href="#contato">Contato</a></div>
          <div><h3>Redes sociais</h3>{socials.map(s => <a key={s.label} href={s.url}>{s.label}</a>)}<a href={`mailto:${profile.email}`}>Email</a></div>
          <div><h3>Localização</h3><p>{profile.location}</p><p>Disponível para trabalho remoto<br />em todo o mundo.</p></div>
        </div>
      </footer>
    </>
  );
}
