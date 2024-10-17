import {StyleSheet, Text, View, SafeAreaView, Image} from "react-native";
import { Link, router } from "expo-router";

// arquivos internos
import { Button } from "../components/button";



export default function Screen(){
    function handleStart(){
        router.replace('/home')
    }

    return(
        <SafeAreaView style={styles.container} >
           <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="cover" />
           <Text style={styles.title} >Loja do Fulano</Text>
           <Text style={styles.subTitle} >Aqui você encontra tudo o que quizer</Text>
           <Button title="Começar a compra" onPress={handleStart} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 10
    }
});