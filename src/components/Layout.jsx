import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV } from '../data'
import { CONTACT } from '../config'
import Icon from './Icon'

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      setScrolled(h.scrollTop > 12)
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="KAR IES home">
          <img src="/logo.png" alt="KAR IES — Knowledge · Innovation · Sportsmanship" />
        </Link>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={n.to === '/account' ? 'nav-cta' : ''}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  )
}

export function Footer() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img className="footer-logo" src="/logo.png" alt="KAR IES" />
            <p className="muted">Creating meaningful platforms for learning, collaboration, participation and growth across Academic, Sports and Athletic fields.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>{NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul className="contact-list">
              <li><Icon name="mail" size={18} />{CONTACT.email || 'Email to be added'}</li>
              <li><Icon name="phone" size={18} />{CONTACT.phone || 'Phone to be added'}</li>
              <li><Icon name="pin" size={18} />{CONTACT.address || 'Address to be added'}</li>
            </ul>
          </div>
        </div>
        <div className="container copyright">Copyright © {new Date().getFullYear()} KAR IES</div>
      </footer>
      <button
        className={`to-top ${show ? 'show' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="up" size={22} />
      </button>
    </>
  )
}
