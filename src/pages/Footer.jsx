import "./Footer.css";

function Footer() {
  return (
    <footer className="footer mt-0 pt-4">
      <div className="footer-container">

        <div className="row g-5">

          {/* About */}
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-logo">
              NET<span>FILM</span>
            </h2>

            <p className="footer-description">
              Netfilm is your one-stop destination for discovering trending
              movies, TV shows, trailers, reviews, ratings and entertainment
              news from around the world.
            </p>

            <div className="footer-social">

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>

              <a href="#">
                <i className="bi bi-github"></i>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-4">

            <h4>Quick Links</h4>

            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#booking">Booking</a></li>
            </ul>

          </div>

          {/* Categories */}
          <div className="col-lg-3 col-md-6 col-3">

            <h4>Categories</h4>

            <ul className="footer-links">
              <li><a href="#schedule">Action</a></li>
              <li><a href="#schedule">Adventure</a></li>
              <li><a href="#schedule">Comedy</a></li>
              <li><a href="#schedule">Horror</a></li>
              <li><a href="#schedule">Sci-Fi</a></li>
            </ul>

          </div>

          <div className="col-lg-3 col-md-6 col-5">
            <h4>Contact</h4>

            <div className="footer-contact">
              <p>
                <i className="bi bi-envelope-fill"></i>
                netfilm@gmail.com
              </p>

              <p>
                <i className="bi bi-telephone-fill"></i>
                +94 71 234 5678
              </p>

              <p>
                <i className="bi bi-geo-alt-fill"></i>
                Colombo, Sri Lanka
              </p>
            </div>

          </div>

        </div>

        <hr className="mt-2" />

        <div className="footer-bottom">
          <p>
            © 2026 <span>Aakib</span>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;