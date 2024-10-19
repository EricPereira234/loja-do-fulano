import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: 'blue' },
            headerTintColor: '#fff'
        }} >
            <Stack.Screen name="index" options={{ title: 'inicio' }} />
            <Stack.Screen name="(tabs)" options={{title: 'Produtos'}} />
            <Stack.Screen name="product/[id]"  options={{headerShown: true}} />
        </Stack>
    )
}