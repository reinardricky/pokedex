interface PokemonDetailType {
  name: string;
  url: string;
  id: number;
}

interface PokemonListType {
  results: PokemonDetailType[];
}

interface RootStackParamList {
  "Pokemon List": undefined;
  "Pokemon Detail": { name: string };
}
