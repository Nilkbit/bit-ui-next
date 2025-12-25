import { nRem, type DefaultProps } from "@/types/kit";
import { Styled } from "@/components";

export interface FlexProps extends DefaultProps {
  as?: React.ElementType,
  direction?: "row"|"row-reverse"|"column"|"column-reverse",
  wrap?: "nowrap"|"wrap"|"wrap-reverse",
  gap?: number,
  padding?: number[],
  align?: "flex-start"|"flex-end"|"center"|"stretch",
  justify?: "flex-start"|"flex-end"|"center"|"stretch"|"space-between"|"space-around"|"space-evenly",
  defaultStyle?: React.CSSProperties,
  hoverStyle?: React.CSSProperties,
  activeStyle?: React.CSSProperties,
  lgStyle?: React.CSSProperties,
  mdStyle?: React.CSSProperties,
  smStyle?: React.CSSProperties,
  xsStyle?: React.CSSProperties
}

export const Flex = ({
  children,
  as = "div",
  direction = "row",
  wrap = "nowrap",
  gap = 0,
  padding = [0],
  align = "flex-start",
  justify = "flex-start",
  defaultStyle,
  hoverStyle,
  activeStyle,
  lgStyle,
  xsStyle,
  mdStyle,
  smStyle,
  ...props
}: FlexProps) => {

  const Style: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    flexWrap: wrap,
    gap: `calc(${nRem} * ${gap})`,
    padding: padding.map(p => {return(
      `calc(${nRem} * ${p})`
    )}).join(" "),
    alignItems: align,
    justifyContent: justify,
    ...defaultStyle
  }

  return (
    <Styled as={as} {...props}
      defaultStyle={Style} 
      hoverStyle={hoverStyle}
      activeStyle={activeStyle}
      lgStyle={lgStyle}
      mdStyle={mdStyle}
      smStyle={smStyle}
      xsStyle={xsStyle}
    >
      {children}
    </Styled>
  );
}