import { Flex } from "@/components/ui";
import { links } from "@/data/static";
import { CardLink } from "@/components/elements";

export const SectionLinks = () => {
  return (
    <Flex as="section" direction="column" gap={32} align="center">
      <h1 className="heading1">Links</h1>
      <Flex gap={24} wrap="wrap" justify="center">
        {links.map(l => {return(
          <CardLink key={l.name} name={l.name} icon={l.icon} href={l.href}>{l.desc}</CardLink>
        )})}
      </Flex>
    </Flex>
  );
}