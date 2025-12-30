import { Flex, Icon, Tooltip } from "@/components/ui";
import { color, nRem, type DefaultProps, type Icons, type Url } from "@/types/kit";
import Link from "next/link";


interface LinkProps extends DefaultProps {
  name: string,
  icon: Icons,
  href: Url
}

export const CardLink = ({
  children,
  name,
  icon,
  href,
  ...props
}: LinkProps) => {

  const defaultStyle = {
    backgroundColor: color.gray1,
    color: color.gray5
  } as React.CSSProperties;

  const hoverStyle = {
    backgroundColor: color.accent3
  } as React.CSSProperties;

  return (
    <Tooltip content={`${children}`} className="body4" tooltipStyle={{backgroundColor: color.gray4, padding: `calc(${nRem} * 8)`, borderRadius: `calc(${nRem} * 8)`}}>
      <Link {...props} href={href} target="_blank">
        <Flex gap={12} padding={[16, 32]} radius={[16]} align="center" className="heading4" defaultStyle={defaultStyle} hoverStyle={hoverStyle}>
          <Icon width={64} height={64} name={icon}/>{name}
        </Flex>
      </Link>
    </Tooltip>
  );
}