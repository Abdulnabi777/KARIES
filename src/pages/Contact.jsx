import { useState } from 'react'
import { CONTACT, FORM_URL } from '../config'
import { FAQS } from '../data'
import { PageHero, SectionHead, Reveal, Accordion } from '../components/Common'
import Icon from '../components/Icon'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: 'Education', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // TODO: connect to your backend / email service here (form data is in `form`).
    setSent(true)
  }

  const info = [
    { icon: 'mail', label: 'Email', value: CONTACT.email || 'To be added' },
    { icon: 'phone', label: 'Phone', value: CONTACT.phone || 'To be added' },
    { icon: 'pin', label: 'Address', value: CONTACT.address || 'To be added' },
  ]

  return (
    <>
      <PageHero crumb="Contact" title="Let’s talk" text="Tell us about your institution, company or team and how you would like to take part." />

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            {info.map((i) => (
              <div key={i.label} className="info-row">
                <span className="icon-bubble"><Icon name={i.icon} size={22} /></span>
                <div><small>{i.label}</small><p>{i.value}</p></div>
              </div>
            ))}
            <a className="btn btn-primary" href={FORM_URL}>Open the customer information form</a>
          </Reveal>

          <Reveal delay={120} className="form-card">
            {sent ? (
              <div className="sent">
                <span className="icon-bubble lg"><Icon name="check" size={30} /></span>
                <h3>Message ready, {form.name || 'friend'}!</h3>
                <p>Thanks for reaching out. We will get back to you soon.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <label>Full name<input required value={form.name} onChange={set('name')} placeholder="Your name" /></label>
                <div className="row">
                  <label>Email<input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" /></label>
                  <label>Phone<input value={form.phone} onChange={set('phone')} placeholder="Optional" /></label>
                </div>
                <label>I am interested in
                  <select value={form.interest} onChange={set('interest')}>
                    <option>Education</option><option>Sports & Games</option><option>Conferences</option>
                    <option>Corporate tournaments / CSR</option><option>Something else</option>
                  </select>
                </label>
                <label>Message<textarea required rows="5" value={form.message} onChange={set('message')} placeholder="How can we help?" /></label>
                <button className="btn btn-primary" type="submit"><Icon name="send" size={18} /> Send message</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section tinted">
        <div className="container narrow">
          <SectionHead center title="Frequently asked questions" />
          <Accordion items={FAQS} />
        </div>
      </section>
    </>
  )
}
