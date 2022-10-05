import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Span from "../../atoms/Span";
import Button from "../../atoms/Button";
import CartIcon from "../../assets/icons/cart_icon.svg";
import LogoIcon from "../../assets/icons/logo.png";
import { MenuIcon } from "stories/atoms/Icons/Menu";

export default function Header() {
  return (
    <div
      className={classNames(
        "fixed left-0 right-0 bg-white shadow",
        styles["organisms-header"]
      )}
    >
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl sm:px-6">
        <ul className="items-center justify-around hidden w-1/3 md:flex">
          <li className="px-2">
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
          <li className="px-2">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="px-2">
            <Link href="/reviews">
              <a>Reviews</a>
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-start w-1/3 md:hidden">
          <MenuIcon />
        </div>
        <div className="flex items-center justify-center w-1/3">
          <Link href="/">
            <a>
              <Image src={LogoIcon} width={100} height={40} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-end w-1/3">
          <div>
            <Button
              type="primary"
              htmlType="button"
              round
              height={34}
              className={styles["organisms-header__login-btn"]}
            >
              Login
            </Button>
          </div>
          <div>
            <Button type="transparent" htmlType="button" className="relative">
              <Image src={CartIcon} width={32} height={32} alt="cart" />
              <Span size="small" color="black" className="absolute bottom-2.5">
                4
              </Span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
