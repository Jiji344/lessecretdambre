import { useEffect, useState } from 'react'
import './CookieConsent.css'

const COOKIE_KEY = 'lsa_cookie_consent'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY)
    if (!stored) {
      setIsVisible(true)
    }
  }, [])

  const handleChoice = (value) => {
    localStorage.setItem(COOKIE_KEY, value)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <div className="cookie-content">
        <h3 className="cookie-title">Gestion des cookies</h3>
        <p className="cookie-text">
          Nous utilisons des cookies pour améliorer votre expérience et mesurer l’audience. Vous pouvez accepter ou
          refuser.
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn primary" onClick={() => handleChoice('accepted')}>
            Accepter
          </button>
          <button className="cookie-btn secondary" onClick={() => handleChoice('declined')}>
            Refuser
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent


