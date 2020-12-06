import logo from './logoto.png';
import './App.css';
import './style.css';

function App() {
  return (
    <>
    <div style={{border: "12px solid black"}} className="App">
      <header className="App-header">
        <h1 style={{border: "5px solid black", maxWidth: 600}} className="title red">Your name here</h1>
        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <img src="/screen.png"  className="Appscreen" alt="Screen"  />
      </header>
    </div>
    <div style={{border: "5px solid red",   width:320, margin: "0 auto"}}  className="App appo">
    <video  width="320" height="240" controls >
        <source src="timeSquare.mp4" type="video/mp4" ></source>
    </video>
    </div>
    </>
  );
}

export default App;
