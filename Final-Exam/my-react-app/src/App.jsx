import Header from './components/Header';
import Nav from './components/Nav';
import Winner from './components/Winner';
import Hero from './components/Hero';
import Matches from './components/Matches';
import Footer from './components/Footer';
import './index.css'

function App() {
  return (
    <>
    {/* Header section */}
      <Header />

    {/* Nav section */}
      <Nav />

    {/* Winner section */}
      <Winner />

    {/* Hero section */}
    <Hero />

    {/* Matches section */}
      <Matches />

    {/* Footer */}
    <Footer />
    </>
  )
}

export default App
