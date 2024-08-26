import { usePokemon } from "@/hooks/usePokemon";
import React from "react";
import { View, Text, Image } from "react-native";

const PokemonDetail = ({ route }: any) => {
  const { name } = route.params;
  const { data, isLoading, error } = usePokemon(name);

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
    <View>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{data.name}</Text>
    </View>
  );
};

export default PokemonDetail;
