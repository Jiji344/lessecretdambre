import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LegalNotice from './components/LegalNotice.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        {/* Redirection pour le CMS si React Router intercepte la demande */}
        <Route path="/admin/*" element={<AdminRedirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

// Composant simple pour forcer le rechargement vers le fichier statique admin
function AdminRedirect() {
  window.location.href = '/admin/index.html';
  return null;
}
