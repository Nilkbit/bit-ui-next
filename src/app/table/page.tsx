import { A, Flex } from "@/components/ui";
import { tables } from "@/data/static";

export default function Page() {
  return (
    <Flex as="section" direction="column" gap={32} align="center">
      <h1 className="heading1">Tables</h1>
      <Flex>
        {tables.map((table) => {return(
          <A key={table.name} href={table.href} text="body1" colors={["gray1", "accent3"]}>{table.name}</A>
        )})}
      </Flex>
    </Flex>
  );
}
