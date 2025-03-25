import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
            <h1>Tribute to</h1>
                <img src=
{`https://rickastley.co.uk/wp-content/uploads/2024/10/rick-astley-logo.png`} 
className="logo" alt="Rick Astley Logo" />
            </div>
            <div className="video-container">
                <iframe 
                    width="100%" 
                    height="315" 
                    src={count >= 3 
                        ? "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&muted=1" 
                        : "https://www.youtube.com/embed/mIHHfNVfhPk?si=QXWI1AF7OAet8PP2"
                    } 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </div>
            
            <div className="card">
            <h2>Click The Count Button 3 Times</h2>
                <button className='btn'
                    onClick={() =>
                        setCount((count) => count + 1)}>
                        {count}
                </button>
            </div>
        </>
    )
}

export default App