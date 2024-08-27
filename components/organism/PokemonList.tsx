import { View, FlatList, StyleSheet, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { getPokemonByUrlApi } from "@/api/pokemonApi";
import PokemonCard from "../molecule/PokemonCard";

const PokemonList = ({ data }: { data: PokemonListType }) => {
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>(
    data.results
  );
  const [nextUrl, setNextUrl] = useState<string | null>(data.next);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState<{ name: string; url: string }[]>(
    []
  );

  useEffect(() => {
    if (!search) return;
    const filteredData = pokemons.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filteredData);
  }, [search]);

  const loadMore = async () => {
    if (load) return;
    if (!nextUrl) return;
    setLoad(true);
    console.log("load more");
    console.log(nextUrl);
    try {
      const response: PokemonListType = await getPokemonByUrlApi(nextUrl);
      setNextUrl(response.next);
      setPokemons((prevPokemons) => [...prevPokemons, ...response.results]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };
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
        data={search ? filterData : pokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item) => item.name}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
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

export default PokemonList;
