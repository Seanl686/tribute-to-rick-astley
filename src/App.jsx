import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Video IDs
  const regularVideoId = "mIHHfNVfhPk";
  const rickrollVideoId = "dQw4w9WgXcQ";

  return (
    <>
      <div>
        <h1>Tribute to</h1>
        <img
          src={`https://rickastley.co.uk/wp-content/uploads/2024/10/rick-astley-logo.png`}
          className="logo"
          alt="Rick Astley Logo"
        />
        <h2>Click The Button 3 Times</h2>
      </div>

      <div className="video-container">
        {count >= 3 ? (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${rickrollVideoId}?autoplay=1&muted=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="video-thumbnail">
            <img
              src={`https://img.youtube.com/vi/${regularVideoId}/maxresdefault.jpg`}
              alt="Video thumbnail"
            />
            <div className="play-button-overlay">
              <button
                className="btn"
                onClick={() => setCount((count) => count + 1)}
              >
                {count}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
