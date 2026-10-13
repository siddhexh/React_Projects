function About() {
  return (
    <section className="inner-page">
      <p className="section-label">THE PROJECT</p>
      <h1>About RouteLab.</h1>
      <p>
        RouteLab is a practice project built to explore React Router DOM.
        Learn how URLs, route matching, navigation, and reusable layouts
        work together in a React application.
      </p>

      <div className="info-panel">
        <h2>What this project covers</h2>
        <ul>
          <li>Client-side navigation with Link and NavLink</li>
          <li>Route matching with Routes and Route</li>
          <li>Shared layouts and reusable components</li>
          <li>Fallback pages for unknown URLs</li>
        </ul>
      </div>
    </section>
  );
}

export default About;