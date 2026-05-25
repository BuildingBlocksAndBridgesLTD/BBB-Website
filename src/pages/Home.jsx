import { Link } from 'react-router-dom'
import { TrustBar, EnquirySection } from '../components/Sections'
import testimonials from '../data/testimonials.json'
import voices from '../data/studentVoices.json'
import images from '../data/images.json'

const services = [
  { slug: 'music-enrichment', title: 'Music Enrichment', accent: '#D4537E', accentLight: '#FBEAF0', icon: 'music', img: images.music, blurb: 'Steel Pans, Percussion, Drumming, Rap and Spoken Word. A powerful outlet for creativity and self-expression in a fun, structured, inclusive setting.' },
  { slug: 'mentoring-interventions', title: 'Mentoring & Interventions', accent: '#378ADD', accentLight: '#E6F1FB', icon: 'message-heart', img: images.mentoring, blurb: 'One-to-one and small group mentoring built on trust and positive relationships, supporting young people to feel heard, valued, and ready to thrive.' },
  { slug: 'sporting-enrichment', title: 'Sporting Enrichment', accent: '#639922', accentLight: '#EAF3DE', icon: 'ball-football', img: images.sport, blurb: 'Football, basketball, athletics, racket sports and gym. Building discipline, determination, self-regulation and the joy of progress through movement.' },
  { slug: 'animal-therapy-outreach', title: 'Animal Therapy & Respite', accent: '#BA7517', accentLight: '#FAEEDA', icon: 'paw', img: images.animal, blurb: 'Time with horses, farmyard animals and nature. A calming therapeutic space that fosters patience, empathy, responsibility and connection.' },
]

const pathwayMap = {
  music:    { label: 'Music',         color: '#D4537E', dark: '#D4537E', icon: 'music' },
  mentoring:{ label: 'Mentoring',     color: '#7CB8F0', dark: '#378ADD', icon: 'message-heart' },
  sport:    { label: 'Sport',         color: '#A5D66B', dark: '#639922', icon: 'ball-football' },
  animal:   { label: 'Animal Therapy',color: '#FAC775', dark: '#BA7517', icon: 'paw' },
}

const benefits = [
  { title: 'Enhanced Engagement', body: 'Our creative, hands-on approach re-engages students who may struggle in traditional learning environments.', icon: 'bolt', bg: '#EEEDFE', color: '#5B3C8A' },
  { title: 'Improved Wellbeing & Behaviour', body: 'Sessions promote self-regulation, empathy, and confidence, supporting whole school wellbeing and inclusion goals while strengthening family relationships at home.', icon: 'heart-handshake', bg: '#FBEAF0', color: '#D4537E' },
  { title: 'Positive Impact on Families', body: 'Children carry new confidence, calm, and empathy into daily life, helping schools, services and families experience better communication, cooperation, and emotional balance.', icon: 'home-heart', bg: '#FAEEDA', color: '#BA7517' },
  { title: 'Targeted Support for SEN & SEMH Needs', body: 'Each programme is tailored to individual needs and EHCP outcomes, helping every child thrive emotionally and academically.', icon: 'user-star', bg: '#E6F1FB', color: '#185FA5' },
  { title: 'Reduced Exclusions & Improved Attendance', body: 'Mentoring and enrichment reduce behavioural incidents and help students rebuild positive connections with school and community.', icon: 'trending-up', bg: '#EAF3DE', color: '#3B6D11' },
  { title: 'Partnership Approach', body: 'We work closely with teachers, SENCOs, pastoral teams, and families to ensure interventions align with school values, curriculum goals, and safeguarding standards.', icon: 'users-group', bg: '#EEEDFE', color: '#5B3C8A' },
  { title: 'Flexible Delivery', body: 'Available during the school day, after school, or through structured contracts. Our sessions fit seamlessly into your existing provision.', icon: 'calendar-event', bg: '#FAEEDA', color: '#E8722C', span2: true },
]

// Pick one quote per pathway for homepage strip
const homepageVoices = ['music', 'mentoring', 'sport', 'animal'].map(p => voices.items.find(v => v.pathway === p))

