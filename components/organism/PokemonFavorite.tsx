import { View, FlatList, StyleSheet, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { getPokemonByUrlApi } from "@/api/pokemonApi";
import PokemonCard from "../molecule/PokemonCard";

const PokemonFavorite = ({
  data,
}: {
  data: { name: string; id: string }[];
}) => {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState<{ name: string; id: string }[]>(
    []
  );

  useEffect(() => {
    if (!search) return;
    const filteredData = data.filter((item: { name: string }) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filteredData);
  }, [search]);

  return (
    <>
      <View style={styles.search}>
        <TextInput
          style={styles.textInputStyle}
          value={search}
          placeholder="Search"
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <FlatList
        data={search ? filterData : data}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
        numColumns={2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  search: {
    padding: 10,
    backgroundColor: "#F3F4F6",
  },
  textInputStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default PokemonFavorite;
