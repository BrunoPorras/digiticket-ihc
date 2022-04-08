import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import NewButton from '../components/buttons'
import userIcon from '../assets/user.png'
import look1Icon from '../assets/look1.png'
import look2Icon from '../assets/look2.png'
import { CheckBox } from 'react-native-elements'

import { login } from '../api/students'

const ActivateAccountScreen1 = ({ navigation, route }) => {

    const [student, setStudent] = useState({
        _id: '',
        university_code: '',
        password: '',
        newPassword1: '',
        newPassword2: ''
    })

    const [isSelected, setSelection] = useState(false)

    const handleChange = (name, value) => setStudent({ ...student, [name]: value })

    const handleSubmit = async () => {
        const res = await login(student)
        // correct credentials
        if (res.ok) {
            // same passwords
            if (student.newPassword1 == student.newPassword2) {
                student._id = res.student._id
                navigation.navigate("ActivateAccountScreen2", {
                    student: student
                })
            } else {
                //<MODAL> Las contraseñas no coinciden
                console.log("Las contraseñas no coinciden")
            }
        } else {
            if (!res.correctPassword) // <MODAL> Contraseña incorrecta
                console.log("Contraseña incorrecta")
        }
    }

    useEffect(() => {
        if (route.params && route.params.student) {
            student.university_code = route.params.student.university_code
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>
                Cambie su contraseña para una mayor seguridad
            </Text>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Código Universitario'
                    value={route.params.student.university_code}
                >
                </TextInput>
                <Image
                    style={styles.icons}
                    source={userIcon}>
                </Image>
            </View>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Contraseña de correo institucional'
                    onChangeText={(value) => handleChange('password', value)}
                    value={student.password}>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={look1Icon}>
                </Image>
            </View>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Introducir nueva contraseña'
                    onChangeText={(value) => handleChange('newPassword1', value)}
                    value={student.newPassword1}>
                </TextInput>
                <Image
                    style={styles.icons}
                    source={look2Icon}>
                </Image>
            </View>
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Confirmar nueva contraseña'
                    onChangeText={(value) => handleChange('newPassword2', value)}
                    value={student.newPassword2}>
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
                onPress={handleSubmit}
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