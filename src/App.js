import './App.css';

function App() {
  return (
    <div className="portContainer">

      <div className="video-container">
        <video autoPlay loop muted className="background-video1">
          <source src="https://PCJ-93.github.io/pcj-web-portfolio/videos/Prism.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="video-container">
        <video autoPlay loop muted className="background-video2">
          <source src="https://PCJ-93.github.io/pcj-web-portfolio/videos/TravelMaker.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="video-container">
        <video autoPlay loop muted className="background-video3">
          <source src="https://PCJ-93.github.io/pcj-web-portfolio/videos/GreenConnect.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  );
}

export default App;
