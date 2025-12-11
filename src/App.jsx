import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Promotions from './components/Promotions'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CookieConsent from './components/CookieConsent'
import './App.css'

function App() {
  return (
    <div className="app">
      <Loader />
      <Header />
      <main>
        <Hero />
        <About />
        <Promotions />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <CookieConsent />
      <Footer />
    </div>
  )
}

export default App
