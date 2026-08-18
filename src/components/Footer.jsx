import { Link } from 'react-router-dom'
import config from '../data/config.json'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Link to="/" className="nav-brand">
              <div className="nav-logo">BBB</div>
              <div className="nav-brand-text">
                <div className="nav-brand-name">Building Blocks & Bridges LTD</div>
              </div>
            </Link>
            <p className="footer-tagline">Youth mentoring & enrichment specialists. © {new Date().getFullYear()} Building Blocks & Bridges LTD.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><Link to="/music-enrichment">Music Enrichment</Link></li>
                <li><Link to="/mentoring-interventions">Mentoring & Interventions</Link></li>
                <li><Link to="/sporting-enrichment">Sporting Enrichment</Link></li>
                <li><Link to="/animal-therapy-outreach">Animal Therapy & Respite</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><Link to="/who-we-are">Who we are</Link></li>
                <li><Link to="/our-story">Our story</Link></li>
                <li><Link to="/get-in-contact">Contact us</Link></li>
                <li><Link to="/privacy-policy">Privacy policy</Link></li>
                <li><Link to="/safeguarding-policy">Safeguarding policy</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href={`tel:${config.phoneRaw}`}>{config.phone}</a></li>
                <li><a href={`mailto:${config.email}`}>{config.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-credentials">
          {config.credentials}
        </div>
      </div>
    </footer>
  )
}
