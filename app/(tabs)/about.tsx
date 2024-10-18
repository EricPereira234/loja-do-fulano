import { Text, Image, SafeAreaView, StyleSheet } from "react-native";



export default function Screen (){
    return(
        <SafeAreaView style={styles.container} >

            <Image source={require('../../assets/eric.jpeg')} resizeMode="cover" style={styles.img} />

            <Text style={styles.desciption} >Olá sou Eric Pereira e estou aprendendo na B7web :D</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc'
    },
    img: {
        width: 210,
        height: 200,
        marginBottom: 20,
        borderRadius: 100,
    },
    desciption: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#555'
    }

})