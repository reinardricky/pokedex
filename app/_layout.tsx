import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Pokedex",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => router.push({ pathname: "/favorite" })}
              >
                <FontAwesome
                  name="heart-o"
                  size={24}
                  color="black"
                  style={{
                    marginRight: 20,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="favorite"
          options={{
            headerTitle: "Pokedex",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity onPress={() => router.push({ pathname: "/" })}>
                <FontAwesome
                  name="heart"
                  size={24}
                  color="red"
                  style={{
                    marginRight: 20,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="[pokemon]/index"
          options={{
            headerTitle: "Pokemon Detail",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
