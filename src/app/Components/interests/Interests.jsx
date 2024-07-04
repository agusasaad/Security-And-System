import React from "react";
import styles from "./interests.module.css";
import { poppins } from "@/app/Fonts/fonts";
import { diseñoCreatividad, otrosIntereses, tecnologíaProgramación } from "./getInterests";

const Interests = () => (
  <section className={styles.sectionTwo} id="interests">
    <div className={styles.titleInterests}>
      <h2 className={poppins.className}>Tecnología y Programación</h2>
      <div className={styles.interests}>
        {tecnologíaProgramación.map((interest, index) => (
          <span key={index}>#{interest}</span>
        ))}
      </div>
    </div>
    <div className={styles.titleInterests}>
      <h2 className={poppins.className}>Diseño y creatividad</h2>
      <div className={styles.interests}>
        {diseñoCreatividad.map((interest, index) => (
          <span key={index}>#{interest}</span>
        ))}
      </div>
    </div>
    <div className={styles.titleInterests}>
      <h2 className={poppins.className}>Otros intereses</h2>
      <div className={styles.interests}>
        {otrosIntereses.map((interest, index) => (
          <span key={index}>#{interest}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Interests;
