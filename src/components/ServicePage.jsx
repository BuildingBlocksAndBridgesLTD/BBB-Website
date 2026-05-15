import { Link } from 'react-router-dom'
import { EnquirySection } from '../components/Sections'
import voices from '../data/studentVoices.json'

export default function ServicePage({ slug, title, eyebrow, accent, accentLight, image, image2, image2Caption, intro, fostersTitle, fostersList, closingLine, extraSections }) {
  const pageVoices = voices.items.filter(v => v.pathway === slug)
  // Split intro paragraphs so we can place image2 between them
  const firstHalf = intro.slice(0, Math.ceil(intro.length / 2))
  const secondHalf = intro.slice(Math.ceil(intro.length / 2))
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow" style={{ color: accent }}>{eyebrow}</div>
          <h1 style={{ color: accent }}>{title}</h1>
        </div>
      </section>

      <section className="service-image-wide" style={{ paddingTop: 32 }}>
        <div className="service-image-wide-inner">
          <img src={image} alt={title} onError={(e) => { e.target.style.background = accentLight; e.target.style.display = 'block' }} />
        </div>
      </section>

      <section className="service-section">
        <div className="service-content">
          {firstHalf.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </section>

      {image2 && (
        <section className="service-image-wide" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <div className="service-image-wide-inner">
            <img src={image2} alt={image2Caption || title} onError={(e) => { e.target.style.background = accentLight; e.target.style.display = 'block' }} />
          </div>
          {image2Caption && (
            <div className="service-image-caption">{image2Caption}</div>
          )}
        </section>
      )}

      <section className="service-section" style={{ paddingTop: image2 ? 24 : undefined }}>
        <div className="service-content">
          {secondHalf.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </section>

      {extraSections && (
        <section className="service-section" style={{ paddingTop: 0 }}>
          <div className="service-content">
            {extraSections}
          </div>
        </section>
      )}

      {/* STUDENT VOICES */}
      <section className="section cream-warm">
        <div className="section-head">
          <div className="section-eyebrow" style={{ color: accent }}>In their own words</div>
          <h2>What young people say</h2>
        </div>
        <div className="student-voices-page">
          {pageVoices.map((v, i) => (
            <div key={i} className="student-voice-light" style={{ '--accent': accent }}>
              <p>"{v.quote}"</p>
              <div className="age">Student, age {v.age}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOSTERS LIST */}
      <section className="section cream">
        <div className="service-content">
          <div className="fosters-list" style={{ '--accent': accent }}>
            <h3>{fostersTitle}</h3>
            <ul>
              {fostersList.map((item, i) => {
                if (typeof item === 'string') return <li key={i}>{item}</li>
                return <li key={i}><span><strong>{item.title}:</strong> {item.body}</span></li>
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* CLOSING LINE */}
      <section className="section cream-warm" style={{ paddingTop: 32, paddingBottom: 64 }}>
        <div className="closing-line">
          <p>{closingLine}</p>
        </div>
      </section>

      <EnquirySection />
    </>
  )
}
