import { NavLink } from "react-router-dom";

function Home() {
  const features = [
    {
      number: "01",
      title: "Seamless navigation",
      description:
        "Move between pages without refreshing the entire application.",
      tag: "NavLink & Link",
    },
    {
      number: "02",
      title: "Smart routing",
      description:
        "Render the right component based on the current URL.",
      tag: "Routes & Route",
    },
    {
      number: "03",
      title: "Reusable layouts",
      description:
        "Build consistent interfaces with shared components.",
      tag: "React components",
    },
  ];

  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            A HANDS-ON REACT PLAYGROUND
          </div>

          <h1>
            Every page has a path.
            <br />
            <span>Let's build yours.</span>
          </h1>

          <p className="hero-description">
            Explore React Router DOM, understand how navigation works,
            and build your foundation for creating modern React apps.
          </p>

          <div className="hero-actions">
            <NavLink to="/about" className="primary-button">
              Explore the project <span>→</span>
            </NavLink>

            <NavLink to="/contact" className="secondary-button">
              Get in touch
            </NavLink>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            LEARN BY BUILDING, ONE ROUTE AT A TIME
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <div className="decoration-circle circle-one" />
          <div className="decoration-circle circle-two" />
          <div className="decoration-grid" />
          <div className="route-card">
            <div className="route-card-top">
              <span className="route-icon">R</span>
              <div>
                <p>Current route</p>
                <strong>/home</strong>
              </div>
              <span className="live-dot" />
            </div>

            <div className="route-divider" />

            <div className="route-step">
              <span className="step-number">01</span>
              <span>BrowserRouter</span>
              <span className="step-check">✓</span>
            </div>

            <div className="route-step">
              <span className="step-number">02</span>
              <span>Routes & Route</span>
              <span className="step-check">✓</span>
            </div>

            <div className="route-step active-step">
              <span className="step-number">03</span>
              <span>Page rendered</span>
              <span className="step-arrow">↗</span>
            </div>

            <div className="route-card-bottom">
              <span className="live-dot" />
              Client-side navigation
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <div>
            <p className="section-label">WHAT YOU'LL LEARN</p>
            <h2>The building blocks.</h2>
          </div>

          <p className="section-description">
            Three fundamentals. One step closer to building
            better applications.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-top">
                <span className="feature-number">{feature.number}</span>
                <span className="feature-arrow">↗</span>
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

              <div className="feature-tag">{feature.tag}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;