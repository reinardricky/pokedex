import PokemonDetail from "@/components/organism/PokemonDetail";
import { usePokemon } from "@/hooks/usePokemon";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const PokemonDetailPage = () => {
  const { pokemon: id } = useLocalSearchParams<{ pokemon: string }>();
  const { data, isLoading, error } = usePokemon(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data) {
    return <Text>No data available</Text>;
  }

  return <PokemonDetail data={data} />;
};

export default PokemonDetailPage;
