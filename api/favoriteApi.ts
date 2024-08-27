import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavoriteListApi() {
  try {
    const favorites = await AsyncStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    throw error;
  }
}
