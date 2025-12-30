import { A, Flex, Icon } from "@/components/ui";

export const SectionHello = () => {
  return (
    <Flex as="section" justify="space-between">
      <Flex direction="column" gap={32}>
        <h1 className="heading1">Hello!</h1>
        <Flex direction="column" gap={16}>
          <p className="body1">I’m Daniel Vyakulin.</p>
          <p className="body3">UI designer and developer, my <A text="body3" colors={["accent3", "accent2"]} href="https://github.com/Nilkbit">GitHub</A>. I also stream on <A text="body3" colors={["accent3", "accent2"]} href="https://www.twitch.tv/nilkbit">Twitch</A> and make videos on <A text="body3" colors={["accent3", "accent2"]} href="https://www.youtube.com/@Nilkbit">YouTube</A>.</p>
        </Flex>
      </Flex>
      <Icon name="logo_nilkbit" width={256} height={256} className="color-accent3"/>
    </Flex>
  );
}