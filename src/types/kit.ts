const nRem = `0.0625rem`;

type ColorGray = "gray1"|"gray2"|"gray3"|"gray4"|"gray5";
type ColorAccent = "accent1"|"accent2"|"accent3"|"accent4"|"accent5";
type Color = ColorGray | ColorAccent;

type HexColor = string & { readonly __brand: unique symbol };
function isHexColor(color: string): color is HexColor {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{8})$/.test(color);
}
function hexColor(value: string): HexColor {
  if (!isHexColor(value)) {
    throw new Error(`Invalid HEX color: ${value}`);
  }
  return value as HexColor;
}

const color = {
  gray1: hexColor("#E0E0E0"),
  gray2: hexColor("#A8A8A8"),
  gray3: hexColor("#707070"),
  gray4: hexColor("#383838"),
  gray5: hexColor("#000000"),
  accent1: hexColor("#9BC7A2"),
  accent2: hexColor("#80FF95"),
  accent3: hexColor("#00FF2B"),
  accent4: hexColor("#296633"),
  accent5: hexColor("#2C382E")
} as const satisfies Record<Color, HexColor>;

type Size = "lg"|"md"|"sm"|"xs";
const size = {
  lg: 1920,
  md: 1440,
  sm: 1024,
  xs: 576
} as const satisfies Record<Size, number>;

type TextHeading = "heading1"|"heading2"|"heading3"|"heading4";
type TextBody = "body1"|"body2"|"body3"|"body4";
type TextMono = "mono1"|"mono2"|"mono3"|"mono4";
type Text = TextHeading | TextBody | TextMono;

interface DefaultProps extends React.HTMLAttributes<HTMLElement>  {
  children?: React.ReactNode
}

type Icons = 
  | 'open-in-new'
  | 'money-bag'
  | 'menu'
  | 'logo_youtube'
  | 'logo_vuedotjs'
  | 'logo_vscodium'
  | 'logo_twitch'
  | 'logo_telegram'
  | 'logo_supabase'
  | 'logo_sass'
  | 'logo_react'
  | 'logo_postgresql'
  | 'logo_nuxt'
  | 'logo_nilkbit'
  | 'logo_nextdotjs'
  | 'logo_github'
  | 'logo_figma';

export type { DefaultProps, Color, Size, Text, Icons }
export { nRem, color, size }