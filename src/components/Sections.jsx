import config from '../data/config.json'
import EnquiryForm from './EnquiryForm'

export function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        <span className="trust-bar-item"><i className="ti ti-shield-check"></i> Safeguarding Trained</span>
        <span className="trust-bar-sep">|</span>
        <span className="trust-bar-item"><i className="ti ti-first-aid-kit"></i> First Aid Trained</span>
        <span className="trust-bar-sep">|</span>
        <span className="trust-bar-item"><i className="ti ti-hand-stop"></i> Safe Handling & Physical Intervention</span>
        <span className="trust-bar-sep">|</span>
        <span className="trust-bar-item"><i className="ti ti-certificate"></i> Ofsted-aligned</span>
      </div>
    </div>
  )
}

export function EnquirySection() {
  return (
    <section className="section ink">
      <div className="enquiry-grid">
        <div className="enquiry-info">
          <div className="section-eyebrow">Get in touch</div>
          <h2>Let's talk about your young people</h2>
          <p>Whether you have a question, an idea, or you'd like to explore support for a young person or a school, we'd love to hear from you.</p>
          <ul className="enquiry-contact-list">
            <li><i className="ti ti-phone"></i><a href={`tel:${config.phoneRaw}`}>{config.phone}</a></li>
            <li><i className="ti ti-mail"></i><a href={`mailto:${config.email}`}>{config.email}</a></li>
          </ul>
          <div className="enquiry-response">
            We typically respond within <strong>2 working days</strong> and can usually arrange an initial call within the week.
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  )
}
