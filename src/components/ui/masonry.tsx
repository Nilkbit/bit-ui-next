"use client";
import { type DefaultProps, nRem } from "@/types/kit";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

export interface MasonryProps extends DefaultProps {
  as?: React.ElementType,
  gap?: number,
  columns?: number,
  defaultStyle?: React.CSSProperties,
  ssrColumns?: number
}

interface MasonryStyleProps {
  gap: number,
  columns: number,
  defaultStyle: React.CSSProperties
}

const Styled = styled.div<MasonryStyleProps>((props) => ({
  columnCount: props.columns,
  columnGap: `calc(${nRem} * ${props.gap})`,
  breakInside: "avoid-column",
  width: "100%",
  ...props.defaultStyle,
  'div': {
    marginBottom: `calc(${nRem} * ${props.gap})`,
    breakInside: "avoid"
  }
}))

export const Masonry = ({
  children,
  as = "div",
  gap = 0,
  columns = 1,
  ssrColumns = 1,
  defaultStyle = {},
  ...props
}: MasonryProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderColumns = mounted ? columns : ssrColumns;

  return (
    <Styled 
      gap={gap} 
      columns={renderColumns} 
      defaultStyle={defaultStyle} 
      {...props}
    >
      {children}
    </Styled>
  );
}

Masonry.displayName = "Masonry";