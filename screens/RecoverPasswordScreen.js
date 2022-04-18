import React, { useState } from 'react'
import { View, Text, Button, CheckBox, StyleSheet, TextInput, Image } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import keyIcon from '../assets/key.png'
import sendIcon from '../assets/send.png'
import NewButton from '../components/buttons'

const RecoverPasswordScreen = () => {

    const navigation = useNavigation()
    const handleValidateCode = () => {
        navigation.navigate('ChangePasswordScreen')
    }

    const user = {
        correo: "catboy@choccito.cpp"
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>
                RECUPERACIÓN DE LA CONTRASEÑA
            </Text>
            <Text style={styles.textPass}>
                Se envió un correo electrónico con un código
                de verificación a {user.correo}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputCodigo}
                    placeholder='Ingresar el código'>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={keyIcon}>
                </Image>
            </View>
            <NewButton
                content_="SIGUIENTE"
                width_="70%"
                color_="#136CF1"
                onPress={handleValidateCode}
            />
            <View style={styles.sendMailContainer}>
                <Image
                    style={styles.icons}
                    source={sendIcon}>
                </Image>
                <Text>
                    Volver a enviar correo electrónico
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    tittle: {
        paddingVertical: 100,
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontSize: 20
    },
    textPass: {
        width: "80%",
        fontSize: 18
    },
    inputContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        width: "80%",
        paddingHorizontal: 15,
        marginVertical: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#B2B2B2',
    },
    inputCodigo: {
        fontSize: 20,
    },
    icons: {
        width: 15,
        height: 15        
    },
    sendMailContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "60%",
        paddingTop: 50
    }
});

export default RecoverPasswordScreen