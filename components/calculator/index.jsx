import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function Calculator(){

    const[value, setValue] = useState("");
    const[percentage, setPercentage] = useState("");
    const[total, setTotal] = useState(0);

    const handleValue = (text) => {
        setValue(text);
    }

    const handelPercentage = (text) => {
        setPercentage(text);
    }

    useEffect(() => {
        if(value && !percentage){
            setTotal(parseFloat(value));
        }else if(value && percentage){
            const total = parseFloat(value) + (parseFloat(value) * (parseFloat(percentage)/100));
            setTotal(total);
        }else{
            setTotal(0);
        }
    })

    return(

        <View style={styles.calculator}>

            <View style={styles.calculatorBx1}>
                <Text style={styles.calculatorBx1_title}>Enter the account value</Text>
                <TextInput 
                    style={styles.input}
                    value={value}
                    onChangeText={handleValue}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.calculatorBx1}>
                <Text style={styles.calculatorBx1_title}>Enter the tip percentage you want to leave</Text>
                <TextInput 
                    style={styles.input}
                    value={percentage}
                    onChangeText={handelPercentage}
                    keyboardType="numeric"
                />
            </View>

            <View>
                <Text>Total with tip percentage</Text>
                <Text style={styles.total}>${total.toFixed(2)}</Text>
            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    calculator: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
        gap: 22,
        paddingTop: 43,
        paddingBottom: 43,
        borderRadius: 12,
    },
    calculatorBx1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180
    },
    calculatorBx1_title:{
        textAlign: 'center'
    },
    input:{
        borderWidth: 1,
        borderColor: 'black',
        width: 150,
    },
    total:{
        textAlign: 'center'
    }
})

export default Calculator;