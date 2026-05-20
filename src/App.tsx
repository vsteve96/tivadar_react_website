import './App.css'

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <span className="brand-mark">TK</span>
          <div>
            <div className="brand-name">Law Office of Tivadar Kiss</div>
            <div className="brand-tagline">Criminal Defense Attorney</div>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#practice">Home</a>
          <a href="#about">Services</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="nav-cta">Schedule</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Minimalist counsel for complex matters</p>
            <h1>Quiet confidence in every decision.</h1>
            <p className="lede">
              A boutique legal practice focused on business formation, contract
              strategy, and dispute resolution with a measured, practical style.
            </p>
            <div className="hero-actions">
              <button className="primary">Request a consultation</button>
              <button className="ghost">View credentials</button>
            </div>
            <div className="hero-meta">
              <div>
                <span className="meta-label">Location</span>
                <span>316 N Michigan St., Suite 600, Toledo, OH 43604</span>
              </div>
              <div>
                <span className="meta-label">Availability</span>
                <span>Accepting new clients</span>
              </div>
              <div>
                <span className="meta-label">Response</span>
                <span>Within 24 hours</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <h2>Focused legal support</h2>
              <p>
                We help founders and executives move with confidence. Clear
                terms. Sound risk strategy. Consistent counsel.
              </p>
              <ul>
                <li>Formation + governance</li>
                <li>Contract review</li>
                <li>Dispute resolution</li>
                <li>Outside general counsel</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="practice" className="section">
          <div className="section-head">
            <h3>Practice Areas</h3>
            <p>Focused expertise for modern organizations.</p>
          </div>
          <div className="grid">
            <article className="card">
              <h4>Corporate Counsel</h4>
              <p>Board governance, bylaws, policy drafting, and compliance.</p>
            </article>
            <article className="card">
              <h4>Contracts</h4>
              <p>Negotiation, redlining, and strategic contract architecture.</p>
            </article>
            <article className="card">
              <h4>Disputes</h4>
              <p>Practical resolution, mediation preparation, and advocacy.</p>
            </article>
          </div>
        </section>

        <section id="about" className="section split">
          <div>
            <h3>About the firm</h3>
            <p>
              Tivadar & Reed is a minimalist firm with a maximal focus on
              outcomes. We combine crisp communication with deep diligence, so
              clients can focus on building.
            </p>
          </div>
          <div className="quote">
            <p>
              “We value the calm, disciplined approach that cuts through
              complexity and keeps priorities clear.”
            </p>
            <span>Managing Partner, Tivadar & Reed</span>
          </div>
        </section>

        <section id="approach" className="section">
          <div className="section-head">
            <h3>Our approach</h3>
            <p>Three principles that guide every engagement.</p>
          </div>
          <div className="timeline">
            <div>
              <span className="step">01</span>
              <h4>Precision</h4>
              <p>We draft and review with an eye for clarity and leverage.</p>
            </div>
            <div>
              <span className="step">02</span>
              <h4>Discipline</h4>
              <p>Every action is tied to business goals and real outcomes.</p>
            </div>
            <div>
              <span className="step">03</span>
              <h4>Composure</h4>
              <p>We remain measured in negotiations and when stakes rise.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <h3>Let’s talk</h3>
          <p>Schedule a consultation to discuss your matter.</p>
        </div>
        <div className="footer-actions">
          <button className="primary">Schedule a call</button>
          <div className="contact">
            <span>hello@tivadarreed.com</span>
            <span>(312) 555-0149</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
