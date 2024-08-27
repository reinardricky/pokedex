import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const PokemonList = ({ data }: { data: PokemonListType }) => {
  const handlePress = (id: string) => {
    router.push({ pathname: "/[pokemon]", params: { pokemon: id } });
    console.log(name);
  };
  return (
    <FlatList
      data={data.results}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.url.split("/")[6])}>
          <View>
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  item.url.split("/")[6]
                }.png`,
              }}
              style={{ width: 50, height: 50 }}
            />
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default PokemonList;