const featured = testimonials.items.find(t => t.featured)
const others = testimonials.items.filter(t => !t.featured)
const colorMap = { purple: '#5B3C8A', orange: '#E8722C', blue: '#378ADD', green: '#639922', pink: '#D4537E', amber: '#BA7517' }

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">Trusted by schools & local services</div>
            <h1>Building Blocks<br/>and Bridges</h1>
            <p className="hero-tagline">Mentoring, empowering and supporting young people through creativity, movement and meaningful connections.</p>

            <div className="hero-testimonial">
              <div className="hero-testimonial-mark">&ldquo;</div>
              <div className="hero-testimonial-text">Through your passion, patience, and encouragement, you create a supportive and inspiring environment where young people can learn, build confidence and express themselves through rhythm and sound.</div>
              <div className="hero-testimonial-attr">— Music programme partner</div>
            </div>

            <p className="hero-sub">Inclusive programmes for young people aged 8 to 18, delivered in schools, alternative provision and community settings.</p>
            <div className="hero-actions">
              <Link to="/get-in-contact" className="btn btn-primary">Make an enquiry <i className="ti ti-arrow-right"></i></Link>
              <a href="#services" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>Explore our services</a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-headshot">
              <img src={images.about} alt="Jamah Lynam, founder" />
            </div>
            <div className="hero-image">
              <img src={images.hero} alt="Jamah Lynam, founder of Building Blocks and Bridges" />
            </div>
            <div className="hero-badge">
              <div className="hero-badge-icon"><i className="ti ti-award"></i></div>
              <div className="hero-badge-text">
                <div className="hero-badge-title">10+ years experience</div>
                <div className="hero-badge-sub">in youth development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* MISSION */}
      <section className="section cream">
        <div className="mission">
          <div className="section-eyebrow">Our mission</div>
          <h2>Empowering young people to discover their potential</h2>
          <p>Founded by <strong>Jamah Lynam</strong>, Building Blocks and Bridges empowers young people to discover their potential through creativity, movement and meaningful connection. Inspired by Jamah's lived experience and his deep understanding of the barriers young people face in education, we use enrichment through music and sports, mentoring and therapeutic experiences to build confidence, resilience, and emotional wellbeing. We help every young person, particularly those with additional needs or barriers to learning, thrive both in and beyond the classroom.</p>
          <Link to="/who-we-are" className="btn">Meet Jamah <i className="ti ti-arrow-right"></i></Link>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section cream-warm">
        <div className="section-head">
          <div className="section-eyebrow">What we offer</div>
          <h2>Our services</h2>
          <p className="section-sub">Each service can run standalone or combine into a fully tailored programme.</p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <Link key={s.slug} to={`/${s.slug}`} className="svc-card" style={{ '--accent': s.accent, '--accent-light': s.accentLight }}>
              <div className="svc-card-img-wrap">
                <img src={s.img} alt={s.title} onError={(e) => { e.target.style.display = 'none' }} />
              </div>
              <div className="svc-card-body">
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="svc-card-link">View more <i className="ti ti-arrow-right"></i></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STUDENT VOICES */}
      <section className="section dark-purple">
        <div className="section-head">
          <div className="section-eyebrow">In their own words</div>
          <h2>What young people say</h2>
        </div>
        <div className="voices-grid">
          {homepageVoices.map((v, i) => {
            const p = pathwayMap[v.pathway]
            return (
              <div key={i} className="voice-card" style={{ '--vacc': p.dark }}>
                <div className="voice-pathway" style={{ color: p.color }}>
                  <i className={`ti ti-${p.icon}`}></i> {p.label}
                </div>
                <p className="voice-quote">"{v.quote}"</p>
                <div className="voice-attribution">Student, age {v.age}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section cream">
        <div className="section-head">
          <div className="section-eyebrow">Getting started</div>
          <h2>How we work</h2>
          <p className="section-sub">From first contact to first session in three simple steps.</p>
        </div>
        <div className="steps-grid">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-card">
              <h3>Get in touch</h3>
              <p>Fill in our short enquiry form or give Jamah a call. Tell us a little about your young people and what you're hoping to achieve.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-card">
              <h3>We design your programme</h3>
              <p>We tailor a programme around your specific needs, the right service, the right format, the right time, aligned to your EHCP outcomes, school values, or contract goals.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-card">
              <h3>We deliver</h3>
              <p>In-school, after school, or through alternative provision. We keep you informed throughout and provide outcomes reporting to close the loop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section cream-warm">
        <div className="section-head">
          <div className="section-eyebrow">Benefits of our services</div>
          <h2>How our work benefits children, families, schools & services</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className={`benefit${b.span2 ? ' span-2' : ''}`}>
              <div className="benefit-icon" style={{ background: b.bg, color: b.color }}>
                <i className={`ti ti-${b.icon}`}></i>
              </div>
              <div>
                <h4>{b.title}</h4>
                <p>{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      {featured && (
        <section className="section purple-light-bg">
          <div className="featured-quote">
            <div className="featured-quote-mark">"</div>
            <p className="featured-quote-text">{featured.quote.split('\n\n')[0]}</p>
            <div className="featured-quote-attr">
              <div className="featured-quote-avatar">{featured.initials}</div>
              <div>
                <div className="featured-quote-name">{featured.name}</div>
                <div className="featured-quote-role">{featured.role}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* OTHER TESTIMONIALS */}
      <section className="section cream">
        <div className="section-head">
          <div className="section-eyebrow">More testimonials</div>
          <h2>What schools and partners say</h2>
        </div>
        <div className="testimonials-grid">
          {others.map((t, i) => (
            <div key={i} className="tcard" style={{ '--tc': colorMap[t.color] || colorMap.purple }}>
              <div className="tcard-mark">"</div>
              {t.quote.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
              <div className="tcard-footer">
                <div className="tcard-name">{t.name}</div>
                <div className="tcard-role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section cream-warm">
        <div className="why-choose">
          <div className="section-eyebrow">Why choose us</div>
          <h2>More than mentoring — a movement</h2>
          <p>Building Blocks & Bridges is more than a mentoring service, we're a movement built on connection, creativity, and community. At Building Blocks and Bridges we help young people grow in confidence, develop emotional resilience and build the skills they need to thrive in and beyond school.</p>
          <p>With over a decade of experience in youth development, we work in close partnership with schools, services, and families to deliver impactful, inclusive programmes. Our sessions are designed to engage, inspire, and create lasting positive change. Supporting wellbeing, behaviour, and engagement across the wider community.</p>
          <div className="why-choose-banner">
            <p>Together, we're building stronger foundations<br/>for brighter futures.</p>
          </div>
        </div>
      </section>

      <EnquirySection />
    </>
  )
}
