'use client'
import React, { useState } from "react";
import AboutMe from "../aboutMe/AboutMe";
import Interests from "../interests/Interests";
import ContactForm from "../contactForm/ContactForm";
import ButtonGroup from "../buttonGroup/ButtonGroup";
import styles from "./main.module.css"

const Main = () => {

  const [showComponent, setShowComponent] = useState("Aboutme");

  const renderComponent = () => {
    switch (showComponent) {
      case "Aboutme":
        return <AboutMe />;
      case "interests":
        return <Interests />;
      case "contact":
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
      <main className={styles.containerMain}>
        <ButtonGroup
          showComponent={showComponent}
          setShowComponent={setShowComponent}
        />
        {renderComponent()}
      </main>
  );
};

export default Main;
