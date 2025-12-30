import { Flex, Icon } from "@/components/ui";
import { color, type DefaultProps, type Icons, type Url } from "@/types/kit";
import Link from "next/link";

interface SkillProps extends DefaultProps {
  name: string,
  icon: Icons,
  href: Url
}

export const CardSkill = ({
  children,
  name,
  icon,
  href,
  ...props
}: SkillProps) => {
  return (
    <Link {...props} href={href} target="_blank">
      <Flex direction="column" gap={16} padding={[20]} radius={[12]} className="color-gray5 bg-gray1" beforeStyle={{
        content: '"ℹ"',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0, .75)",
        opacity: 0,
        zIndex: 1,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        color: color.gray1
      }} hoverBeforeStyle={{opacity: 1}}>
        <Flex align="center" as="h4" className="heading4" gap={8}><Icon width={64} height={64} name={icon}/>{name}</Flex>
        <p className="body3">{children}</p>
      </Flex>
    </Link>
  );
}