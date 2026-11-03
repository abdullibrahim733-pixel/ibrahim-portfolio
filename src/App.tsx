import { useEffect, useState, type CSSProperties } from 'react'
import './App.css'
import ExtendedNotes from './ExtendedNotes'
import { projects, type Project } from './projects'

const focusAreas = [
  ['Software', 'Applications and practical digital products.'],
  ['Artificial intelligence', 'Useful AI tools and intelligent systems.'],
  ['Robotics', 'Machines that bring code into the real world.'],
  ['Embedded systems', 'Connected devices, sensors and microcontrollers.'],
  ['Electrical engineering', 'Electronics, control and applied engineering.'],
  ['Entrepreneurship', 'Turning real problems into useful ventures.'],
]

const values = [
  ['Curiosity', 'I ask better questions before I choose what to build.'],
  ['Integrity', 'I stay honest about what works, what does not and what needs testing.'],
  ['Discipline', 'I turn ambitious ideas into steady, practical progress.'],
  ['Innovation', 'I combine engineering and emerging technology to find useful new approaches.'],
  ['Accountability', 'I take responsibility for the impact and quality of what I create.'],
  ['Collaboration', 'I learn from people with different skills and perspectives.'],
  ['Purpose', 'I start with a real need and build toward a meaningful outcome.'],
]
const skillSet = [
  { name: 'Embedded AI development', level: 80 },
  { name: 'Robotics', level: 70 },
  { name: 'Mechatronics engineering', level: 60 },
  { name: 'Entrepreneurship', level: 60 },
]

function SiteNav() {
  const home = window.location.pathname === '/'
  const [scrolled, setScrolled] = useState(window.scrollY > 24)
  const homeAnchor = (id: string) => home ? `#${id}` : `/#${id}`
  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])
  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <a className="brand" href="/" aria-label="Ibrahim Abdull, home"><img src="/ia-mark.png" alt="" /></a>
      <nav aria-label="Main navigation"><a href={homeAnchor('about')}>About</a><a href={homeAnchor('focus')}>Focus</a><a href={homeAnchor('skills')}>Skills</a><a href="/work">Work</a><a href={homeAnchor('journey')}>Journey</a><a href="/resources">Resources</a></nav>
      <a className="header-contact" href={homeAnchor('contact')}>Contact ↗</a>
    </header>
  )
}

function ScrollMotion() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('main section, main article')
    elements.forEach((element) => element.classList.add('scroll-reveal'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting))
    }, { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  return null
}

function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const storageKey = 'ibrahim-portfolio-intro-seen'
    if (sessionStorage.getItem(storageKey)) {
      setVisible(false)
      return
    }

    sessionStorage.setItem(storageKey, 'true')
    const exitTimer = window.setTimeout(() => setExiting(true), 900)
    const removeTimer = window.setTimeout(() => setVisible(false), 1160)
    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`loading-screen${exiting ? ' is-exiting' : ''}`} role="status" aria-label="Loading Ibrahim Abdull’s portfolio">
      <img className="loading-logo" src="/ia-mark.png" alt="Ibrahim Abdull" />
      <div className="loading-track" role="progressbar" aria-label="Loading portfolio" aria-valuemin={0} aria-valuemax={100} aria-valuetext="Loading">
        <span className="loading-progress" />
      </div>
    </div>
  )
}

function ProjectPreview({ project }: { project: Project }) {
  const artwork = project.slug === 'siafu'
    ? '/projects/siafu-ant.svg'
    : `/projects/${project.slug}-logo.webp`

  return (
    <div className={`project-preview preview-${project.slug}`}>
      <img src={artwork} alt={project.slug === 'siafu' ? 'Ant illustration for Siafu' : `${project.name} logo`} />
    </div>
  )
}

