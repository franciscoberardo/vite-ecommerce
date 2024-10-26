// src/components/Popup.js
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Popup = ({ product, visible, message, onClose }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const popupRef = useRef(null);

  // Observa si el popup es visible en el viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (popupRef.current) {
      observer.observe(popupRef.current);
    }

    return () => {
      if (popupRef.current) {
        observer.unobserve(popupRef.current);
      }
    };
  }, []);

  // Cierra el popup automáticamente después de 3 segundos si es visible
  useEffect(() => {
    if (visible && isIntersecting) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, isIntersecting, onClose]);

  if (!visible || !product) return null;

  return createPortal(
    <div
      ref={popupRef}
      className="z-50 fixed bottom-5 right-5 bg-white border border-gray-300 shadow-lg rounded-lg p-4 flex items-center space-x-4 transition-all duration-300 transform scale-100 text-black"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div>
        <h3 className="text-lg font-semibold">{message}</h3>
        <p className="text-sm">{product.name}</p>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
