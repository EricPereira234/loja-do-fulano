import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";


export default function TabLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveBackgroundColor: 'blue'}} >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28}
                        name="home"
                        color={color}
                    />
                }}
            />

            <Tabs.Screen
                name="categories"
                options={{
                    title: 'Categorias',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28}
                        name="archive"
                        color={color}
                    />
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: 'sobre',
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28}
                        name="user"
                        color={color}
                    />
                }}
            />
        </Tabs>
    )
}