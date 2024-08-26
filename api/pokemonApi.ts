import axios from 'axios';

export const getPokemonList = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return response.data;
};

export const getPokemonDetail = async (name: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
};
