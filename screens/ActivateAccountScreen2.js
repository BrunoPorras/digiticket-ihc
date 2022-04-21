import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image, Modal } from 'react-native'
import { ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import NewButton from '../components/buttons'

import mailIcon from '../assets/mail.png'
import phoneIcon from '../assets/phone.png'

import { updateStudent } from '../api/students'

const log = () => console.log('this is an example method');

const ActivateAccountScreen2 = ({ navigation, route }) => {

    const [viewModal, setViewModal] = useState(false)

    const [response, setResponse] = useState({})

    const handleModal = () => {
        setViewModal(false)
        console.log("Logged in")
        navigation.navigate("LandingPageScreen", {
            student: response.student
        })
    }

    const [student, setStudent] = useState({
        password: '',
        personal_mail: '',
        personal_phone: '',
        preference_campus: '',
        activated_account: false
    })

    const sedes = [{
        name: "Cangallo"
    }, {
        name: "Ciudad universitaria"
    }]

    const [sede, setSede] = useState("Sede de preferencia")

    const [expanded, setExpanded] = useState(false)

    const handleChange = (name, value) => setStudent({ ...student, [name]: value })

    const handleSubmit = async () => {
        student.preference_campus = sede
        student.activated_account = true
        const res = await updateStudent(route.params.student._id,student)
        if (res.ok) {
            setResponse(res)
            setViewModal(true)
        }
    }

    useEffect(() => {
        if (route.params && route.params.student) {
            student.password = route.params.student.newPassword1
        }
    }, [])

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent
                visible={viewModal}
            >
                <View style={styles.containerModalBig}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textModal}>Cuenta activada exitosamente</Text>
                        <NewButton
                            content_="Aceptar"
                            width_="40%"
                            color_="#FFA41D"
                            onPress={() => {
                                handleModal()
                            }}
                        />
                    </View>
                </View>
            </Modal>
            <Text style={styles.tittle}>
                Registre sus datos
            </Text>
            <View style={styles.inputTextContainer}>
                <TextInput
                    placeholder='Correo personal'
                    onChangeText={(value) => handleChange('personal_mail', value)}
                    value={student.personal_mail}>
                </TextInput>
                <Image
                    style={styles.icons_mail}
                    source={mailIcon}>
                </Image>
            </View>
            <View style={styles.inputTextContainer}>
                <TextInput
                    placeholder='Teléfono'
                    onChangeText={(value) => handleChange('personal_phone', value)}
                    value={student.personal_phone}>                    
                </TextInput>
                <Image
                    style={styles.icons_phone}
                    source={phoneIcon}>
                </Image>
            </View>
            <View style={styles.inputDropContainer}>
                <ListItem.Accordion
                    containerStyle={styles.listItem}
                    content={
                        <>
                            <ListItem.Content style={styles.listItemTittle}>
                                <ListItem.Title style={styles.listItemTittle}>
                                    {sede}
                                </ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}>
                    {sedes.map((sede) => (
                        <ListItem key={sede.name} onPress={(e) => setSede(sede.name)}
                            containerStyle={styles.listItems}>
                            <ListItem.Content>
                                <ListItem.Title>{sede.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </ListItem.Accordion>
            </View>
            <NewButton
                content_="GUARDAR DATOS"
                width_="100%"
                color_="#136CF1"
                colorText="#FFF"
                link_="ActivatedAccountScreen"
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
    icons_mail: {
        width: 19,
        height: 15
    },
    icons_phone: {
        width: 15,
        height: 25
    },
    inputDropContainer: {
        marginBottom: 25
    },
    listItem: {
        backgroundColor: "#F2F2F2",
        borderBottomColor: "#B2B2B2",
        borderBottomWidth: 1
    },
    listItemTittle: {
        color: "#B2B2B2"
    },
    listItems: {
        backgroundColor: "#EEEEEE",
        borderBottomColor: "#B2B2B2",
        borderBottomWidth: .5
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
        marginHorizontal: 40,
        marginBottom: 20
    }
});

export default ActivateAccountScreen2