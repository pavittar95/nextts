import React from "react";
import Image from "stories/atoms/Image";
import {
  simplifiedDesktopJPG,
  simplifiedDesktopWEBP,
  simplifiedMobileJPG,
  simplifiedMobileWEBP,
} from "stories/constants/imageCatalogue";
import styles from "./Banner.module.scss";

export default function HomeBanner() {
  return (
    <div className={styles["templates-banner"]}>
      <div className="hidden md:block">
        <Image
          src={simplifiedDesktopJPG}
          webPSrc={simplifiedDesktopWEBP}
          blur={"../assets/images/simplified-desktop-blur.jpg"}
          alt="banner image"
        ></Image>
      </div>
      <div className="block md:hidden">
        <Image
          src={simplifiedMobileJPG}
          webPSrc={simplifiedMobileWEBP}
          blur={"../assets/images/simplified-mobile-blur.jpg"}
          alt="banner image"
        ></Image>
      </div>
    </div>
  );
}
