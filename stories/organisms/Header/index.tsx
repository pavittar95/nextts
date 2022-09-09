import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import CartIcon from "../../assets/icons/cart_icon.svg";
import LogoIcon from "../../assets/icons/logo.png";

import "./Header.module.scss";

export default function Header() {
  return (
    <div className="atom-header sticky flex items-center gap-2">
      <ul>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
      </ul>
      <div>
        <Link href="/">
          <Image src={LogoIcon} width="100" height={40} alt="logo" />
        </Link>
      </div>
      <div>
        <div>
          <Button type="primary" htmlType="button">
            Login
          </Button>
        </div>
        <div>
          <Button type="transparent" htmlType="button">
            <Image src={CartIcon} width="32" height="32" alt="cart" />
            <Heading type="h6">4</Heading>
          </Button>
        </div>
      </div>
    </div>
  );
}
