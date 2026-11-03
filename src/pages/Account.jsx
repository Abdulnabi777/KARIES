import { useState } from 'react'
import { PageHero, Reveal } from '../components/Common'
import Icon from '../components/Icon'

export default function Account() {
  const [mode, setMode] = useState('signin')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    // TODO: connect to your authentication service.
    setDone(true)
  }

  return (
    <>
      <PageHero crumb="My Account" title="My Account" text="Sign in to manage your registrations, or create an account to join KAR IES programs." />
      <section className="section">
        <div className="container auth-wrap">
          <Reveal className="form-card auth">
            <div className="tabs">
              <button className={mode === 'signin' ? 'active' : ''} onClick={() => { setMode('signin'); setDone(false) }}>Sign in</button>
              <button className={mode === 'signup' ? 'active' : ''} onClick={() => { setMode('signup'); setDone(false) }}>Create account</button>
            </div>
            {done ? (
              <div className="sent">
                <span className="icon-bubble lg"><Icon name="check" size={30} /></span>
                <h3>You are all set</h3>
                <p>Account sign-in will be connected to this page soon.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                {mode === 'signup' && (
                  <label>Full name<input required placeholder="Your name" /></label>
                )}
                <label>Email<input required type="email" placeholder="you@example.com" /></label>
                <label>Password<input required type="password" minLength="6" placeholder="At least 6 characters" /></label>
                <button className="btn btn-primary" type="submit">
                  <Icon name={mode === 'signin' ? 'lock' : 'user'} size={18} />
                  {mode === 'signin' ? 'Sign in' : 'Create account'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
