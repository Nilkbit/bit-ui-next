'use client';

import { Styled, type StyledProps } from '@/components';

export interface TooltipProps extends Omit<StyledProps, 'afterStyle' | 'hoverAfterStyle' | 'beforeStyle' | 'hoverBeforeStyle'> {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  tooltipStyle?: React.CSSProperties
}

export const Tooltip = ({
  content,
  children,
  position = 'top',
  tooltipStyle = {},
  ...props
}: TooltipProps) => {
  if (!content) return <>{children}</>;

  const positionStyles = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '8px'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '8px'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '8px'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '8px'
    }
  };

  const arrowSize = 6;
  const arrowStyles = {
    top: {
      bottom: `100%`,
      left: '50%',
      transform: 'translateX(-50%) translateY(4px)',
      borderTop: `${arrowSize}px solid ${tooltipStyle.backgroundColor}`,
      borderLeft: `${arrowSize}px solid transparent`,
      borderRight: `${arrowSize}px solid transparent`,
      borderBottom: `${arrowSize}px solid transparent`
    },
    bottom: {
      top: `100%`,
      left: '50%',
      transform: 'translateX(-50%) translateY(-4px)',
      borderBottom: `${arrowSize}px solid ${tooltipStyle.backgroundColor}`,
      borderLeft: `${arrowSize}px solid transparent`,
      borderRight: `${arrowSize}px solid transparent`,
      borderTop: `${arrowSize}px solid transparent`
    },
    left: {
      right: `100%`,
      top: '50%',
      transform: 'translateY(-50%) translateX(4px)',
      borderLeft: `${arrowSize}px solid ${tooltipStyle.backgroundColor}`,
      borderTop: `${arrowSize}px solid transparent`,
      borderBottom: `${arrowSize}px solid transparent`,
      borderRight: `${arrowSize}px solid transparent`
    },
    right: {
      left: `100%`,
      top: '50%',
      transform: 'translateY(-50%) translateX(-4px)',
      borderRight: `${arrowSize}px solid ${tooltipStyle.backgroundColor}`,
      borderTop: `${arrowSize}px solid transparent`,
      borderBottom: `${arrowSize}px solid transparent`,
      borderLeft: `${arrowSize}px solid transparent`
    }
  };

  return (
    <Styled
      defaultStyle={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'help',
        ...props.defaultStyle
      }}
      afterStyle={{
        content: `"${content}"`,
        position: 'absolute',
        ...positionStyles[position],
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
        zIndex: 1000,
        textAlign: 'center',
        whiteSpace: 'normal',
        maxWidth: "200px",
        width: "max-content",
        ...tooltipStyle,
      }}
      hoverAfterStyle={{
        opacity: 1,
        visibility: 'visible',
      }}
      beforeStyle={{
        content: '""',
        position: 'absolute',
        width: 0,
        height: 0,
        opacity: 0,
        visibility: 'hidden',
        ...arrowStyles[position],
        pointerEvents: 'none',
        zIndex: 1001
      }}
      hoverBeforeStyle={{
        opacity: 1,
        visibility: 'visible',
      }}
      {...props}
    >
      {children}
    </Styled>
  );
};

Tooltip.displayName = 'Tooltip';