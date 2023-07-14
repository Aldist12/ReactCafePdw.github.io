import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, guyss <code> Ini adalah caffe yummy</code>, kalian bisa langsung cek link di bawah ini ya.
        </p>
        <a
          className="App-link"
          href="https://aldist12.github.io/HostingCafeYummy.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beranda Website
        </a>
      </header>
    </div>
  );
}

export default App;
