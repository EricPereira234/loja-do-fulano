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
                    <Text style={styles.title} >{data.title}</Text>
                    <Text style={styles.description} >{data.description}</Text>
                    <Text style={styles.price} >{data.price.toFixed(2)}</Text>
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
        backgroundColor: '#ccc',
        marginRight: 20
    },
    info: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 13,
        color: "#555",
        marginBottom: 10
    },
    price: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'right'
    }
})