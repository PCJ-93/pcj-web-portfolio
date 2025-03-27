import './App.css';

function App() {
  return (
    <div className="portContainer">

      <video autoPlay loop muted className="background-video1">
        <source src="https://PCJ-93.github.io/pcj-web-portfolio/videos/Prism.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video autoPlay loop muted className="background-video2">
        <source src="https://PCJ-93.github.io/pcj-web-portfolio/videos/TravelMaker.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video autoPlay loop muted className="background-video3">
        <source src="https://PCJ-93.github.io/pcj-web-portfolio/videos/GreenConnect.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
}

export default App;
