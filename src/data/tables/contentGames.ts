import { createPublicClient, createSecretClient } from "@/data/supabaseClient";
import { 
  type Tables, 
  type TablesInsert, 
  Constants, 
  type Enums 
} from "@/types/supabase";

const TABLE_NAME = "contentGames";

export type Game = Tables<"contentGames">;
export type NewGame = Omit<TablesInsert<"contentGames">, "id">;
export type GameStatus = Enums<"statusGame">;

const games = {
  getAll: async (): Promise<Game[]> => {
    const supabase = createPublicClient();

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("id, name, link, status"); 

    if (error) {
      console.error("[Games Service] GET_ALL_ERROR:", {
        message: error.message,
        details: error.details,
        hint: error.hint
      });
      throw new Error(`Failed to fetch games: ${error.message}`);
    }

    return data || [];
  },

  create: async (game: NewGame): Promise<Game> => {
    if (typeof window !== "undefined") {
      throw new Error("Game creation is only allowed on the server");
    }

    const supabase = createSecretClient();
    
    const validatedData = {
      name: game.name?.trim() || "",
      link: game.link?.trim() || null,
      status: game.status || "planned"
    };

    if (!validatedData.name) {
      throw new Error("Game name is required");
    }
    
    if (!Constants.public.Enums.statusGame.includes(validatedData.status)) {
      throw new Error(`Invalid status. Must be one of: ${Constants.public.Enums.statusGame.join(", ")}`);
    }

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert(validatedData)
      .select("id, name, link, status")
      .single();

    if (error) {
      console.error("[Games Service] CREATE_ERROR:", {
        message: error.message,
        details: error.details
      });
      throw new Error(`Failed to create game: ${error.message}`);
    }

    return data;
  },

  updateStatus: async (id: number, status: GameStatus): Promise<Game> => {
    if (typeof window !== "undefined") {
      throw new Error("Status update is only allowed on the server");
    }

    if (!Constants.public.Enums.statusGame.includes(status)) {
      throw new Error(`Invalid status. Must be one of: ${Constants.public.Enums.statusGame.join(", ")}`);
    }

    const supabase = createSecretClient();
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update({ status })
      .eq("id", id)
      .select("id, name, link, status")
      .single();

    if (error) {
      console.error(`[Games Service] UPDATE_STATUS_ERROR (ID: ${id}):`, {
        message: error.message,
        status
      });
      throw new Error(`Failed to update game status: ${error.message}`);
    }

    return data;
  },

  delete: async (id: number): Promise<void> => {
    if (typeof window !== "undefined") {
      throw new Error("Game deletion is only allowed on the server");
    }

    const supabase = createSecretClient();
    const { error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq("id", id);

    if (error) {
      console.error(`[Games Service] DELETE_ERROR (ID: ${id}):`, {
        message: error.message
      });
      throw new Error(`Failed to delete game: ${error.message}`);
    }
  }
};

export default games;