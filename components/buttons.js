import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const NewButton = (props) => {

    const { width_, content_, link_ } = props;

    const navigation = useNavigation()
    const handleSubmit = () => {
        navigation.navigate(link_)
    }

    return (
        <TouchableOpacity
            style = {{...styles.button, width: width_}}
            onPress = {handleSubmit}
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
        backgroundColor: "#136CF1",
        width: "60%",
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