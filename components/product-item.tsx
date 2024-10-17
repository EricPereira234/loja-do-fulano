import { Text, Pressable, StyleSheet, Image, View } from "react-native";
import { Link } from "expo-router";

//arquivos internos
import { Product } from "../types/product";


type Props = {
    data: Product;
}

export const ProductItem = ({ data }: Props) => {
    return (
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.component} >
                <Image
                    style={styles.img}
                    source={{ uri: data.image }}
                    resizeMode="cover"
                />
                <View style={styles.info} >
                    <Text>{data.title}</Text>
                    <Text>{data.description}</Text>
                    <Text>{data.price.toFixed(2)}</Text>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        marginBottom: 20
    },
    img: {
        width: 100,
        height: 100,
        backgroundColor: '#ccc'
    },
    info: {
        flex: 1
    }
})