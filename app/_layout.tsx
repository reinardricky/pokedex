import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

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
          }}
        />
        <Stack.Screen
          name="[pokemon]/index"
          options={{
            headerTitle: "Pokemon Detail",
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
