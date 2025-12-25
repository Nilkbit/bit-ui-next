import { type DefaultProps, type Color, type Text } from "@/types/kit";
import Link from "next/link";
import { Styled } from "@/kit";

interface AProps extends DefaultProps {
  href: string,
  colors?: [Color, Color],
  text?: Text
}

const A = ({
  children,
  href,
  colors = ["gray1", "gray2"],
  text = "body4",
  ...props
}: AProps) => {

  const defaultStyle: React.CSSProperties = {
    color: `var(--color-${colors[0]})`
  }

  const hoverStyle: React.CSSProperties = {
    color: `var(--color-${colors[1]})`
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

export default A;