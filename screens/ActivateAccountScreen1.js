import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import NewButton from '../components/buttons'
import userIcon from '../assets/user.png'
import look1Icon from '../assets/look1.png'
import look2Icon from '../assets/look2.png'
import { CheckBox } from 'react-native-elements'

const ActivateAccountScreen1 = () => {

    const [isSelected, setSelection] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>
                Cambie su contraseña para una mayor seguridad
            </Text>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Código Universitario'>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={userIcon}>
                </Image>
            </View>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Contraseña de correo institucional'>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={look1Icon}>
                </Image>
            </View>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Introducir nueva contraseña'>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={look2Icon}>
                </Image>
            </View>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Confirmar nueva contraseña'>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={look2Icon}>
                </Image>
            </View>
            <Text style={styles.simpleText}>
                Utiliza al menos 8 caracteres
            </Text>
            <View style={styles.centerContainer}>
                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        center
                        checked={isSelected}
                        onPress={() => setSelection(!isSelected)}>
                    </CheckBox>
                    <Text>Ver contraseña</Text>
                </View>
            </View>
            <NewButton
                content_="SIGUIENTE"
                width_="100%"
                link_="ActivateAccountScreen2"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width: "90%"
    },
    tittle: {
        paddingVertical: 10,
        fontSize: 15
    },
    inputTextContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        paddingHorizontal: 15,
        height: 40,
        borderColor: "#B2B2B2",
        borderWidth: 1,
        borderRadius: 10
    },
    inputText: {
        fontSize: 15,
    },
    simpleText: {
        fontSize: 18,
        color: "#B2B2B2"
    },
    centerContainer: {
        alignItems: "center",
        width: "100%"
    },
    checkBoxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "40%",
        marginVertical: 40,
        marginHorizontal: "auto"
    },
    icons: {
        width: 20,
        height: 25
    }
});

export default ActivateAccountScreen1