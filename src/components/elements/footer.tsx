import { A, Icon } from "@/components/ui";
import { Flex } from "@/components/ui";
import { links, pages } from "@/data/static";
import { color, nRem, type Size } from "@/types/kit";

export const Footer = () => {

  const padding = {
    lg: 240,
    md: 144,
    sm: 64,
    xs: 16
  } as const satisfies Record<Size, number>;

  const getPadding = (pad: number) => {
    return ({padding: `calc(${nRem} * 47) calc(${nRem} * ${pad}) calc(${nRem} * 48)`}) as React.CSSProperties;
  }

  const defaultStyle: React.CSSProperties = {
    borderTop: `1px solid ${color.gray4}`
  }

  return (
    <Flex as="footer" align="center" justify="space-between"
      lgStyle={getPadding(padding.lg)}
      mdStyle={getPadding(padding.md)}
      smStyle={getPadding(padding.sm)}
      xsStyle={getPadding(padding.xs)}
      defaultStyle={defaultStyle}
    >
      <Flex as="ul" direction="column" gap={12}>
        {pages.map(p => {return(
          <li key={p.name}><A href={p.href}>{p.name}</A></li>
        )})}
      </Flex>
      <A text="heading1" href="/"><Icon name="logo_nilkbit"/></A>
      <Flex as="ul" direction="column" gap={12}>
        {links.map(l => {return(
          <li key={l.name}><A href={l.href}><Flex as="span" gap={8}><Icon name={l.icon}/>{l.name}</Flex></A></li>
        )})}
      </Flex>
    </Flex>
  );
}