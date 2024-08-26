import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonList from "@/components/PokemonList";
import PokemonDetail from "@/components/PokemonDetail";

const queryClient = new QueryClient();
const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName="PokemonList">
          <Stack.Screen name="Pokemon List" component={PokemonList} />
          <Stack.Screen name="Pokemon Detail" component={PokemonDetail} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
