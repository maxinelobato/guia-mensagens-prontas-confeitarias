import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Transformation } from './components/Transformation';
import { TargetAudience } from './components/TargetAudience';
import { AboutAuthor } from './components/AboutAuthor';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { FloatingCTA } from './components/FloatingCTA';

function App() {
  return (
    <>
      <div className="min-h-screen relative overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Benefits />
          <Transformation />
          <TargetAudience />
          <AboutAuthor />
          <Pricing />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  )
}

export default App
