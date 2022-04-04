import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native'
import { Icon, Input, CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import lookIcon from '../assets/look1.png'
import NewButton from '../components/buttons'

const ActivatedAccountScreen = () => {
    const [isSelected, setSelection] = useState(false)
    const navigation = useNavigation()

    const handleRecoverPassword = () => {
        navigation.navigate("RecoverPasswordScreen")
    }

    const handleHomePage = () => {
        navigation.navigate("HomeScreen")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>
                INICIAR SESIÓN
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputCodigo}
                    placeholder='Constraseña'>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={lookIcon}>
                </Image>
            </View>
            <View style={styles.viewPassContainer}>
                <CheckBox
                    center
                    checked={isSelected}
                    onPress={() => setSelection(!isSelected)}>
                </CheckBox>
                <Text style={styles.viewPassText}>
                    Ver contraseña
                </Text>
            </View>
            <NewButton
                width_={"60%"}
                content_={"INGRESAR"}
                link_={"GA"}
            />
            <Text
                style={styles.forgotPassText}
                onPress={handleRecoverPassword}>
                ¿Olvidaste tu contraseña?
            </Text>
            <Text>
                ¿No eres tú?
                <Text onPress={handleHomePage} style={{ fontWeight: "800" }}>
                    Ingresa con una cuenta diferente
                </Text>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    tittle: {
        paddingVertical: 120,
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
    icons: {
        height: 25,
        width: 20
    },
    viewPassContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "40%",
        paddingVertical: 50
    },
    viewPassText: {
        fontSize: 15
    },
    forgotPassText: {
        color: "#2C4BB8",
        paddingVertical: 40
    },
    differentAccountText: {
    }
})

export default ActivatedAccountScreen