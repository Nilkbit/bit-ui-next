"use client";
import { nRem, type DefaultProps } from "@/types/kit";
import styled from "@emotion/styled";

export interface MasonryProps extends DefaultProps {
  as?: React.ElementType,
  gap?: number,
  padding?: number[],
  radius?: number[],
  columns?: number
}

const Styled = styled.div<MasonryProps>`${p => `
  column-count: ${p.columns};
  column-gap: calc(${nRem} * ${p.gap});
  break-inside: avoid-column;
  width: 100%;
 div {
    margin-bottom: calc(${nRem} * ${p.gap});
    break-inside: avoid;
  }
`}`;

export const Masonry = ({
  children,
  as = "div",
  gap = 0,
  padding = [0],
  radius = [0],
  columns = 1,
  ...props
}: MasonryProps) => {

  return (
    <Styled gap={gap} columns={columns}>
      {children}
    </Styled>
  );
}