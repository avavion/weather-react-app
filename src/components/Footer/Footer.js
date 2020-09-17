import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <ul className="footer-socials">
              <li className="footer-socials__social">
                <a
                  href="https://github.com/avavion"
                  className="footer-socials__link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>

              <li className="footer-socials__social">
                <a
                  href="https://vk.com/avavion"
                  className="footer-socials__link"
                >
                  <i className="fab fa-vk"></i>
                </a>
              </li>
            </ul>
            {/* <div className="separator"></div> */}
            <p className="footer__copyright">
              Сайт написан <a href="https://github.com/avavion">avavion.</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
