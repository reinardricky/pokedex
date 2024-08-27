import PokemonList from "@/components/organism/PokemonList";
import { usePokemonList } from "@/hooks/usePokemonList";

const PokemonListPage = () => {
  const { data, isLoading, error } = usePokemonList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
      <PokemonList data={data} />
  );
};

export default PokemonListPage;
