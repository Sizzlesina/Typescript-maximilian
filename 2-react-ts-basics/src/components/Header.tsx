/** @format */

import { ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

function Header({ children, image }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}

export default Header;
