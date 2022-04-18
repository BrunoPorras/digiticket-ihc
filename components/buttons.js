import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const NewButton = (props) => {

    const { width_, content_, onPress, color_} = props;


    return (
        <TouchableOpacity
            style = {{...styles.button, width: width_, backgroundColor: color_}}
            onPress = {onPress}
        >
            <Text style={styles.buttonText}>
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
        color: "#FFF",
        fontSize: 15
    }
});

export default NewButton