import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image, Modal } from 'react-native'

const IconNav = (props) => {

    const { Icon, Name, Focus } = props

    return (
        <View style={styles.btnContainer}>
            <Image
                source={Icon}
                resizeMode="contain"
                style={{
                    tintColor: Focus ? "#137CF1" : "#136CF1",
                    ...styles.icon
                }}
            />
            <Text
                style={{
                    color: Focus ? "#137CF1" : "#474747",
                    ...styles.text
                }}>
                {Name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: "center",
        justifyContent: "center",
        top: 5
    },
    icon: {
        width: 25,
        height: 25
    },
    text: {
        fontSize: 12
    }
})

export default IconNav
