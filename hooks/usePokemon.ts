import { getPokemonDetailsApi } from "@/api/pokemonApi";
import { useQuery, UseQueryResult } from "@tanstack/react-query";


export const usePokemon = (name: string): UseQueryResult<PokemonDetailType> => {
  return useQuery<PokemonDetailType>({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemonDetailsApi(name),
  });
};
