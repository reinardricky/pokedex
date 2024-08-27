import axios from "axios";
import { API_HOST } from "@/constants";

export async function getPokemonsApi(endpointUrl?: string) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await axios.get(endpointUrl || url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonByUrlApi(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(id: string) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
