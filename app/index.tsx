import PokemonList from "@/components/organism/PokemonList";
import { usePokemonList } from "@/hooks/usePokemonList";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

const PokemonListPage = () => {
  const { data, isLoading, error, refetch } = usePokemonList();

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

  return <PokemonList data={data} />;
};

export default PokemonListPage;
