import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: 'blue' },
            headerTintColor: '#fff'
        }} >
            <Stack.Screen name="index" options={{ title: 'inicio' }} />
            <Stack.Screen name="(tabs)"  />
        </Stack>
    )
}