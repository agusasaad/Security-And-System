import React from "react";
import styles from "./modal.module.css";
import { inter, poppins } from "@/app/Fonts/fonts";

const Modal = ({ formData, showModal, closeModal, handleConfirm }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className={styles.containerModal}>
      <div className={styles.modal}>
        <h2 className={poppins.className}>
          ¿Quiere confirmar el envio del formulario?
        </h2>
        <div className={styles.containerInfo}>
          <div>
            <h3 className={poppins.className}>Nombre completo <span>*</span></h3>
            <p>{formData.name}</p>
          </div>
          <div>
            <h3 className={poppins.className}>Email <span>*</span></h3>
            <p>{formData.email}</p>
          </div>
          <div>
            <h3 className={poppins.className}>Mensaje <span>*</span></h3>
            <p>{formData.message}</p>
          </div>
        </div>
        <div className={styles.containerButtons}>
          <button className={inter.className} style={{ background: "#59c16f" }} onClick={handleConfirm}>
            Enviar
          </button>
          <button onClick={closeModal} className={inter.className} style={{ background: "#e04552" }}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
