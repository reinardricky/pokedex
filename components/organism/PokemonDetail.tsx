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
      <View>
        <Text>{data.name}</Text>
      </View>
      <Text>Sprite Gallery</Text>
      <Image
        source={{
          uri: data.sprites.front_default,
        }}
        style={{ width: 100, height: 100 }}
      />
      <Image
        source={{
          uri: data.sprites.back_default,
        }}
        style={{ width: 100, height: 100 }}
      />
      <Image
        source={{
          uri: data.sprites.front_shiny,
        }}
        style={{ width: 100, height: 100 }}
      />
      <Image
        source={{
          uri: data.sprites.back_shiny,
        }}
        style={{ width: 100, height: 100 }}
      />
      <Text>Abilities</Text>
      {data.abilities.map((ability: any) => (
        <Text key={ability.ability.name}>{ability.ability.name}</Text>
      ))}
    </View>
  );
};

export default PokemonDetail;
