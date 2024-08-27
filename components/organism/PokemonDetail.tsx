import React from "react";
import { View, Text, Image } from "react-native";

const PokemonDetail = ({ data }: any) => {
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
