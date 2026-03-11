import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "grey",
      }}
      >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="glossary" options={{ title: "Glossary" }} />
    </Stack>
  );
}