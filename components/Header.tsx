// components/Header.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; // Import React (might be optional depending on your setup)

const Header: React.FC = () => {
    return (
      <header className="header">
        <div className="logo-container">
          <Image src="/vom-fass-logo.png" alt="Logo" width={188} height={141} />
        </div>
        <nav className="main-navigation">
          <Link href="https://vomfass.de/informationen/unternehmen" legacyBehavior>
            <a className="header-link">About vomFASS</a>
          </Link>
          <Link href="https://vomfass-franchise.com/" legacyBehavior>
            <a className="header-link">Become Franchise Partner</a>
          </Link>
        </nav>
      </header>
    );
  };

export default Header;
