import React, { useState } from "react";
import { inter, poppins } from "@/app/Fonts/fonts";
import Modal from "./Modal";
import { FcApproval } from "react-icons/fc";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [confirmForm, setConfirmForm] = useState(false);

  // Capturo datos del form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Corroboro que los campos del form estén llenos
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setShowModal(true);
    } else {
      alert("Completa los campos");
    }
  };

  // Confirmo el envío del form, vaciamos el form y cerramos el modal
  const handleConfirm = () => {
    setShowModal(false);
    setConfirmForm(true); //Le muestro el mensaje de confirmacion al usuario

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" }); // Vacio el form 
      setConfirmForm(false); // Ocultamos el mensaje de confirmación
    }, 2500);
  };

  // Cancelamos el envío del form
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.sectionThree} id="contact">
      {confirmForm ? (
        <div className={styles.confirmForm}>
          <h2 className={poppins.className}>
            ¡El formulario se envió correctamente!
          </h2>
          <span>
            <FcApproval />
          </span>
        </div>
      ) : (
        <>
          <h2 className={poppins.className}>Formulario de contacto</h2>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className={inter.className}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Nombre completo"
              required
            />
            <input
              onChange={handleChange}
              className={inter.className}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              required
            />
            <textarea
              onChange={handleChange}
              className={inter.className}
              id="message"
              name="message"
              value={formData.message}
              placeholder="Escribele un mensaje"
              required
            ></textarea>
            <div>
              <button className={inter.className} type="submit">
                Enviar
              </button>
            </div>
          </form>
          <Modal
            showModal={showModal}
            formData={formData}
            handleConfirm={handleConfirm}
            closeModal={handleCloseModal}
          />
        </>
      )}
    </section>
  );
};

export default ContactForm;