function WorkPage() {
  return (
    <>
      <ScrollMotion />
      <SiteNav />
      <main className="subpage work-page" id="top">
        <section className="subpage-hero">
          <p>Engineering · Software · Intelligent systems</p>
          <h1>Selected work</h1>
          <p>Projects and concepts shaped around practical problems. Each visual is a concept preview, not a screenshot of a finished product.</p>
        </section>
        <section className="work-list">
          {projects.map((project) => <article className="work-feature glass" key={project.slug}>
            <ProjectPreview project={project} />
            <div className="work-feature-copy"><span className="project-status">{project.status}</span><h2>{project.name}</h2><p>{project.description}</p><a className="button button-light" href={`/work/${project.slug}`}>Explore project ↗</a></div>
          </article>)}
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

type ResourceCategory = 'Projects' | 'Videos' | 'PDFs' | 'Research'
type ResourceItem = { title: string; description: string; category: ResourceCategory; tags: string[]; href?: string; label: string }

const fallbackResourceItems: ResourceItem[] = [
  { title: 'Agentic AI with Python', description: 'A PDF resource on building agentic AI with Python.', category: 'PDFs', tags: ['AI', 'Python', 'Agents'], label: 'PDF · Link pending' },
  { title: 'Embedded AI for Agriculture Blueprint', description: 'A blueprint for embedded AI applications in agriculture.', category: 'PDFs', tags: ['Embedded AI', 'Agriculture'], label: 'PDF · Link pending' },
  { title: 'vLLM Overview', description: 'An overview of vLLM and serving large language models.', category: 'PDFs', tags: ['AI', 'vLLM', 'LLMs'], label: 'PDF · Link pending' },
  { title: 'Swarm Robotics', description: 'A video resource exploring swarm robotics.', category: 'Videos', tags: ['Robotics', 'Swarm systems'], label: 'Video · Link pending' },
]

function ResourcesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<ResourceCategory | 'All'>('All')
  const [items, setItems] = useState(fallbackResourceItems)
  const categories: Array<ResourceCategory | 'All'> = ['All', 'Projects', 'Videos', 'PDFs', 'Research']
  useEffect(() => {
    const url = import.meta.env.VITE_SUPABASE_URL
    const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
    if (!url || !key) return
    const endpoint = new URL('/rest/v1/resources', url)
    endpoint.searchParams.set('select', 'title,description,resource_type,tags,resource_url,sort_order')
    endpoint.searchParams.set('is_published', 'eq.true')
    endpoint.searchParams.set('order', 'sort_order.asc')
    let active = true
    fetch(endpoint, { headers: { apikey: key, Authorization: `Bearer ${key}` } })
      .then((response) => { if (!response.ok) throw new Error('Resource query failed'); return response.json() })
      .then((rows: Array<{ title: string; description: string; resource_type: string; tags: string[]; resource_url: string | null }>) => {
        if (!active) return
        setItems(rows.map((row) => {
          const categoryName: ResourceCategory = row.resource_type === 'pdf' ? 'PDFs' : row.resource_type === 'video' ? 'Videos' : row.resource_type === 'research' ? 'Research' : 'Projects'
          const itemType = categoryName === 'PDFs' ? 'PDF' : categoryName === 'Videos' ? 'Video' : categoryName === 'Research' ? 'Research' : 'Project'
          return { title: row.title, description: row.description, category: categoryName, tags: row.tags ?? [], href: row.resource_url ?? undefined, label: row.resource_url ? itemType : `${itemType} · Link pending` }
        }))
      })
      .catch(() => undefined)
    return () => { active = false }
  }, [])
  const filtered = items.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category
    const searchable = `${item.title} ${item.description} ${item.category} ${item.tags.join(' ')}`.toLowerCase()
    return matchesCategory && searchable.includes(query.trim().toLowerCase())
  })
  return <>
    <ScrollMotion />
    <SiteNav />
    <main className="subpage resources-page" id="top">
      <section className="subpage-hero">
        <p>Browse · Discover · Build</p>
        <h1>Resources</h1>
        <p>A searchable library of projects and resources. Filter by type or search by name, topic or keyword.</p>
      </section>
      <section className="resource-library" aria-label="Resource library">
        <div className="resource-controls glass">
          <label className="resource-search"><span>Search library</span><input type="search" placeholder="Try AI, engineering, Dysen…" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
          <div className="resource-filters" role="group" aria-label="Filter by category">{categories.map((item) => <button className={category === item ? 'active' : ''} key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div>
        </div>
        <div className="resource-results" aria-live="polite"><span>{filtered.length} {filtered.length === 1 ? 'item' : 'items'}</span></div>
        {filtered.length ? <div className="resource-catalog">{filtered.map((item) => <article className="glass catalog-card" key={item.title}>
          <div className="catalog-card-top"><span className="catalog-category">{item.category}</span><span className="catalog-status">{item.label}</span></div>
          <h2>{item.title}</h2><p>{item.description}</p>
          <div className="catalog-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {item.href ? <a href={item.href}>View resource ↗</a> : <span className="catalog-pending">Link coming soon</span>}
        </article>)}</div> : <div className="glass resource-empty"><h2>No matching resources</h2><p>Try a different search or category.</p><button className="button button-clear" type="button" onClick={() => { setQuery(''); setCategory('All') }}>Clear filters</button></div>}
        <p className="resource-library-note">The library is ready for videos, PDFs and research to be added as they’re published.</p>
      </section>
    </main>
    <SiteFooter />
  </>
}

function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <ScrollMotion />
      <SiteNav />
      <main className="subpage detail-page" id="top">
        <a className="back-link" href="/work">← All work</a>
        <section className="detail-hero">
          <div className="detail-copy"><span className="project-status">{project.status}</span><h1>{project.name}</h1><p>{project.description}</p><a className="button button-light" href="/#contact">Discuss a project ↗</a></div>
          <ProjectPreview project={project} />
        </section>
        <section className="detail-content">
          <article className="glass detail-block"><h2>Overview</h2><p>{project.overview}</p></article>
          <article className="glass detail-block"><h2>Focus</h2><p>{project.focus}</p></article>
          <article className="glass detail-block"><h2>What comes next</h2><p>{project.nextStep}</p></article>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main"><a className="brand" href="/" aria-label="Ibrahim Abdull, home"><img src="/ia-mark.png" alt="" /></a><p>Engineering useful ideas into reality.</p><a className="footer-top" href="#top">Back to top ↑</a></div>
    <div className="footer-ecosystem"><span className="ecosystem-label">Technology ecosystem</span><div className="ecosystem-names" aria-label="Technology organizations">{['GitHub', 'Microsoft', 'Google', 'NVIDIA'].map((name) => <span key={name}>{name}</span>)}</div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Ibrahim Abdull</span><a className="icon-credit" href="https://www.vecteezy.com/" target="_blank" rel="noreferrer">Social icons by Vecteezy</a></div>
  </footer>
}

