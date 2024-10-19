import {StyleSheet, Text, View, FlatList} from "react-native";

//arquivos internos
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";



export default function Screen(){

    const products = getAllCategories();

    return(
        <View style={styles.container} >
            <FlatList 
                data={products}
                renderItem={({item})=> <CategoryItem data={item} />}
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