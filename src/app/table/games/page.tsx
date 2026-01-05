import SectionTableSearch, { type GenericItem, type StatusConfig } from "../sectionTableSearch";
import games from "@/data/tables/contentGames";

export default async function GamesPage() {
  const allGames = await games.getAll();
  
  const gameStatusConfig: StatusConfig = {
    priority: {
      "playing": 0,  
      "planned": 1,  
      "completed": 2, 
      "abandoned": 3  
    },
    variants: {
      "playing": "warn",
      "planned": "info",
      "completed": "success",
      "abandoned": "error"
    }
  };

  return (
    <SectionTableSearch
      initialItems={allGames as GenericItem[]}
      statusConfig={gameStatusConfig}
      title="Table"
      subtitle="Games"
    />
  );
}