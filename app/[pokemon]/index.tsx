import PokemonDetail from "@/components/organism/PokemonDetail";
import { usePokemon } from "@/hooks/usePokemon";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const PokemonDetailPage = () => {
  const { pokemon: id } = useLocalSearchParams<{ pokemon: string }>();
  const { data, isLoading, error } = usePokemon(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return <PokemonDetail data={data} />;
};

export default PokemonDetailPage;
