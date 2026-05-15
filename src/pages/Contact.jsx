import { EnquirySection } from '../components/Sections'
import config from '../data/config.json'

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Contact us</div>
          <h1>Get in contact</h1>
          <p>Whether you have a question, an idea, or you'd like to explore support for a young person or a school, we'd love to hear from you.</p>
        </div>
      </section>

      <section className="section cream">
        <div className="contact-intro">
          <p>You can reach us using the contact details below, or send us a message using the enquiry form. We typically respond within 2 working days and can usually arrange an initial call within the week.</p>
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon"><i className="ti ti-phone"></i></div>
            <h3>Call us</h3>
            <a href={`tel:${config.phoneRaw}`}>{config.phone}</a>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon"><i className="ti ti-mail"></i></div>
            <h3>Email us</h3>
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
        </div>
      </section>

      <EnquirySection />
    </>
  )
}
