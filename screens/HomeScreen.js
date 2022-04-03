import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native'

import { Icon, Input, CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import NewButton from '../components/buttons'
import userIcon from '../assets/user.png'

const HomeScreen = () => {
    const [isSelected, setSelection] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.tittleContainer}>
                <Text style={styles.tittle}>INICIAR SESIÓN</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputCodigo}
                    placeholder='Código Universitario'>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={userIcon}>
                </Image>
            </View>
            <View style={styles.rememberUserContainer}>
                <Text style={styles.rememberUserText}>
                    Recordar usuario
                </Text>
            </View>
            <NewButton
                width_="60%"
                content_="SIGUIENTE"
                link_="ActivateAccountScreen1">
            </NewButton>
            <View style={styles.notAccountContainer}>
                <Text style={styles.notAccountText}>
                    ¿No tienes una cuenta?
                </Text>
                <Text style={styles.activateAccountText}>
                    Actívala aquí
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    tittleContainer: {
        paddingVertical: 120
    },
    tittle: {
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontSize: 25
    },
    inputContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        width: "80%",
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#B2B2B2',
    },
    inputCodigo: {
        fontSize: 20,
    },
    rememberUserContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "70%",
        paddingVertical: 50
    },
    rememberUserText: {
        fontSize: 15
    },
    notAccountContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
        paddingTop: 100
    },
    activateAccountText: {
        color: "#FF5C00"
    },
    icons: {
        height: 25,
        width: 20
    }
})

export default HomeScreen