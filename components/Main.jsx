import React from "react";
import { View, StyleSheet } from "react-native";

import Calculator from "./calculator";

function Main(){
    return(
        <View style={styles.containerCalculator}>
            <Calculator />
        </View>
    );
}

const styles = StyleSheet.create({
    containerCalculator: {
        alignItems: 'center'
    }
})

export default Main;