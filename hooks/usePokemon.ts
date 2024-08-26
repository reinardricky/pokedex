import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getPokemonDetail } from "../api/pokemonApi";

export const usePokemon = (name: string): UseQueryResult<PokemonDetailType> => {
  return useQuery<PokemonDetailType>({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemonDetail(name),
  });
};
