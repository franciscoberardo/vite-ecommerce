import React from "react";
import { useTranslation } from 'react-i18next';
import MarqueeText from './MarqueeText';

const OfferBanner = () => {
  const { t } = useTranslation();

  const repeatedText = new Array(8).fill(t('OfferBanner.offerText'));

  return (
    <div className="relative z-20">
      <div className="w-full bg-red-600 text-white">
        <MarqueeText texts={repeatedText} />
      </div>
    </div>
  );
};

export default OfferBanner;
