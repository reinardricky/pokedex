import PokemonFavorite from "@/components/organism/PokemonFavorite";
import { useFavorite } from "@/hooks/useFavorite";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Text } from "react-native";

const PokemonFavoritePage = () => {
  const { data, isLoading, error, refetch } = useFavorite();

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

  return <PokemonFavorite data={data} />;
};

export default PokemonFavoritePage;
