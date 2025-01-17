import React from "react";
import { inter } from "@/app/Fonts/fonts";
import styles from "./aboutme.module.css";
import Link from "next/link";

const AboutMe = () => (
  <section className={styles.sectionOne}>
    <div className={styles.aboutme}>
      <h2 className={inter.className}>Acerca mí</h2>
      <p>
        Hola, soy Agustin Asaad. Tengo 25 años y soy programador full stack,
        especializado en el desarrollo front end. Me concentro en brindar
        experiencias de usuario de alta calidad, garantizando la facilidad de
        uso y la satisfacción del usuario. Me motiva seguir aprendiendo y
        creciendo profesionalmente, buscando oportunidades que me permitan
        desarrollar mis habilidades y contribuir al éxito de la empresa con la
        que colaboro.
      </p>
    </div>
    <div className={styles.aboutme}>
      <h2 className={inter.className}>Ubicación</h2>
      <p>Cordoba, Argentina</p>
    </div>
    <div className={styles.aboutme}>
      <h2 className={inter.className}>Nacimiento</h2>
      <p>17/02/1999</p>
    </div>
    <div className={styles.aboutme}>
      <h2 className={inter.className}>Pagina web</h2>
      <Link href="https://portfolio-personal-omega.vercel.app/">
        <p>https://portfolio-personal-omega.vercel.app/</p>
      </Link>
    </div>
    <div className={styles.aboutme}>
      <h2 className={inter.className}>Email</h2>
      <Link href="mailto:agusasaad1099@hotmail.com">
        <p>agusasaad1099@hotmail.com</p>
      </Link>
    </div>
  </section>
);

export default AboutMe;
