import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useInView, useCountUp } from '../hooks'
import { FORM_URL } from '../config'
import Icon from './Icon'

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, seen] = useInView()
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function SectionHead({ title, text, center = false }) {
  return (
    <Reveal className={`section-head ${center ? 'center' : ''}`}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}

export function PageHero({ title, text, Art, crumb }) {
  return (
    <section className="page-hero">
      <div className="orb orb-a" /><div className="orb orb-b" />
      <div className="container page-hero-inner">
        <div className="page-hero-copy">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><span aria-current="page">{crumb}</span>
          </nav>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {Art && <div className="page-hero-art"><Art /></div>}
      </div>
      <Wave />
    </section>
  )
}

export function Wave({ flip = false }) {
  return (
    <svg className={`wave ${flip ? 'flip' : ''}`} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 40 C240 90 480 0 720 30 C960 60 1200 90 1440 30 V80 H0 Z" fill="#fff" />
    </svg>
  )
}

export function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}><Icon name="star" size={14} />{t}</span>
        ))}
      </div>
    </div>
  )
}

export function Stat({ value, label, icon }) {
  const [ref, seen] = useInView(0.4)
  const n = useCountUp(value, seen)
  return (
    <div className="stat" ref={ref}>
      <span className="icon-bubble"><Icon name={icon} size={22} /></span>
      <strong>{n}</strong>
      <p>{label}</p>
    </div>
  )
}

export function FeatureCard({ icon, title, text, delay = 0 }) {
  return (
    <Reveal as="article" delay={delay} className="card">
      <span className="icon-bubble"><Icon name={icon} size={26} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </Reveal>
  )
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="accordion">
      {items.map((it, i) => (
        <div key={it.q} className={`acc-item ${open === i ? 'open' : ''}`}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{it.q}</span>
            <Icon name="chevron" size={20} />
          </button>
          <div className="acc-body"><div><p>{it.a}</p></div></div>
        </div>
      ))}
    </div>
  )
}

export function JoinCTA() {
  return (
    <section className="join">
      <div className="orb orb-a" /><div className="orb orb-b" />
      <div className="container join-inner">
        <Reveal>
          <h2>Join Our Growing Community of Empowered Learners and Leaders</h2>
          <p>
            At KAR IES, hundreds of students, professionals, and institutions benefit from our programs each year.
            Become part of a dynamic network dedicated to academic excellence, skill development, and sportsmanship.
          </p>
          <a className="btn btn-light pulse" href={FORM_URL}>Start Your Journey <Icon name="arrow" size={18} /></a>
        </Reveal>
      </div>
    </section>
  )
}
