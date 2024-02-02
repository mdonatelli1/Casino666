/* eslint-disable dot-notation */
/* eslint-disable prefer-template */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useRef } from "react";
import "./BulleNaration.scss";
import "./BulleNaration4.scss";
import closeIcon from "../assets/btn-text.png";
import "../../../App.scss";

function BulleNaration() {
  const [modalNar, setModalNar] = useState(true);
  const [currentText, setCurrentText] = useState(1);
  const [narration, setNarration] = useState([]);
  const audioRef = useRef(null);

  const toggleModal = () => {
    setModalNar((prevModalNar) => !prevModalNar);
  };
  const getData = () => {
    fetch("https://mdonatelli1.github.io/EscapeGameAPI/narration.json")
      .then((res) => res.json())
      .then((data) => setNarration(data));
  };
  const playSound = () => {
    const urlSound = "sound" + currentText;
    console.info(
      "Tentative de lecture de l'audio",
      // eslint-disable-next-line react/prop-types
      `${narration[3]?.[urlSound]}`
    );
    // eslint-disable-next-line react/prop-types
    audioRef.current = new Audio(
      `${narration[3]?.[urlSound]}`
    );

    if (audioRef.current) {
      if (JSON.parse(localStorage.getItem("muted"))) {
        audioRef.current
          .play()
          .then(() => {
            console.warn("Audio en lecture");
          })
          .catch((e) => {
            console.error("Erreur lors de la lecture de l'audio:", e);
          });
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const onAnimationEnd = () => {
      setCurrentText((prevText) => prevText + 1);
    };

    const textElement = document.querySelector(`.text${currentText}`);
    if (textElement) {
      textElement.addEventListener("animationend", onAnimationEnd);
    }

    return () => {
      if (textElement) {
        textElement.removeEventListener("animationend", onAnimationEnd);
      }
    };
  }, [currentText]);

  return (
    <div>
      {modalNar && (
        <div className="modal-div">
          <div className="overlayNar">
            <div className="modalNar-content">
              <h2>GERARD HADD :</h2>
              <img
                className="close-modalNar"
                src={closeIcon}
                alt="Close"
                onClick={toggleModal}
              />
              {currentText === 1 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    “:rire: Ahahahahahahahaha !”
                  </p>
                </>
              )}
              {currentText === 2 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    “Je vais devenir fou !”
                  </p>
                </>
              )}
              {currentText === 3 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    “ :pleure:”
                  </p>
                </>
              )}
              {currentText === 4 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    “ :chuchotement: j’ai peur…”
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BulleNaration;
