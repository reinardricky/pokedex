import PokemonList from "@/components/organism/PokemonList";
import { usePokemonList } from "@/hooks/usePokemonList";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Text } from "react-native";

const PokemonListPage = () => {
  const { data, isLoading, error, refetch } = usePokemonList();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data) {
    return <Text>No data available</Text>;
  }

  return <PokemonList data={data} />;
};

export default PokemonListPage;
