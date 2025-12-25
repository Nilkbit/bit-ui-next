'use client';

import { type DefaultProps } from '@/types/kit';
import styled from '@emotion/styled';

export interface StyledProps extends DefaultProps {
  as?: React.ElementType,
  defaultStyle?: React.CSSProperties,
  hoverStyle?: React.CSSProperties,
  activeStyle?: React.CSSProperties,
  lgStyle?: React.CSSProperties,
  mdStyle?: React.CSSProperties,
  smStyle?: React.CSSProperties,
  xsStyle?: React.CSSProperties
}

interface StyledStyleProps {
  defaultStyle: React.CSSProperties,
  hoverStyle: React.CSSProperties,
  activeStyle: React.CSSProperties,
  lgStyle: React.CSSProperties,
  mdStyle: React.CSSProperties,
  smStyle: React.CSSProperties,
  xsStyle: React.CSSProperties
}

const Style = styled.div<StyledStyleProps>((props) => ({
  ...props.defaultStyle,
  '&:hover': {
    ...props.hoverStyle,
  },
  '&:active': {
    ...props.activeStyle,
  },
  '@media screen and (min-width: 576px)': {
    ...props.xsStyle
  },
  '@media screen and (min-width: 1024px)': {
    ...props.smStyle
  },
  '@media screen and (min-width: 1440px)': {
    ...props.mdStyle
  },
  '@media screen and (min-width: 1920px)': {
    ...props.lgStyle
  }
}));

export const Styled = ({
  children,
  as = 'div',
  defaultStyle = {},
  hoverStyle = {},
  activeStyle = {},
  lgStyle = {},
  mdStyle = {},
  smStyle = {},
  xsStyle = {},
  ...props
}: StyledProps) => {
  return (
    <Style
      as={as}
      defaultStyle={defaultStyle}
      hoverStyle={hoverStyle}
      activeStyle={activeStyle}
      lgStyle={lgStyle}
      mdStyle={mdStyle}
      smStyle={smStyle}
      xsStyle={xsStyle}
      {...props}
    >
      {children}
    </Style>
  );
};

Styled.displayName = 'Styled';