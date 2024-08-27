import { capitalize } from "lodash";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import SpriteCard from "../molecule/SpriteCard";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PokemonDetail = ({ data }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const favorites = await AsyncStorage.getItem("favorites");
        if (favorites) {
          const favoritesArray = JSON.parse(favorites);
          const isFavorite = favoritesArray.some(
            (item: any) => item.id === data.id
          );
          setIsFavorite(isFavorite);
        }
      } catch (error) {
        console.error("Error checking favorite", error);
      }
    };
    checkFavorite();
  }, []);

  const handleFavorite = async () => {
    if (!isFavorite) {
      try {
        const favorites = await AsyncStorage.getItem("favorites");
        let favoritesArray = favorites ? JSON.parse(favorites) : [];
        favoritesArray.push(data);
        await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
        console.log("Saved to local storage");
        setIsFavorite(true);
      } catch (error) {
        console.error("Error saving to local storage", error);
      }
    } else {
      try {
        const favorites = await AsyncStorage.getItem("favorites");
        let favoritesArray = favorites ? JSON.parse(favorites) : [];
        const newFavoritesArray = favoritesArray.filter(
          (item: any) => item.id !== data.id
        );
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify(newFavoritesArray)
        );
        setIsFavorite(false);
        console.log("Removed from local storage");
      } catch (error) {
        console.error("Error removing from local storage", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        }}
        style={styles.image}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.name}>{capitalize(data.name)}</Text>

        <TouchableOpacity onPress={handleFavorite}>
          {isFavorite ? (
            <FontAwesome name="heart" size={24} color="red" />
          ) : (
            <FontAwesome name="heart-o" size={24} color="black" />
          )}
        </TouchableOpacity>
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
