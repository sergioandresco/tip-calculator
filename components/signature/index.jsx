import { View, Text, Image, StyleSheet } from "react-native";
import {  useFonts, Amaranth_700Bold } from '@expo-google-fonts/amaranth';

function Signature(){

    const logoSerch = require('../../assets/images/serchtec-logo.png');

    let[loadfonts] = useFonts({
        Amaranth_700Bold
    })

    return(

        <View style={style.containerSignature}>
            <Text style={style.textSignature}>Developed by Sergio Cobos</Text>
            <Image style={style.imgSignature} source={logoSerch} />
        </View>

    )
}

const style = StyleSheet.create({
    containerSignature:{
        alignItems: 'center',
        position: 'absolute',
        gap: 4,
        bottom: '18%',
        left: '50%',
        transform: [{ translateX: -80 }],
    },
    textSignature: {
        fontFamily: 'Amaranth_700Bold',
        fontSize: 15
    },
    imgSignature: {
        height: 60,
        width: 60
    }
})

export default Signature;