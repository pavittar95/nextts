import React, { useState } from "react";
import NextImage, { StaticImageData } from "next/image";
import styles from "./Image.module.scss";

type Props = {
  src: string | StaticImageData;
  webPSrc: string | StaticImageData;
  blur: string;
  alt: string;
};

export default function Image({ src, webPSrc, blur, alt }: Props) {
  const [showFallback, setShowFallback] = useState(false);
  return (
    <div className={styles["atom-image"]}>
      <NextImage
        // src={showFallback ? src : webPSrc}
        src={''}
        alt={alt}
        placeholder="blur"
        blurDataURL="https://cdn.lovefromyours.com/simplified-desktop.jpg"
        layout="fill"
        onError={() => {
          setShowFallback(true);
        }}
      />
    </div>
  );
}
