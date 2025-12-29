import { Flex, Icon } from "@/components/ui";
import type { DefaultProps, Icons, Url } from "@/types/kit";
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
      <Flex direction="column" gap={16} padding={[20]} radius={[12]} className="color-gray5 bg-gray1">
        <Flex align="center" as="h4" className="heading4" gap={8}><Icon width={64} height={64} name={icon}/>{name}</Flex>
        <p className="body3">{children}</p>
      </Flex>
    </Link>
  );
}