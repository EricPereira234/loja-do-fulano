import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack>
            <Stack.Screen name="List" options={{title: 'Categorias'}} />
        </Stack>
    )
}