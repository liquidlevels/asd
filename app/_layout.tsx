import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="foodPage" />
      <Stack.Screen name="recipePage" />
    </Stack>
  );
}
