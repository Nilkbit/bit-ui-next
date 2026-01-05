import games from "@/data/tables/contentGames";
import { SectionTable, TableRow, type Status, sortList } from "../sectionTable";

export default async function Page() {

  const getStatusPriority = (status: "playing" | "planned" | "completed" | "abandoned" | null): number => {
  const order: Record<string, number> = {
    "playing": 0,
    "planned": 1,  
    "completed": 2, 
    "abandoned": 3  
  };
  return order[status as keyof typeof order] ?? 4;
};

  let gameList = await games.getAll().then((res) => {return(res.sort((a, b) => {return sortList(a, b, getStatusPriority);}).map((game, index, array) => {
    let statusName: Status = "info";
    switch (game.status) {
      case "playing": statusName = "warn"; break;
      case "completed": statusName = "success"; break;
      case "planned": statusName = "info"; break;
      case "abandoned": statusName = "error"; break;
    }

    if (game.id && game.name && game.status) {
      return (
        <TableRow last={index == array.length - 1} key={game.id} index={index} name={game.name} status={game.status} link={game.link || ""} statusName={statusName}/>
      )
    }
  }))});

  return (
    <>
    <SectionTable tableList={gameList}/>
    </>
  );
}