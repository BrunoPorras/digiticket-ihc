import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import NewButton from '../components/buttons';
import { getStudent } from '../api/students'
import { reduceRations } from '../api/turns'
import { createTicket } from '../api/tickets'

const Reserve04 = ({ navigation, route }) => {

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
            <Text style={styles.text}>Anthony cpp le wa poner iconos noma ga</Text>
            
            <View style={{height: 50}}/>
            <NewButton
                content_="RESERVAR"
                width_="60%"
                color_="#136CF1"
                colorText="#FFF"
                onPress={handleSubmit}
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
    }
})

export default Reserve04