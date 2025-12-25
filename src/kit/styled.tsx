'use client';

import { DefaultProps } from '@/types';
import styled from '@emotion/styled';

interface StyledProps extends DefaultProps {
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

const Styled = ({
  children, className, style,
  as = 'div',
  defaultStyle = {},
  hoverStyle = {},
  activeStyle = {},
  ...props
}: StyledProps) => {
  return (
    <Style
      className={className} style={style}
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

export default Styled;