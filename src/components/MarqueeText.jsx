import React from "react";

const MarqueeText = ({ texts }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-marquee-reverse inline-block text-sm w-full">
        {texts.map((text, index) => (
          <span key={index}>
            {text} &nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
