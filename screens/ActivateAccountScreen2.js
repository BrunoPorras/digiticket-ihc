import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import NewButton from '../components/buttons'

import mailIcon from '../assets/mail.png'
import phoneIcon from '../assets/phone.png'

const ActivateAccountScreen2 = () => {
    const navigation = useNavigation()
    const handleNext = () => {
        navigation.navigate("ActivatedAccountScreen")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>
                Registre sus datos
            </Text>
            <View style={styles.inputTextContainer}>
                <TextInput
                    placeholder='Correo personal'>
                </TextInput>
                <Image
                    style={styles.icons_mail}
                    source={mailIcon}>
                </Image>
            </View>
            <View style={styles.inputTextContainer}>
                <TextInput
                    placeholder='Teléfono'>
                </TextInput>
                <Image
                    style={styles.icons_phone}
                    source={phoneIcon}>
                </Image>
            </View>
            <View style={styles.inputDropContainer}>
                <TextInput
                    placeholder='Sede preferencia'>
                </TextInput>
            </View>
            <NewButton
                width_="100%"
                content_="GUARDAR DATOS"
                link_="ActivatedAccountScreen">
            </NewButton>
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
    icons_mail: {
        width: 19,
        height: 15
    },
    icons_phone: {
        width: 15,
        height: 25
    },
    listContainer: {
        
        borderBottomColor: "#B2B2B2",

    }
});

export default ActivateAccountScreen2