import React from 'react';
import { Link, NavLink } from "react-router-dom";
function FooterComponent(props){
  return (
    <footer id="footer" >
      <section className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-contact">
              <h2>O<span style={{ color: "#f0c017" }}>z</span>one</h2>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>
            <div className="col-md-3 footer-links">
              <h4>Navigate</h4>
              <ul>
                <li className="pb-0"><i className="bx bx-chevron-right"></i>
                  <a href="">
                    <NavLink to="/problems">Practice</NavLink>
                  </a>
                </li>
                <li className="pb-0"><i className="bx bx-chevron-right"></i>
                  <a href="">
                    <NavLink to="/contests">Compete</NavLink>
                  </a>
                </li>
                <li className="pb-0"><i className="bx bx-chevron-right"></i>
                  <a href="">
                    <NavLink to="/store">Store</NavLink>
                  </a>
                </li>
                <li className="pb-0"><i className="bx bx-chevron-right"></i>
                  <a href="">
                    <NavLink to="/leaderboard">Leaderboard</NavLink>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-links">
              <h4>More Info</h4>
              <ul>
                <li className="pb-0"><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li className="pb-0"><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div className="col-md-3 footer-links ml-auto">
              <h4>Our Social Networks</h4>
              <p>Follow us at our Social handles to get all the updates.</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );

}
export default FooterComponent;