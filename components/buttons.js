import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const NewButton = (props) => {

    const { width_, content_, onPress, color_, extraStyle_, colorText} = props;


    return (
        <TouchableOpacity
            style = {{...styles.button, width: width_, backgroundColor: color_, ...extraStyle_}}
            onPress = {onPress}
        >
            <Text style={{...styles.buttonText, color: colorText}}>
                {content_}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        paddingVertical: 10,
        borderRadius: 15
    },
    buttonText: {
        alignSelf: "center",
        textAlign: "center",
        fontSize: 15
    }
});

export default NewButton