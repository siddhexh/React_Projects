import { BrowserRouter, Routes, Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx"
import Contact from "./components/contact/Contact.jsx"
import About from "./components/about/About.jsx"
import Layout from "../layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function NotFound() {
  return (
    <section className="not-found">
      <p className="not-found-code">404</p>
      <h1>Looks like a wrong turn.</h1>
      <p>This route doesn't exist yet. Let's get you back on track.</p>
      <NavLink to="/" className="primary-button">
        ← Back to home
      </NavLink>
    </section>
  );
}

function App() {
  return (
      <div className="app-shell">
        <RouterProvider router={ router } />
      </div>
  );
}

export default App;
