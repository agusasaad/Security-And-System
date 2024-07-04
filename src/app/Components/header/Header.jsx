"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import FotoPerfil from "./../../../../public/img/FotoPerfil.png";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { poppins } from "@/app/Fonts/fonts";
import Modalphoto from "./Modalphoto";

const Header = () => {
  const [showUserImage, setShowUserImage] = useState(false);

  const handleShowUserImage = () => {
    setShowUserImage(true);
  };

  return (
    <header className={styles.header} id="header">
      <div className={styles.banner}></div>
      <div className={styles.container}>
        <Image
          onClick={handleShowUserImage}
          className={styles.fotoPerfil}
          src={FotoPerfil}
          alt="imagen de usuario"
          width={180}
          height={180}
        />
        <div className={styles.containerTexts}>
          <div className={styles.nameAndIcon}>
            <h1 className={`${poppins.className} antialiased`}>
              Agustin Asaad
            </h1>
            <MdVerified className={styles.MdVerified} title="Verificado" />
          </div>
          <span>@agustinasaad</span>
        </div>
        <div className={styles.containerPills}>
          <span>Front End Developer</span>
          <span>Web Developer</span>
        </div>
      </div>
      <Modalphoto
        FotoPerfil={FotoPerfil}
        showUserImage={showUserImage}
        setShowUserImage={setShowUserImage}
      />
    </header>
  );
};

export default Header;
