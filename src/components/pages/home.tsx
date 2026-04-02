import Feature from '../feature'
import HowItWorks from '../how-it-works'
import Nav from '../nav'
import Header from '../header'
import Footer from '../footer'

export default function Home() {
  return (
    <div className="relative text-slate-900 dark:text-white font-sans selection:bg-brand-primary/30 min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary-accent/10 rounded-full blur-[120px]" />
      </div>

      <Nav />
      <main className="pt-20">
        <Header />
        <HowItWorks />
        <Feature />
      </main>

      <Footer />
    </div>
  )
}

