if (process.env.NODE_ENV === 'production') {
  console.log = console.warn = console.error = () => {};
}

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

type CountryData = {
  name: string;
  url: string;
};

type RegionsData = {
  [key: string]: CountryData[];
};

const Home: React.FC = () => {
  const data: RegionsData = {
    Europe: [
      { name: "Germany", url: "https://www.vomfass.de" },
      { name: "Austria", url: "https://www.vomfass.at" },
      { name: "Switzerland", url: "https://www.vomfass.ch" },
      { name: "Spain", url: "https://www.vomfass-barcelona.com/" },
      { name: "Belgium", url: "https://vomfass-slijterij.nl/" },
      { name: "Netherlands", url: "https://vomfass-slijterij.nl/"},
      { name: "United Kingdom", url: "https://www.vomfassuk.com"}
    ],
    "North America": [
      { name: "United States", url: "https://www.vomfassusa.com/" }
    ],
    "South America": [
      { name: "Brasil", url: "https://www.vomfass.com.br/"}
    ],
    "Asia": [
      { name: "Korea", url: "https://m.vomfasskorea.com/" }
    ]
  };

  return (
    <div className="container">
      <Header />
      {Object.entries(data).map(([region, countries]) => (
        <div key={region} className="column">
          <h2>{region}</h2>
          <ul>
            {countries.map(({ name, url }) => (
              <li key={name}>              
                <Link href={url} className="nav-link">{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
