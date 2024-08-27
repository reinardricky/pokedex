import { getPokemonsApi } from "@/api/pokemonApi";
import { useQuery } from "@tanstack/react-query";

export const usePokemonList = () => {
  return useQuery<PokemonListType>({
    queryKey: ["pokemon list"],
    queryFn: () => getPokemonsApi(),
  });
};
