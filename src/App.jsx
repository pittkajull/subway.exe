import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Why from './components/Why.jsx'
import Features from './components/Features.jsx'
import Commands from './components/Commands.jsx'
import Status from './components/Status.jsx'
import Install from './components/Install.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import { useSiteMotion } from './useSiteMotion.js'

export default function App() {
  useSiteMotion()

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Why />
        <Features />
        <Commands />
        <Status />
        <Install />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
