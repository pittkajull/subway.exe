import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Why from './components/Why.jsx'
import Features from './components/Features.jsx'
import Commands from './components/Commands.jsx'
import Status from './components/Status.jsx'
import Install from './components/Install.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Lompat ke konten
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
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
