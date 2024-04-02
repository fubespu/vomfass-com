import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li>
            <Link href="https://www.vomfass.de/impressum" legacyBehavior>
              <a className="footer-link">Imprint</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.vomfass.de/datenschutz" legacyBehavior>
              <a className="footer-link">Data Policy</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;