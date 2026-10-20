import { useEffect, useState } from 'react'

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'studio', label: 'Studio' },
  { id: 'contact', label: 'Contact' },
]

function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateNavigation = () => {
      setScrolled(window.scrollY > 32)

      const currentSection = [...navigation]
        .reverse()
        .find(({ id }) => {
          const section = document.getElementById(id)
          return section && section.getBoundingClientRect().top <= 150
        })

      if (currentSection) setActiveSection(currentSection.id)
    }

    updateNavigation()
    window.addEventListener('scroll', updateNavigation, { passive: true })
    return () => window.removeEventListener('scroll', updateNavigation)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Northstar home">
          northstar<span>.</span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map(({ id, label }) => (
            <a
              className={activeSection === id ? 'is-active' : ''}
              href={`#${id}`}
              key={id}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-section" id="home">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow"><span /> Independent creative studio</p>
            <h1>Make room<br />for <em>what&apos;s next.</em></h1>
            <p className="hero-copy">
              We build thoughtful digital experiences for people moving the world forward.
            </p>
            <a className="button button-light" href="#work">
              Explore our work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-note">
            <span>Based everywhere</span>
            <span>Working worldwide&nbsp; ↗</span>
          </div>
          <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
            <span />
          </a>
        </section>

        <section className="work-section page-section" id="work">
          <div className="section-heading">
            <p className="eyebrow dark-eyebrow">A few good things</p>
            <h2>Selected work<span>.</span></h2>
            <p>Good ideas, made real — with partners who care about what comes next.</p>
          </div>
          <div className="project-grid">
            <a className="project-card project-summit" href="#contact">
              <div className="project-art summit-art"><span>SUMMIT<br />SOUND</span></div>
              <div className="project-meta"><span>Summit Sound</span><span>Brand · Digital</span></div>
            </a>
            <a className="project-card project-good" href="#contact">
              <div className="project-art good-art"><span>good<br /><i>things</i></span></div>
              <div className="project-meta"><span>Good Things Market</span><span>Strategy · Identity</span></div>
            </a>
          </div>
        </section>

        <section className="services-section page-section" id="services">
          <div>
            <p className="eyebrow">What we bring</p>
            <h2>Small team.<br /><em>Big picture.</em></h2>
          </div>
          <div className="services-list">
            <div><span>01</span><h3>Brand &amp; strategy</h3><p>Find the signal. Give it a voice, a point of view, and a place in the world.</p></div>
            <div><span>02</span><h3>Digital experiences</h3><p>Useful, intuitive, and a little unexpected — made for the way people live now.</p></div>
            <div><span>03</span><h3>Creative direction</h3><p>From the first sketch to the final detail, every choice earns its place.</p></div>
          </div>
        </section>

        <section className="studio-section page-section" id="studio">
          <p className="eyebrow dark-eyebrow">A studio with intention</p>
          <h2>Curious by nature.<br /><em>Considered by design.</em></h2>
          <p className="studio-copy">
            We&apos;re an independent team of thinkers and makers who believe that better work
            starts with better questions. We partner closely, stay nimble, and make every
            detail count.
          </p>
          <a className="text-link" href="#contact">Get to know us <span aria-hidden="true">↗</span></a>
        </section>

        <section className="contact-section page-section" id="contact">
          <p className="eyebrow">Have a good one in mind?</p>
          <h2>Let&apos;s make<br /><em>something matter.</em></h2>
          <a className="button button-light" href="mailto:hello@northstar.studio">
            hello@northstar.studio <span aria-hidden="true">↗</span>
          </a>
          <footer><a className="wordmark footer-wordmark" href="#home">northstar<span>.</span></a><span>Independent by design. © 2025</span></footer>
        </section>
      </main>
    </>
  )
}

export default Page