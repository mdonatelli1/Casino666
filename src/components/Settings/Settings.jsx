import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import param from "./assets/Parametre.png";
import high from "./assets/High.png";
import low from "./assets/Low.png";
import mute from "./assets/Mute.png";
import unMute from "./assets/unMute.png";
import subtilesON from "./assets/sous-titres.png";
import subtilesOFF from "./assets/sous-titres-off.png"

import "./Settings.scss";

function Settings({ sousTitre, setSousTitre }) {
  const [active, setActive] = useState(false);
  const [muted, setMuted] = useState(JSON.parse(localStorage.getItem("muted")));

  // Chargement de l'état initial de sousTitre du localStorage
  useEffect(() => {
    const savedSousTitre = localStorage.getItem("sousTitres");
    if (savedSousTitre !== null) {
      setSousTitre(JSON.parse(savedSousTitre));
    }
  }, [setSousTitre]);

  const toggleActive = () => setActive(!active);
  const toggleMuted = () => {
    setMuted(!muted);
    localStorage.setItem("muted", JSON.stringify(!muted));
  };

  const toggleSousTitre = () => {
    const newSousTitreState = !sousTitre;
    setSousTitre(newSousTitreState);
    localStorage.setItem("sousTitres", JSON.stringify(newSousTitreState));
  };

  const volumeChange = (volume) => {
    console.info(volume.target.value);
  };

  return (
    <div id="parametres">
      <img
        id="param"
        onClick={toggleActive}
        src={param}
        alt="settings"
      />
      {active && (
        <div id="para-open">
          <img
            src={high}
            alt="volume fort"
          />
          <input
            type="range"
            name="volume"
            id="volume"
            min="1"
            max="10"
            onChange={volumeChange}
          />
          <img
            src={low}
            alt="volume faible"
          />
          <img
            onClick={toggleMuted}
            id="mute"
            src={
              !muted
                ? unMute
                : mute
            }
            alt="couper le son"
          />
          <img
            onClick={toggleSousTitre}
            id="subtitles"
            src={
              sousTitre
                ? subtilesON
                : subtilesOFF
            }
            alt="activer / desactiver les sous-titres"
          />
        </div>
      )}
    </div>
  );
}

Settings.propTypes = {
  sousTitre: PropTypes.bool.isRequired,
  setSousTitre: PropTypes.func.isRequired,
};

export default Settings;
