import React, { useState, useEffect } from "react";
import navratriBg from './img/navratri-background.jpg'
import n1 from './img/n1.png'
import durgaMata from './img/durga-mata.png'
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import n4 from './img/n4.png';
import trf from './img/trf.png';
import gjnv from './img/gjnv.mp3';
import nvgjm from './img/nvgjm.png';
import { FaWhatsapp } from 'react-icons/fa';


const App = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isCountdownFinished, setIsCountdownFinished] = useState(false); // New state for countdown finished
  const [wishVisible, setWishVisible] = useState(false); // State for wish visibility

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get("n").split('-').join(' ');
    if (nameParam) {
      setName(nameParam);
    } else {
      setName("Guest");
    }
  }, []);

  useEffect(() => {
    const countdownDate = new Date("2024-10-03T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setIsCountdownFinished(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleCurtain = () => {
    setCurtainOpen(!curtainOpen);
  };
  const handleShowWish = () => {
    setWishVisible(true);
    toggleCurtain(); 
  };

  const handleShareOnWhatsApp = () => {
    const host = window.location.origin;
    const customUrl = `${host}?n=${encodeURIComponent(name.split(' ').join("-"))}`;
    const message = `*${inputName?.trim()}*, \nમેં તમને એક ખાસ ભેટ મોકલી છે 🎁 \n💁 નીચેની વાદળી રેખાને સ્પર્શ કરીને ઝડપી જુઓ \n👇👇👇 \n${customUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container">
      <div className={`curtain leftcurtain ${curtainOpen ? "open" : ""}`}>
        <img src={navratriBg} alt="Navratri" />
      </div>
      <div className={`curtain rightcurtain ${curtainOpen ? "open" : ""}`}>
        <img src={navratriBg} alt="Navratri" />
      </div>
      {
        !curtainOpen && <div className="rope" onClick={handleShowWish}>
        <div className="rope-text">
          <br />
          <b>
            આને સ્પર્શ કરો!!
            <br />
            👇👇👇👇
          </b>
        </div>
        <b>
          <br />
          <img
            src={durgaMata}
            alt="Durga Mata"
            className="pulse"
            width="60%"
            height="auto"
          />
        </b>
      </div>
      }

{wishVisible &&
        <b>
          <marquee className="m1" behavior="scroll" direction="up" scrolldelay="0">
            <img src={n1} alt="n1" height="30px" width="30px" /><br /><br />
            <img src={img1} alt="1" height="30px" width="30px" /><br /><br />
            <img src={img2} alt="2" height="30px" width="30px" /><br /><br />
            <img src={img3} alt="3" height="30px" width="30px" /><br /><br />
            <img src={img4} alt="4" height="30px" width="30px" /><br /><br />
            <img src={img5} alt="5" height="30px" width="30px" /><br /><br />
            <img src={img6} alt="6" height="30px" width="30px" /><br /><br />
            <img src={n4} alt="n4" height="30px" width="30px" /><br /><br />
          </marquee>

          <marquee className="m2" behavior="scroll" direction="down" scrolldelay="0">
            <img src={n1} alt="n1" height="30px" width="30px" /><br /><br />
            <img src={img1} alt="1" height="30px" width="30px" /><br /><br />
            <img src={img2} alt="2" height="30px" width="30px" /><br /><br />
            <img src={img3} alt="3" height="30px" width="30px" /><br /><br />
            <img src={img4} alt="4" height="30px" width="30px" /><br /><br />
            <img src={img5} alt="5" height="30px" width="30px" /><br /><br />
            <img src={img6} alt="6" height="30px" width="30px" /><br /><br />
            <img src={n4} alt="n4" height="30px" width="30px" /><br /><br />
          </marquee>

          <div className="mainContainer" id="mainContainer">
            <h1 id="username" style={{ fontFamily: 'SF Espresso Shack' }}>{inputName.trim().length>0 ? inputName.trim():name}</h1>
            <br />

            <img src={trf} alt="trf" width="50%" height="auto" style={{ animation: 'pulse 2.5s infinite' }} /><br />
            {!isCountdownFinished && ( // Conditionally render countdown timer
            <div style={{ fontSize: '18px', fontWeight: '800', color: 'green' }}>
              <p id="demo">
                {timeLeft.days}<font color="blue"> દિવસ ,</font> {timeLeft.hours}<font color="purple"> કલાક,</font> {timeLeft.minutes}<font color="black"> મિનિટ,<br /></font> {timeLeft.seconds}<font color="burgundy"> સેકન્ડ</font> પહેલાં
              </p>
            </div>
          )}
            <br />

            <img src={nvgjm} alt="nvgjm" width="80%" height="auto" style={{ animation: 'pulse 2.5s infinite' }} />
            <br /><br />
            <img src={n1} alt="n1" width="90%" height="auto" style={{ animation: 'pulse 2.5s infinite' }} />
            <br /><br />

            <center>
              <div className="wishMessage" style={{ textShadow: '1px 1px 3px white, 1px 1px 3px white, -1px -1px 3px white, -1px -1px 3px white' }}>
                <p style={{ textShadow: '1px 1px 3px black, 1px 1px 3px black, -1px -1px 3px black, -1px -1px 3px black', color: 'red' }}>
                  દુર્ગા માતા ને વિનંતી કરુ છુ કે
                </p>
                <span style={{ textShadow: '1px 1px 3px silver, 1px 1px 3px silver, -1px -1px 3px silver, -1px -1px 3px silver', color: 'blue' }}>
                  આપના જીવન માં સુખ-શાંતી છલ્કાવી દે.
                </span>
                <p></p>
                <span style={{ textShadow: '1px 1px 3px silver, 1px 1px 3px silver, -1px -1px 3px silver, -1px -1px 3px silver', color: 'green' }}>
                  આપની દરેક ઈચ્છાઓ જલ્દી થી પૂર્ણ કરી દે.
                </span>
                <p></p>
                <span style={{ textShadow: '1px 1px 3px silver, 1px 1px 3px silver, -1px -1px 3px silver, -1px -1px 3px silver', color: '#FF671F' }}>
                  નવરાત્રી પર્વ ની આપને ઢેરો શુભ-કામના.
                </span>
                <p></p><br />
                <span style={{ textShadow: '1px 1px 3px black, 1px 1px 3px black, -1px -1px 3px black, -1px -1px 3px black', color: 'red' }}>
                  !! Happy Navratri !!
                </span>
                <p></p>
              </div>
            </center>
            <br />
            😀<span id="show-name" style={{ color: 'red' }}>{inputName.trim().length>0 ? inputName.trim():name}</span>😘
            <audio id="audiocracker" src={gjnv} autoPlay={false}></audio>
          </div>
          <div className="enter-name">
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="તમારું નામ લખો "
        />
        <button
          className="btn"
          onClick={handleShareOnWhatsApp}
          disabled={inputName?.trim().length===0}
        >
          <FaWhatsapp />
        </button>
      </div>
        </b>}
    </div>
  );
};

export default App;
