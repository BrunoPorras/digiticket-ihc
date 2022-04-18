import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Modal, TouchableOpacity, BackHandler } from 'react-native'
import NewButton from '../components/buttons'
import userIcon from '../assets/user.png'
import look1Icon from '../assets/look1.png'
import look2Icon from '../assets/look2.png'
import { CheckBox, Input } from 'react-native-elements'

import { login } from '../api/students'

const ActivateAccountScreen1 = ({ navigation, route }) => {

    const [modalView, setModalView] = useState(false)
    
    const handleGoBack = () => {
        navigation.navigate("HomeScreen")
    }
    
    const handleContinue = () => {
        setModalView(false)
    }

    const backHandlerF = () => {
        setModalView(true)
        return true
    }

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
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backHandlerF)

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
                        <Text style={styles.textModal}>
                            Cancelar registro
                        </Text>
                        <Text style={styles.textModal}>
                            ¿Desea salir del proceso de registro?
                        </Text>
                        <View style={styles.modalOptionsContainer}>
                            <TouchableOpacity onPress={handleContinue}>
                                <Text style={styles.modalOptionNo}>NO, REGRESAR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleGoBack}>
                                <Text style={styles.modalOptionYes}>SÍ, SALIR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
                    secureTextEntry={!isSelected}
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
                    secureTextEntry={!isSelected}
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
                    secureTextEntry={!isSelected}
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
                color_="#136CF1"
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
        padding: 20
    },
    textModal: {
        color: "#000",
        fontSize: 18,
        marginBottom: 20
    },
    modalOptionsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    modalOptionNo: {
        color: "#136CF1",
        fontWeight: "bold",
        marginVertical: 15
    },
    modalOptionYes: {
        color: "#FF0000",
        fontWeight: "bold",
        marginVertical: 15
    }
});

export default ActivateAccountScreen1