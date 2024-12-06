import darkMode from "./dark-mode.svg";
import image6 from "./image-6.png";
import image12 from "../../assets/image-12.png";
import image from "./image.png";
import search from "./search.png";
import "./IntroPage.css";

export const IntroPage = () => {
  return (
    <main className="intro-page">
      <header className="header">
        <div className="logo">DEVLOG</div>
        <nav className="nav">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#categories" className="nav-link">
            Categories
          </a>
          <a href="#newsletter" className="nav-link">
            Newsletter
          </a>
        </nav>
        <div className="header-actions">
          <button className="dark-mode-toggle">
            <img src={darkMode} alt="Toggle dark mode" />
          </button>
          <button className="sign-up">SIGN-UP</button>
        </div>
      </header>

      <section className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="Search Post..."
        />
        <button className="search-button">
          <img src={search} alt="Search" />
        </button>
      </section>

      <section className="content">
        <h1 className="section-title">Public Blogs</h1>
        <p className="section-description">
          Browse through all community articles, tutorials, roundups, and
          experiments.
        </p>

        <div className="blog-list">
          <article className="blog-card">
            <img src={image6} alt="Flutter project" className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">
                How to create a flutter project in visual studio
              </h2>
              <div className="blog-meta">
                <span className="tag">flutter</span>
                <span className="tag">VS Code</span>
                <span className="meta-info">
                  In Tutorial - 3 days ago by Toji
                </span>
              </div>
            </div>
          </article>

          <article className="blog-card">
            <img src={image12} alt="VS Code project" className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">
                How to create a new project in visual studio code
              </h2>
              <div className="blog-meta">
                <span className="tag">Coding</span>
                <span className="tag">VS Code</span>
                <span className="meta-info">
                  In Tutorial - 5 weeks ago by Vhinz
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <aside className="related-posts">
        <h2 className="related-title">Related posts...</h2>
        <div className="related-content">
          <img src={image} alt="Related post" className="related-image" />
          <p className="related-description">
            Put your creations to work. Sell Wix Studio templates. Sell your
            Studio templates in the Marketplace to earn hands-off income for
            your business.
          </p>
        </div>
      </aside>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-title">Explore the site</p>
          <nav className="footer-nav">
            <a href="#home" className="footer-link">
              home
            </a>
            <a href="#about" className="footer-link">
              about
            </a>
            <a href="#categories" className="footer-link">
              categories
            </a>
            <a href="#newsletter" className="footer-link">
              newsletter
            </a>
          </nav>
          <p className="footer-copy">© Devlog 2024</p>
        </div>
      </footer>
    </main>
  );
};