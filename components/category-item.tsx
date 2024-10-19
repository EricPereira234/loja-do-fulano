import { Pressable, StyleSheet, Image, View, Text } from "react-native";
import { router } from "expo-router";

//arquivo internos
import { Category } from "../types/category";



type Props = {
    data: Category;
}


export const CategoryItem = ({data}:Props)=>{
    const handleClick = ()=>{
        router.push(`/categories/${data.id}`)
    }
    return(
        <Pressable onPress={handleClick} style={styles.container} >
            <Image
                style={styles.img}
                source={{uri: data.cover}}
                resizeMode="cover"
            />
            <View style={styles.bg} ></View>
            <View style={styles.box} >
                <Text style={styles.title} >{data.title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#333',
        borderRadius: 10
    },
    img: {
        width: '100%',
        height: 150,
        borderRadius: 10
    },
    bg: {
        width: '100%',
        height: 150,
        marginTop: -150,
        borderRadius: 10,
        backgroundColor: '#000',
        opacity: 0.6
    },
    box: {
        width: '100%',
        height: 150,
        marginTop: -150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    title: {
        fontSize: 24,
        color: '#fff'
    }
})