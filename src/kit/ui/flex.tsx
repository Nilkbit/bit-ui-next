import { nRem, type DefaultProps } from "@/types/kit";
import { Styled } from "@/kit";

export interface FlexProps extends DefaultProps {
  as?: React.ElementType,
  direction?: "row"|"row-reverse"|"column"|"column-reverse",
  wrap?: "nowrap"|"wrap"|"wrap-reverse",
  gap?: number,
  padding?: number[]
}

export const Flex = ({
  children,
  as = "div",
  direction = "row",
  wrap = "nowrap",
  gap = 0,
  padding = [0],
  ...props
}: FlexProps) => {

  const defaultStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    flexWrap: wrap,
    gap: `calc(${nRem} * ${gap})`,
    padding: padding.map(p => {return(
      `calc(${nRem} * ${p})`
    )}).join(" ")
  }

  return (
    <Styled as={as} defaultStyle={defaultStyle}>
      {children}
    </Styled>
  );
}