/** @format */
// Maximiloan Solution
/* import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };
type ButtonLinkProps = LinkProps & BaseProps & { to: string };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}>
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}>
      {children}
    </button>
  );
}
*/

// My Solution
import { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
type LinkType = typeof Link;

type BaseProps = {
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };

type ButtonLinkProps = ComponentPropsWithoutRef<LinkType> &
  BaseProps & { to?: string };

function isButtonLinkProps(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

function Button(props: ButtonProps | ButtonLinkProps) {
  const isTextOnly = props.textOnly && "button--text-only";

  if (isButtonLinkProps(props)) {
    return <Link {...props} className={`button ${isTextOnly}`}></Link>;
  }
  return <button {...props} className={`button ${isTextOnly}`}></button>;
}

export default Button;
