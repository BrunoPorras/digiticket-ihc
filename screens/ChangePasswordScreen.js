import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CheckBox } from 'react-native-elements'
import keyIcon from '../assets/look2.png'
import NewButton from '../components/buttons'

const ChangePasswordScreen = () => {

    const [isSelected, setSelection] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>
                CAMBIAR CONTRASEÑA
            </Text>
            <Text style={styles.textPass}>
                Crea una contraseña nueva y segura
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputPass}
                    placeholder='Contraseña nueva'>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={keyIcon}>
                </Image>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputPass}
                    placeholder='Confirmación'>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={keyIcon}>
                </Image>
            </View>
            <Text style={styles.textAlert}>
                Utiliza al menos 8 caracteres.
            </Text>
            <View style={styles.viewPassContainer}>
                <CheckBox
                    center
                    checked={isSelected}
                    onPress={() => setSelection(!isSelected)}>
                </CheckBox>
                <Text>
                    Ver contraseña
                </Text>
            </View>
            <NewButton
                width_={"70%"}
                content_={"GUARDAR CONTRASEÑA"}
                link_={"HomeScreen"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    tittle: {
        paddingTop: 100,
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontSize: 20
    },
    textPass: {
        paddingVertical: 40,
        width: "80%",
        fontSize: 16,
        textAlign: "center"
    },
    inputContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        width: "80%",
        paddingHorizontal: 15,
        marginVertical: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#B2B2B2',
    },
    inputPass: {
        fontSize: 18,
    },
    icons: {
        width: 20,
        height: 20
    },
    textAlert: {
        fontSize: 17,
        width: "80%",
        color: "#B2B2B2"
    },
    viewPassContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "40%",
        paddingVertical: 40
    }
})

export default ChangePasswordScreen