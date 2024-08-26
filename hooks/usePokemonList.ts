import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/pokemonApi";

export const usePokemonList = () => {
  return useQuery<PokemonListType>({
    queryKey: ["pokemon"],
    queryFn: getPokemonList,
  });
};
