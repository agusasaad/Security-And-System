import React from "react";
import styles from "./header.module.css";
import FotoPerfil from "./../../../../public/img/FotoPerfil.png";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { poppins } from "@/app/Fonts/fonts";

const Header = () => (
  <header className={styles.header} id="header">
    <div className={styles.banner}></div>
    <div className={styles.container}>
      <Image
        className={styles.fotoPerfil}
        src={FotoPerfil}
        alt='imagen de usuario'
        width={180}
        height={180}
      ></Image>
      <div className={styles.containerTexts}>
        <div className={styles.nameAndIcon}>
          <h1 className={`${poppins.className} antialiased`}>Agustin Asaad</h1>
          <MdVerified className={styles.MdVerified} title="Verificado" />
        </div>
        <span>@agustinasaad</span>
      </div>
      <div className={styles.containerPills}>
        <span>Front End Developer</span>
        <span>Web Developer</span>
      </div>
    </div>
  </header>
);

export default Header;
