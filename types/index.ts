interface PokemonDetailType {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: [{ type: { name: string } }];
  abilities: [{ ability: { name: string } }];
  stats: [{ base_stat: number; stat: { name: string } }];
  moves: [{ move: { name: string } }];
}

interface PokemonListType {
  count: number;
  next: string | null;
  previous: string | null;
  results: [{ name: string; url: string }];
}

