import { type DefaultProps, type Color, type Text, color, type Url } from "@/types/kit";
import Link from "next/link";
import { Styled } from "@/components";

export interface AProps extends DefaultProps {
  href: Url,
  colors?: [Color, Color],
  text?: Text,
  target?: React.HTMLAttributeAnchorTarget
}

export const A = ({
  children,
  href,
  colors = ["gray1", "gray2"],
  text = "body4",
  target = "_self",
  ...props
}: AProps) => {

  const defaultStyle: React.CSSProperties = {
    color: `${color[colors[0]]}`
  }

  const hoverStyle: React.CSSProperties = {
    color: `${color[colors[1]]}`
  }

  return (
    <Link
      href={href}
      target={target}
      {...props}
      className={props.className}
    >
      <Styled as="span"
        defaultStyle={defaultStyle}
        hoverStyle={hoverStyle}
        className={text}
      >
        {children}
      </Styled>
    </Link>
  );
}