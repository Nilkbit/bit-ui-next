import { A, Icon } from "@/components/ui";
import { Flex } from "@/components/ui";
import { pages } from "@/data/static";
import { color, nRem, type Size } from "@/types/kit";

export const Header = () => {

  const padding = {
    lg: 240,
    md: 144,
    sm: 64,
    xs: 16
  } as const satisfies Record<Size, number>;

  const getPadding = (pad: number) => {
    return ({padding: `calc(${nRem} * 12) calc(${nRem} * ${pad}) calc(${nRem} * 11)`}) as React.CSSProperties;
  }

  const defaultStyle: React.CSSProperties = {
    borderBottom: `1px solid ${color.gray4}`
  }

  return (
    <Flex as="header" align="center" justify="space-between"
      lgStyle={getPadding(padding.lg)}
      mdStyle={getPadding(padding.md)}
      smStyle={getPadding(padding.sm)}
      xsStyle={getPadding(padding.xs)}
      defaultStyle={defaultStyle}
    >
      <A text="body1" href="/"><Icon name="logo_nilkbit"/></A>
      <Flex as="ul">
        {pages.map(p => {return(
          <li key={p.name}><A href={p.href}>{p.name}</A></li>
        )})}
      </Flex>
    </Flex>
  );
}