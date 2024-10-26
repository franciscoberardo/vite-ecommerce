import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import foto from "../assets/images/astre2.png";

const Contact = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Manejo del envío del formulario
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Activa la animación cuando el componente es visible
            observer.disconnect(); // Desconectar después de la primera aparición
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current); // Observar el componente
    }

    return () => observer.disconnect();
  }, [ref]);

  return (
    <section ref={ref} className="bg-button py-6 px-3 md:py-8 md:px-4">

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Imagen con animación slide-in cuando es visible */}
        <div
          className={`hidden md:block transform transition-all duration-1000 ${
            isVisible ? 'animate-slideIn opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <img
            src={foto}
            alt="Contact us"
            className="w-full max-h-96 object-contain rounded-lg" // Ajustar altura máxima
          />
        </div>

        {/* Formulario con animación fade-in cuando es visible */}
        <div
          className={`bg-product shadow-md rounded-lg p-4 space-y-3 transition-opacity duration-1000 ${
            isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-lg font-semibold text-black text-center mb-1">{t('Contact.contactUs')}</p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-left text-gray-700 font-medium mb-1" htmlFor="name">
                {t('Contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                placeholder={t('Contact.yourName')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-1" htmlFor="email">
                {t('Contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                placeholder={t('Contact.yourEmail')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-1" htmlFor="message">
                {t('Contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className="w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                placeholder={t('Contact.yourMessage')}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {t('Contact.sendMessage')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
