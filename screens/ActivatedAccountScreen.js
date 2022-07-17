import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Modal } from 'react-native'
import { CheckBox } from 'react-native-elements'

import lookIcon from '../assets/look1.png'
import NewButton from '../components/buttons'

import { login } from '../api/students'

const ActivatedAccountScreen = ({ navigation, route }) => {

    const [student, setStudent] = useState({
        _id: '',
        university_code: '',
        password: '',
    })

    const [modalView, setModalView] = useState(false)

    const [isSelected, setSelection] = useState(false)

    const handleChange = (name, value) => setStudent({ ...student, [name]: value })

    const handleRecoverPassword = () => {
        navigation.navigate("RecoverPasswordScreen")
    }

    const handleHomePage = () => {
        navigation.navigate("HomeScreen")
    }

    const handleSubmit = async () => {
        const res = await login(student)
        // correct credentials
        if (res.ok) {
            navigation.navigate("LandingPageScreen", {
                student: res.student
            })            
        } else {
            setModalView(true)
        }
    }

    useEffect(() => {
        if (route.params && route.params.student) {
            student.university_code = route.params.student.university_code
        }
    }, [])

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent
                visible={modalView}
            >
                <View style={styles.containerModalBig}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textModal}>Contraseña incorrecta</Text>
                        <NewButton
                            content_="Aceptar"
                            width_="40%"
                            color_="#FFA41D"
                            onPress={() => {
                                setModalView(false)
                            }}
                        />
                    </View>
                </View>
            </Modal>            
            <Text style={styles.tittle}>
                INICIAR SESIÓN
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputCodigo}
                    secureTextEntry={!isSelected}
                    placeholder='Constraseña'
                    onChangeText={(value) => handleChange('password', value)}
                    value={student.password}>
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
                content_="INGRESAR"
                width_="60%"
                color_="#136CF1"
                colorText="#FFF"
                onPress={handleSubmit}
            />
            <Text
                style={styles.forgotPassText}
                onPress={handleRecoverPassword}>
                ¿Olvidaste tu contraseña?
            </Text>
            <Text>
                ¿No eres tú?
                <Text onPress={handleHomePage} style={{ fontWeight: "800" }}>
                    &nbsp;&nbsp;&nbsp;Ingresa con una cuenta diferente
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
    containerModalBig: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modalContainer: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 40
    },
    textModal: {
        color: "#136CF1",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20
    },
    differentAccountText: {
    }
})

export default ActivatedAccountScreen