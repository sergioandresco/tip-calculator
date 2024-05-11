import React, { useEffect, useRef } from "react";
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Animated, Easing } from "react-native";
import {  useFonts, BungeeShade_400Regular } from '@expo-google-fonts/bungee-shade';

function Header(){

    let[fontsLoaded] = useFonts({
        BungeeShade_400Regular
    });

    const calculadoraImg = require('../../assets/images/calculator.png');

    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                spinValue,
                {
                    toValue: 1,
                    duration: 4000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        ).start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return(
        <View style={styles.header}>

            <View>
                <Text style={styles.title}>TIPS CALCULATOR</Text>
            </View>

            <View>
            <Animated.Image
                    style={[styles.imgCalculator, { transform: [{ rotate: spin }] }]}
                    source={calculadoraImg}
            />
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight
    },
    title: {
        fontFamily: 'BungeeShade_400Regular',
        margin: 0,
        fontSize:40
    },
    imgCalculator: {
        height: 80,
        width: 80
    }
})


export default Header;