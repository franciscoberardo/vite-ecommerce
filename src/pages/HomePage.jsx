import React from "react";
import Banner from "../components/Banner";
import TopList from "../components/TopList"; // Asegúrate de importar TopList
import Header from "../components/Header";
import { useRef } from "react";
import NewIn from "../components/NewIn";
import { useTranslationContext } from "../components/TranslationContext";
//Assets
import sw from "../assets/images/sw.png";
import hp from "../assets/images/hp.png";
import f1 from "../assets/images/disney.png";
import lord from "../assets/images/lord.png";
import marvel from "../assets/images/marvel.png";
import dc from "../assets/images/dc.png";
import Contact from "../components/Contact";

const HomePage = () => {
  const contactRef = useRef(null); // Crea la referencia
  const { t } = useTranslationContext();

  return (
    <div>
      <Header contactRef={contactRef} />
      <div className="mx-auto w-80vh h-[5px] bg-red-500 rounded-full my-4"></div>
      <TopList title="Top Products"/>
      <div className="mx-auto w-80vh h-[5px] bg-red-500 rounded-full my-4"></div>
      <NewIn tag="NEW IN" title="New In Products"/>
      <div className="mx-auto w-80vh h-[5px] bg-red-500 rounded-full my-4"></div>
      <div className="container mx-auto mt-4 transition-colors duration-300 bg-primary border-gray-700">
        <h1 className="bg-button text-center mb-6 text-2xl font-bold transition-colors duration-300 font-rajdhani text-black">
          {t("ProductList.ourCategories")}
        </h1>
      </div>
      <Banner imageLeft={sw} imageRight={hp} />
      <br />
      <Banner imageLeft={marvel} imageRight={dc} />
      <br />
      <Banner imageLeft={f1} imageRight={lord} />
      <br />
      <div className="mx-auto w-80vh h-[5px] bg-red-500 rounded-full my-4"></div>
      <Contact ref={contactRef} />
    </div>
  );
};

export default HomePage;
