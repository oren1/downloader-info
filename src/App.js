import logo from './logo.svg';
import './App.css';
import Icon from './AppIcon.jpg'
import download from './download.png'
{/* <img src={logo} className="App-logo" alt="logo" />


<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}

{/* <p>
Edit <code>src/App.js</code> and save to reload.
</p> */}

function App() {
  return (
    <div className="App">
      <div className="App-Container">
          <img src={Icon} className="App-Icon" alt="logo" />
          <h1>Downloader</h1>
          <h3>Download Youtube Videos To Camera Roll</h3>
          {/* <h4>Slow Motion & Speed Up</h4> */}
          <a href="https://www.google.com">
            <img src={download} className="download" alt="download from app store" />
          </a>
      </div>
      <div className="bottom-area">
            <div className="links-container">
              <a href="privacy-policy.html">Privacy Policy</a>
              <div style={{width: 20}}></div>
              <a href="terms-of-use.html">Terms Of Use</a>
            </div>
            <h4>Contact Email: support.downloader@veditor.org</h4>
          </div>
    </div>
  );
}

export default App;
