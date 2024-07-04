import React from "react";
import styles from "./modalphoto.module.css";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const Modalphoto = ({ FotoPerfil, showUserImage, setShowUserImage }) => {
  if (!showUserImage) {
    return null;
  }

  return (
    <div className={styles.containerModalPhoto}>
      <div className={styles.modalPhoto}>
        <div className={styles.containerButton}>
          <button title="Cerran imagen" onClick={() => setShowUserImage(false)}>
            <IoClose />
          </button>
        </div>
        <div className={styles.containerPhoto}>
          <Image
            className={styles.imagen}
            alt="imagen del usuario"
            src={FotoPerfil}
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Modalphoto;
