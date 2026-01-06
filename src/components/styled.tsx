'use client';

import { type DefaultProps } from '@/types/kit';
import styled from '@emotion/styled';

export interface StyledProps extends DefaultProps {
  as?: React.ElementType,
  defaultStyle?: React.CSSProperties,
  hoverStyle?: React.CSSProperties,
  activeStyle?: React.CSSProperties,
  focusStyle?: React.CSSProperties,
  lgStyle?: React.CSSProperties,
  mdStyle?: React.CSSProperties,
  smStyle?: React.CSSProperties,
  xsStyle?: React.CSSProperties,
  beforeStyle?: React.CSSProperties,
  afterStyle?: React.CSSProperties,
  hoverBeforeStyle?: React.CSSProperties,
  hoverAfterStyle?: React.CSSProperties,
  extended?: any
}

interface StyledStyleProps {
  defaultStyle: React.CSSProperties,
  hoverStyle: React.CSSProperties,
  activeStyle: React.CSSProperties,
  focusStyle: React.CSSProperties,
  lgStyle: React.CSSProperties,
  mdStyle: React.CSSProperties,
  smStyle: React.CSSProperties,
  xsStyle: React.CSSProperties,
  beforeStyle: React.CSSProperties,
  afterStyle: React.CSSProperties,
  hoverBeforeStyle: React.CSSProperties,
  hoverAfterStyle: React.CSSProperties,
  extended: any
}

const Style = styled.div<StyledStyleProps>((props) => ({
  ...props.defaultStyle,
  '&:hover': {
    ...props.hoverStyle
  },
  '&:active': {
    ...props.activeStyle
  },
  '&:focus-within': {
    ...props.focusStyle
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
  },
  '&::before': {
    ...props.beforeStyle
  },
  '&::after': {
    ...props.afterStyle
  },
  '&:hover::before': {
    ...props.hoverBeforeStyle
  },
  '&:hover::after': {
    ...props.hoverAfterStyle
  },
  ...props.extended
}));

export const Styled = ({
  children,
  as = 'div',
  defaultStyle = {},
  hoverStyle = {},
  activeStyle = {},
  focusStyle = {},
  lgStyle = {},
  mdStyle = {},
  smStyle = {},
  xsStyle = {},
  beforeStyle = {},
  afterStyle = {},
  hoverBeforeStyle = {},
  hoverAfterStyle = {},
  extended,
  ...props
}: StyledProps) => {
  return (
    <Style
      as={as}
      defaultStyle={defaultStyle}
      hoverStyle={hoverStyle}
      activeStyle={activeStyle}
      focusStyle={focusStyle}
      lgStyle={lgStyle}
      mdStyle={mdStyle}
      smStyle={smStyle}
      xsStyle={xsStyle}
      beforeStyle={beforeStyle}
      afterStyle={afterStyle}
      hoverBeforeStyle={hoverBeforeStyle}
      hoverAfterStyle={hoverAfterStyle}
      extended={extended}
      {...props}
    >
      {children}
    </Style>
  );
};

Styled.displayName = 'Styled';