import React from "react";
import Image from "stories/atoms/Image";
import {
  simplifiedDesktopJPG,
  simplifiedDesktopWEBP,
} from "stories/constants/imageCatalogue";
import TestComponent from "stories/atoms/TestComponent";

export default function HomeBanner() {
  return (
    <div>
      <Image
        src={simplifiedDesktopJPG}
        webPSrc={simplifiedDesktopWEBP}
        blur={'"../assets/images/simplified-desktop-blur.jpg"'}
        alt="banner image"
      ></Image>
      <TestComponent bannerImage={simplifiedDesktopJPG} />
    </div>
  );
}
