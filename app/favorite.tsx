import PokemonFavorite from "@/components/organism/PokemonFavorite";
import { useFavorite } from "@/hooks/useFavorite";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

const PokemonFavoritePage = () => {
  const { data, isLoading, error, refetch } = useFavorite();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return <PokemonFavorite data={data} />;
};

export default PokemonFavoritePage;
