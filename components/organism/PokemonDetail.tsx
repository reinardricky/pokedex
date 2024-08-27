import { capitalize } from "lodash";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SpriteCard from "../molecule/SpriteCard";

const PokemonDetail = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{capitalize(data.name)}</Text>
      </View>
      <Text style={styles.spriteTitle}>Sprite Gallery</Text>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <SpriteCard url={data.sprites.front_default} />
        <SpriteCard url={data.sprites.back_shiny} />
      </View>
      <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
        <SpriteCard url={data.sprites.back_default} />
        <SpriteCard url={data.sprites.front_shiny} />
      </View>
      <Text style={styles.abilityTitle}>Abilities</Text>
      {data.abilities.map((ability: any) => (
        <Text style={styles.ability} key={ability.ability.name}>
          {ability.ability.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  name: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 20,
  },
  spriteTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sprite: {
    width: 100,
    height: 100,
  },
  abilityTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  ability: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default PokemonDetail;
