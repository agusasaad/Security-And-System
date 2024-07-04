import React from "react";
import { inter } from "@/app/Fonts/fonts";
import styles from "./buttongroup.module.css";

const ButtonGroup = ({ showComponent, setShowComponent }) => {

  const handleButtonClick = (component) => {
    setShowComponent(component);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${inter.className} ${showComponent === 'Aboutme' ? styles.active : ''}`}
        onClick={() => handleButtonClick('Aboutme')}
      >
        Sobre mí
      </button>
      <button
        className={`${inter.className} ${showComponent === 'interests' ? styles.active : ''}`}
        onClick={() => handleButtonClick('interests')}
      >
        Intereses
      </button>
      <button
        className={`${inter.className} ${showComponent === 'contact' ? styles.active : ''}`}
        onClick={() => handleButtonClick('contact')}
      >
        Contacto
      </button>
    </div>
  );
};

export default ButtonGroup;
