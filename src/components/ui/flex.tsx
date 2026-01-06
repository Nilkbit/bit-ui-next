import { nRem } from "@/types/kit";
import { Styled, type StyledProps } from "@/components";

export interface FlexProps extends StyledProps {
  direction?: "row"|"row-reverse"|"column"|"column-reverse",
  wrap?: "nowrap"|"wrap"|"wrap-reverse",
  gap?: number,
  padding?: number[],
  radius?: number[],
  align?: "flex-start"|"flex-end"|"center"|"stretch",
  justify?: "flex-start"|"flex-end"|"center"|"stretch"|"space-between"|"space-around"|"space-evenly"
}

export const Flex = ({
  children,
  as = "div",
  direction = "row",
  wrap = "nowrap",
  gap = 0,
  padding = [0],
  radius = [0],
  align = "flex-start",
  justify = "flex-start",
  defaultStyle,
  hoverStyle,
  activeStyle,
  focusStyle,
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
    borderRadius: radius.map(r => {return(
      `calc(${nRem} * ${r})`
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
      focusStyle={focusStyle}
    >
      {children}
    </Styled>
  );
}