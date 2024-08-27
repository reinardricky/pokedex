import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { capitalize } from "lodash";

const PokemonCard = ({ pokemon }) => {
  const handlePress = (id: string) => {
    router.push({ pathname: "/[pokemon]", params: { pokemon: id } });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        handlePress(pokemon.id ? pokemon.id : pokemon.url.split("/")[6])
      }
    >
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  pokemon.id ? pokemon.id : pokemon.url.split("/")[6]
                }.png`,
              }}
              style={styles.image}
            />
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 220,
  },
  spacing: {
    flex: 1,
    padding: 10,
  },
  bgStyles: {
    borderColor: "#A8A8A8",
    borderWidth: 1,
    backgroundColor: "#F3F4F6",
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: "#1D1D1D",
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 10,
    alignSelf: "center",
  },
  image: {
    width: 140,
    height: 140,
    alignSelf: "center",
  },
});

export default PokemonCard;
