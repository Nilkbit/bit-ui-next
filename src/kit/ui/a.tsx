import { type DefaultProps, type Color, type Text, color } from "@/types/kit";
import Link from "next/link";
import { Styled } from "@/kit";

export interface AProps extends DefaultProps {
  href: string,
  colors?: [Color, Color],
  text?: Text
}

export const A = ({
  children,
  href,
  colors = ["gray1", "gray2"],
  text = "body4",
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
      {...props}
      className={`${text} ${props.className}`}
    >
      <Styled as="span"
        defaultStyle={defaultStyle}
        hoverStyle={hoverStyle}
      >
        {children}
      </Styled>
    </Link>
  );
}