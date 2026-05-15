import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const close = () => { setOpen(false); setServicesOpen(false) }
  const servicesRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={close}>
          <div className="nav-logo">BB</div>
          <div className="nav-brand-text">
            <div className="nav-brand-name">Building Blocks & Bridges</div>
            <div className="nav-brand-tag">Youth mentoring & enrichment</div>
          </div>
        </Link>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <i className={`ti ti-${open ? 'x' : 'menu-2'}`}></i>
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={close}>Home</NavLink>
          <NavLink to="/who-we-are" className="nav-link" onClick={close}>Who we are</NavLink>
          <div className="nav-dropdown" ref={servicesRef}>
            <button
              className={`nav-link nav-link-button${servicesOpen ? ' open' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services <i className="ti ti-chevron-down nav-chevron"></i>
            </button>
            <div className={`nav-dropdown-menu${servicesOpen ? ' open' : ''}`}>
              <NavLink to="/music-enrichment" className="nav-dropdown-item" onClick={close}>
                <i className="ti ti-music"></i>
                <span>Music Enrichment</span>
              </NavLink>
              <NavLink to="/mentoring-interventions" className="nav-dropdown-item" onClick={close}>
                <i className="ti ti-users"></i>
                <span>Mentoring Interventions</span>
              </NavLink>
              <NavLink to="/sporting-enrichment" className="nav-dropdown-item" onClick={close}>
                <i className="ti ti-ball-football"></i>
                <span>Sporting Enrichment</span>
              </NavLink>
              <NavLink to="/animal-therapy-outreach" className="nav-dropdown-item" onClick={close}>
                <i className="ti ti-paw"></i>
                <span>Animal Therapy Outreach</span>
              </NavLink>
            </div>
          </div>
          <NavLink to="/get-in-contact" className="nav-link" onClick={close}>Contact</NavLink>
          <Link to="/get-in-contact" className="nav-cta" onClick={close}>Make an enquiry</Link>
        </div>
      </div>
    </nav>
  )
}
