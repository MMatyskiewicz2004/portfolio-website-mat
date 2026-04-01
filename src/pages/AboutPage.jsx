import '../App.css'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

function AboutPage() {
  return (
    <div className="app">
      <SiteHeader />
      <main className="main-content" style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#6B2A10', textAlign: 'center' }}>UNDER CONSTRUCTION</h1>
      </main>
      <SiteFooter active="about" />
    </div>
  )
}

export default AboutPage
