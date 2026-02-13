import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [yesSize, setYesSize] = useState(1);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [warning, setWarning] = useState("");
  const [scream, setScream] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  const audioRef = useRef(null);

  const warnings = [
    "😱 AAAAAAA STOP",
    "🚨 WHY ARE YOU PRESSING NO",
    "😂 NO IS CRYING",
    "❌ NO DOES NOT CONSENT",
    "🤡 THIS IS GETTING SERIOUS"
  ];

  const startMusic = () => {
    if (!musicStarted && audioRef.current) {
      audioRef.current.play();
      setMusicStarted(true);
    }
  };

  const handleNo = () => {
    startMusic();

    setYesSize((prev) => Math.min(prev + 0.35, 3.2));

    setNoPos({
      x: Math.random() * 260 - 130,
      y: Math.random() * 220 - 110
    });

    setWarning(warnings[Math.floor(Math.random() * warnings.length)]);

    setScream(true);
    setTimeout(() => setScream(false), 400);
  };

  if (accepted) {
    return (
      <div className="container">
        <h1>🎉 SUCCESS 🎉</h1>
        <h2>Toviyah’s Aunt said YES 😎💖</h2>
        <p>
          Decision status:
          <br />
          ✔️ Excellent  
          ✔️ Correct  
          ✔️ Sensational 
          ✔️ I love You Neoooo

        </p>
        <p className="signature">— Valentine locked in 🔒😂</p>
      </div>
    );
  }

  return (
    <div className="container" onClick={startMusic}>
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/romantic.mp3" type="audio/mpeg" />
      </audio>

      <h1>💘 ATTENTION 💘</h1>
      <h2>Toviyah’s Aunt, will you be my Valentine?</h2>

      <p className={`warning ${scream ? "scream" : ""}`}>
        {warning}
      </p>

      <div className="buttons">
        <button
          className="yes"
          style={{ transform: `scale(${yesSize})` }}
          onClick={() => setAccepted(true)}
        >
          YES 😌💖
        </button>

        <button
          className={`no ${scream ? "spin" : ""}`}
          style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
          onClick={handleNo}
        >
          NOOO 😱
        </button>
      </div>
    </div>
  );
}

export default App;
