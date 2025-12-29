"use client";
import { Flex, Masonry } from "@/components/ui";
import { skills } from "@/data/static";
import { CardSkill } from "./cardSkill";
import { useWindowSize } from "react-use";

export const SectionSkills = () => {

  const { width } = useWindowSize();

  const getWidth = (width: number) => {
    let result: number = 0;
    if (width >= 1920) result = 3;
    else if (width >= 1024) result = 2;
    else result = 1;
    return result;
  }

  const columns = getWidth(width)

  return (
    <Flex as="section" direction="column" gap={32}>
      <h1 className="heading1">Skills</h1>
      <Masonry gap={24} columns={columns}>
        {skills.map(s => {return(
          <CardSkill key={s.name} name={s.name} icon={s.icon} href={s.href}>{s.desc}</CardSkill>
        )})}
      </Masonry>
    </Flex>
  );
}