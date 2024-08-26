import { usePokemonList } from "@/hooks/usePokemonList";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const PokemonList = () => {
  const { data, isLoading, error } = usePokemonList();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const handlePress = (name: string) => {
    navigation.navigate("Pokemon Detail", { name });
    console.log(name);
  };
  return (
    <FlatList
      data={data.results}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.name)}>
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
