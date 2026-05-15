import { useState } from 'react'
import config from '../data/config.json'

export default function EnquiryForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setError(json.error || 'Something went wrong. Please email us directly.')
        setStatus('error')
      }
    } catch (err) {
      setError('Network error. Please email us directly.')
      setStatus('error')
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <h3>Send an enquiry</h3>
      {status === 'success' && (
        <div className="form-success">
          <i className="ti ti-check" style={{ marginRight: 6 }}></i>
          Thank you, we'll be in touch within two working days.
        </div>
      )}
      {status === 'error' && (
        <div className="form-error">
          <i className="ti ti-alert-triangle" style={{ marginRight: 6 }}></i>
          {error}
        </div>
      )}
      <div className="form-field">
        <label className="form-label" htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="organisation">School / organisation</label>
        <input id="organisation" name="organisation" type="text" />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit" className="form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : <>Send enquiry <i className="ti ti-arrow-right"></i></>}
      </button>
    </form>
  )
}
