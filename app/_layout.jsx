//This _layout.jsx is the file that helps stack each page on each other and contains styling for the header in the app.

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