import React, { useState } from 'react';
import './App.css';
import imageSrc from './usecase.png';

function App() {
  const [showImage, setShowImage] = useState(false); // Change initial state to false
  const [buttonText, setButtonText] = useState('Show Use Case'); // Add buttonText state

  const handleClick = () => {
    setShowImage((prevShowImage) => !prevShowImage);
    setButtonText((prevButtonText) => (prevButtonText === 'Show Use Case' ? 'Hidden Use Case' : 'Show Use Case'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://i.pinimg.com/originals/37/50/ed/3750ed13196c15b0afc9ef40cbccbe08.png"
          className="App-logo"
          alt="logo"
        />
        <p>
          Selamat datang di Caffé! Di sini, kita tidak hanya menyajikan secangkir kopi yang nikmat, tetapi juga menghadirkan
          pengalaman yang segar dan inovatif. Dengan sentuhan React JS, kami mempersembahkan tampilan yang menawan dan
          interaktif, membawa Anda dalam perjalanan kafe virtual yang luar biasa.{' '}
          <code>
            Dalam ruang santai kami, Anda akan menemukan kombinasi yang sempurna antara kehangatan dan teknologi.
            Tersedia berbagai macam pilihan kopi yang disajikan dengan hati-hati, bersama dengan suasana yang ramah dan
            menyenangkan.
          </code>
          , Dengan menggunakan React JS, kami telah menciptakan antarmuka yang responsif dan efisien, memungkinkan Anda
          menjelajahi menu kami dengan mudah dan cepat. Mari rasakan sensasi segelas kopi yang hangat sambil menikmati
          keajaiban teknologi modern.
          Selamat menikmati perjalanan kafe virtual bersama Caffé dan temukan kenikmatan kopi yang belum pernah Anda rasakan
          sebelumnya. Selamat datang dan nikmati pengalaman menakjubkan ini!
        </p>
        <button className="App-button" onClick={handleClick}>
          {buttonText}
        </button>
        {showImage && ( // Render the image only if showImage is true
          <img src={imageSrc} alt="Displayed on button click" />
        )}
        <a
          className="App-link"
          href="https://aldist12.github.io/HostingCafeYummy.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beranda Cafe
        </a>
      </header>
    </div>
  );
}

export default App;