function HomePage() {
  const [contactReveal, setContactReveal] = useState(false)
  return (
    <main id="top">
      <ScrollMotion />
      <SiteNav />

      <section className="hero" id="home" data-top="true">
        <img className="hero-photo" src="/ibrahim-portrait.webp" alt="Ibrahim Abdull seated in a charcoal suit" />
        <div className="hero-shade" />
        <div className="hero-content glass">
          <p className="hero-location">Tanzania, engineering and technology</p>
          <h1>Ibrahim<br />Abdull</h1>
          <h2>Engineer. Developer.<br />Technology entrepreneur.</h2>
          <p>I build useful systems where engineering, software and intelligent technology meet.</p>
          <div className="hero-actions"><a className="button button-light" href="#work">Explore my work <span>↓</span></a><a className="button button-clear" href="#contact">Work with me <span>↗</span></a></div>
        </div>
      </section>

      <section className="about section" id="about">
        <h2>Engineering with purpose.</h2>
          <p>I’m Ibrahim Abdull, a Tanzanian engineer and technology entrepreneur. I’m currently a student and STEM Lead at SADG Company. I explore software, AI, robotics and electrical engineering to solve practical problems. I’ve worked with multiple frameworks and with C++, Rust, Assembly and Python.</p>
      </section>

      <section className="focus section" id="focus">
        <h2>What I work on</h2>
        <div className="focus-grid">{focusAreas.map(([title, description]) => <article className="glass focus-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="skills section" id="skills">
        <h2>Skills in motion</h2>
        <p className="skills-intro">A growing practice across intelligent systems, engineering and building ventures.</p>
        <div className="skills-ladder">{skillSet.map((skill, index) => <article className="glass skill-item" key={skill.name} style={{ '--skill-level': `${skill.level}%`, '--skill-step': `${index * 34}px` } as CSSProperties}>
          <div className="skill-heading"><h3>{skill.name}</h3><span>{skill.level}%</span></div>
          <div className="skill-track" role="meter" aria-label={`${skill.name} progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level}><span /></div>
        </article>)}</div>
      </section>

      <section className="work section" id="work">
        <div className="section-title-row"><h2>Selected work</h2><a className="button button-clear" href="/work">View all work ↗</a></div>
        <div className="project-grid">{projects.map((project) => <article className="glass project-card" key={project.slug}><ProjectPreview project={project} /><h3 className="project-logo">{project.name}</h3><p>{project.description}</p><span>{project.status}</span><a className="project-open" href={`/work/${project.slug}`}>View project ↗</a></article>)}</div>
      </section>

      <section className="journey section" id="journey">
        <h2>My journey</h2>
        <div className="journey-grid"><article className="glass journey-card" tabIndex={0}><span className="journey-step">01</span><h3>Currently a student</h3><p>Building my engineering knowledge through study and hands-on projects.</p></article><article className="glass journey-card" tabIndex={0}><span className="journey-step">02</span><h3>STEM Lead at SADG Company</h3><p>Supporting young people to explore science, technology, engineering and mathematics.</p></article><article className="glass journey-card" tabIndex={0}><span className="journey-step">03</span><h3>Community</h3><p>Shared a teaching session at GDG DevFest Arusha.</p></article></div>
      </section>

      <section className="resources section" id="resources">
        <h2>Resources</h2>
        <p className="resources-intro">Browse projects, videos, PDFs and research in one searchable library.</p>
        <a className="button button-light" href="/resources">Explore the resource library ↗</a>
        <ExtendedNotes />
      </section>

      <section className="values section">
        <h2>How I build</h2>
        <div className="values-grid">{values.map(([title, view]) => <article className="value-block glass" key={title} tabIndex={0}>
          <h3>{title}</h3><p>{view}</p>
        </article>)}</div>
      </section>

      <section className="contact section" id="contact">
        <div className={`contact-panel glass${contactReveal ? ' contact-lit' : ''}`}><div className="contact-heading"><div><h2>Have a problem worth solving?</h2><p>I’m open to engineering opportunities, software and AI projects, prototyping, consultation and collaboration. Let’s build something useful.</p></div>
          <button className={`contact-lamp${contactReveal ? ' is-on' : ''}`} type="button" aria-expanded={contactReveal} aria-controls="contact-details" aria-label={contactReveal ? 'Pull the lamp chain to hide contact details' : 'Pull the lamp chain to reveal contact details'} onClick={() => setContactReveal((visible) => !visible)}>
            <svg className="lamp-illustration" viewBox="0 0 128 164" role="img" aria-hidden="true">
              <defs>
                <linearGradient id="lampMetal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f4f0e6"/><stop offset=".42" stopColor="#a5a39b"/><stop offset="1" stopColor="#4a4a48"/></linearGradient>
                <linearGradient id="lampInner" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f4f0e6"/><stop offset="1" stopColor="#76746f"/></linearGradient>
                <radialGradient id="lampLight"><stop offset="0" stopColor="#f7edbd" stopOpacity=".72"/><stop offset="1" stopColor="#d6d995" stopOpacity="0"/></radialGradient>
                <filter id="lampGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="6"/></filter>
              </defs>
              <ellipse className="lamp-beam-glow" cx="64" cy="117" rx="46" ry="39" fill="url(#lampLight)" filter="url(#lampGlow)"/>
              <path className="lamp-beam" d="M19 82 Q64 101 109 82 L124 157 Q64 142 4 157Z" fill="url(#lampLight)"/>
              <path d="M61 1V38" fill="none" stroke="#d8d3c1" strokeWidth="3" strokeLinecap="round"/>
              <path d="M57 35Q64 31 71 35V42Q64 46 57 42Z" fill="url(#lampMetal)"/>
              <path className="lamp-shade-body" d="M24 51C25 31 44 23 64 23S103 31 104 51L116 79Q64 101 12 79Z" fill="url(#lampMetal)" stroke="#ded9c8" strokeOpacity=".58" strokeWidth="1.5"/>
              <path d="M24 52C39 59 88 59 104 52L115 78Q64 96 13 78Z" fill="url(#lampInner)" opacity=".8"/>
              <path d="M13 79Q64 98 115 79" fill="none" stroke="#ece7d4" strokeWidth="3" strokeLinecap="round"/>
              <path d="M52 83L55 90H73L76 83" fill="#5d6248" stroke="#c9c7b3" strokeWidth="1.5"/>
              <path className="lamp-bulb" d="M57 90C57 85 71 85 71 90L69 97H59Z" fill="#f5e8a9"/>
              <path d="M60 98H68" stroke="#d5d0bb" strokeWidth="2" strokeLinecap="round"/>
              <path className="lamp-chain" d="M101 77Q108 91 105 106T108 128" fill="none" stroke="#ddd7c3" strokeWidth="1.8" strokeDasharray="2 3" strokeLinecap="round"/>
              <circle className="lamp-pull" cx="108" cy="132" r="4.5" fill="url(#lampMetal)" stroke="#eee9d9" strokeWidth="1"/>
            </svg>
            <span className="lamp-hint">Pull for contact</span>
          </button>
        </div>
          <div className={`contact-details${contactReveal ? ' is-revealed' : ''}`} id="contact-details" aria-hidden={!contactReveal}>
          <div className="contact-links">
            <a href="https://wa.me/255783414177" target="_blank" rel="noreferrer"><span className="contact-icon" aria-hidden="true"><img src="/icons/whatsapp.png" alt="" /></span><span>WhatsApp</span><b>+255 783 414 177</b></a>
            <a href="mailto:abdullibrahim733@gmail.com"><span className="contact-icon" aria-hidden="true"><img src="/icons/email.png" alt="" /></span><span>Email</span><b>abdullibrahim733@gmail.com</b></a>
            <a href="https://www.linkedin.com/in/ibrahim-abdull2" target="_blank" rel="noreferrer"><span className="contact-icon" aria-hidden="true"><img src="/icons/linkedin.png" alt="" /></span><span>LinkedIn</span><b>ibrahim-abdull2</b></a>
            <a href="https://www.instagram.com/ibrahim_abdull_umg" target="_blank" rel="noreferrer"><span className="contact-icon" aria-hidden="true"><img src="/icons/instagram.png" alt="" /></span><span>Instagram</span><b>@ibrahim_abdull_umg</b></a>
          </div>
          <div className="contact-actions"><a className="button button-light" href="https://wa.me/255783414177" target="_blank" rel="noreferrer">Start a conversation ↗</a><a className="button button-clear" href="mailto:abdullibrahim733@gmail.com?subject=Consultation%20request">Request a consultation ↗</a></div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const project = path.startsWith('/work/') ? projects.find((item) => item.slug === path.split('/')[2]) : undefined
  const page = path === '/resources'
    ? <ResourcesPage />
    : path === '/work'
      ? <WorkPage />
      : project
        ? <ProjectPage project={project} />
        : path.startsWith('/work/')
          ? <WorkPage />
          : <HomePage />

  return <><LoadingScreen />{page}</>
}

export default App
