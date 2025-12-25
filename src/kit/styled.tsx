'use client';

import { type DefaultProps } from '@/types/kit';
import styled from '@emotion/styled';

export interface StyledProps extends DefaultProps {
  as?: React.ElementType,
  defaultStyle?: React.CSSProperties,
  hoverStyle?: React.CSSProperties,
  activeStyle?: React.CSSProperties
}

interface StyledStyleProps {
  defaultStyle: React.CSSProperties,
  hoverStyle: React.CSSProperties,
  activeStyle: React.CSSProperties
}

const Style = styled.div<StyledStyleProps>((props) => ({
  ...props.defaultStyle,
  '&:hover': {
    ...props.hoverStyle,
  },
  '&:active': {
    ...props.activeStyle,
  },
}));

export const Styled = ({
  children,
  as = 'div',
  defaultStyle = {},
  hoverStyle = {},
  activeStyle = {},
  ...props
}: StyledProps) => {
  return (
    <Style
      as={as}
      defaultStyle={defaultStyle}
      hoverStyle={hoverStyle}
      activeStyle={activeStyle}
      {...props}
    >
      {children}
    </Style>
  );
};

Styled.displayName = 'Styled';