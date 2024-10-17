import {StyleSheet, Text, View, FlatList} from "react-native";

//arquivos internos
import { getAllPoroducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";



export default function Screen(){

    const products = getAllPoroducts();

    return(
        <View style={styles.container} >
            <FlatList 
                data={products}
                renderItem={({item})=> <ProductItem data={item}/>}
                keyExtractor={item => item.id.toLocaleString()}
                style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20
    }
});