import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native'
import NewButton from '../components/buttons';
import { getStudent } from '../api/students'
import { reduceRations } from '../api/turns'
import { createTicket } from '../api/tickets'

import soupIcon from '../assets/icons-food/soup.png'
import dishIcon from '../assets/icons-food/dish.png'
import appleeIcon from '../assets/icons-food/apple.png'
import drinkIcon from '../assets/icons-food/drink.png'

const Reserve04 = ({ navigation, route }) => {

    const [viewModal, setViewModal] = useState(false)
    const [viewModal1, setViewModal1] = useState(false)

    const closeModal = () => {
        setViewModal(false)
    }

    const openModal = () => {
        setViewModal(true)
        return true
    }

    const closeModal1 = () => {
        setViewModal1(false)
    }

    const openModal1 = () => {
        setViewModal1(true)
        return true
    }

    const handleSubmit = async () => {
        const ticket = {
            student_id: route.params.student._id,
            turn_id: route.params.turn._id,
            ticket_number: '',
            foods: route.params.foods,
            campus: route.params.sede,
            level: route.params.level,
        }
        const resTurn = await reduceRations(route.params.turn._id, route.params.foods)
        if (resTurn.ok) {
            ticket.ticket_number = resTurn.ticket_number
            const resTicket = await createTicket(ticket)
            if (resTicket.ok) {
                console.log("Ticket reservado correctamente")
                navigation.navigate("LandingPageScreen", {
                    student: route.params.student
                })
            }
        } else {
            if (!resTurn.rations) {
                console.log("Raciones agotadas")
            }
        }
    }

    useEffect(() => {
    }, [])

    return (

        <View>
            <Modal
                animationType="fade"
                transparent
                visible={viewModal}
            >
                <View style={styles.containerModalBig}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textModal}>
                            Confirme su reserva
                        </Text>
                        <View style={styles.modalOptionsContainer}>
                            <TouchableOpacity onPress={closeModal}>
                                <Text style={styles.modalOptionNo}>REGRESAR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                closeModal()
                                openModal1()
                            }}>
                                <Text style={styles.modalOptionYes}>CONFIRMAR RESERVA</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent
                visible={viewModal1}
            >
                <View style={styles.containerModalBig}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textModal1}>
                            Reserva exitosa!
                        </Text>
                        <View style={styles.modalOptionsContainer}>
                            <NewButton
                                content_="Aceptar"
                                width_="40%"
                                color_="#FFA41D"
                                colorText="#FFF"
                                onPress={handleSubmit}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            <Text style={styles.tittle}>RESUMEN DE RESERVA</Text>
            <Text style={styles.subtittle}>Nombres y apellidos</Text>
            <Text style={styles.text}>{route.params.student.first_name + " " + route.params.student.last_name}</Text>

            <Text style={styles.subtittle}>Código Universitario</Text>
            <Text style={styles.text}>{route.params.student.university_code}</Text>

            <Text style={styles.subtittle}>Servicio</Text>
            <Text style={styles.text}>{route.params.service_type}</Text>

            <Text style={styles.subtittle}>Sede</Text>
            <Text style={styles.text}>{route.params.sede}</Text>

            <Text style={styles.subtittle}>Turno</Text>
            <Text style={styles.text}>{"Turno " + route.params.turn.turn_number + " / " + route.params.turn.schedule}</Text>

            <Text style={styles.subtittle}>Consumirá</Text>
            <View style={styles.iconContainer}>
                <Image source={soupIcon} style={styles.icon}/>
                <Image source={dishIcon} style={styles.icon}/>
                <Image source={appleeIcon} style={styles.icon}/>
                <Image source={drinkIcon} style={styles.icon}/>
            </View>

            <View style={{ height: 50 }} />
            <NewButton
                content_="RESERVAR"
                width_="60%"
                color_="#136CF1"
                colorText="#FFF"
                onPress={openModal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tittle: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 20
    },
    subtittle: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#136CF1",
        marginVertical: 5
    },
    text: {
        alignSelf: "center",
        fontSize: 18,
        marginVertical: 5
    },
    levelContainer: {
        width: "65%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    level: {
        borderRadius: 5,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 30
    },
    levelText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    selectContainer: {
        width: "25%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
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
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20
    },
    textModal: {
        alignSelf: "center",
        color: "#000",
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 20
    },
    textModal1: {
        width: "30%",
        alignSelf: "center",
        textAlign: "center",
        color: "#136CF1",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 20
    },
    modalOptionsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    modalOptionNo: {
        color: "#FFA41D",
        fontWeight: "bold",
        marginVertical: 15
    },
    modalOptionYes: {
        color: "#136CF1",
        fontWeight: "bold",
        marginVertical: 15
    },
    iconContainer:{
        width: "40%",
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-around"
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode : 'contain',
        marginHorizontal: 10
    }
})

export default Reserve04