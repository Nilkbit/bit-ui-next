import { Flex, Icon } from "@/components/ui";
import { color, type DefaultProps, type Icons, type Url } from "@/types/kit";
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
    <Link {...props} href={href} target="_blank">
      <Flex gap={12} padding={[16, 32]} radius={[16]} align="center" className="heading4" defaultStyle={defaultStyle} hoverStyle={hoverStyle}>
        <Icon width={64} height={64} name={icon}/>{name}
      </Flex>
    </Link>
  );
}