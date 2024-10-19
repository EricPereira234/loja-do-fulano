import { router, Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text } from "react-native";

//arquivos internos
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";


export default function Screen() {
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if (!product) return router.back();

    const handleBuyButton = () => {
        alert('Comprou!!')
    }

    return (
        <SafeAreaView style={styles.container} >
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area} >
                <Image
                    style={styles.img}
                    source={{ uri: product.image }}
                    resizeMode="cover"
                />
                <Text style={styles.title} >{product.title}</Text>
                <Text style={styles.description} >{product.description}</Text>
                <Text style={styles.price}>R$= {product.price.toFixed(2)}</Text>
            </ScrollView>
            <View style={styles.buttonArea} >
                <Button
                    title="compar agora"
                    onPress={handleBuyButton}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    area: {
        flex: 1,
        padding: 10
    },
    buttonArea: {
        padding: 10
    },
    img: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 20
    },
    description: {
        fontSize: 15,
        color: '#555',
        marginBottom: 20
    },
    price: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'brown'
    }
})