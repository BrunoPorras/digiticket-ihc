import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
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
            <Text>RESUMEN DE RESERVA</Text>
            <Text>Nombres y apellidos</Text>
            <Text>{route.params.student.first_name + " " + route.params.student.last_name}</Text>

            <Text>Código Universitario</Text>
            <Text>{route.params.student.university_code}</Text>

            <Text>Servicio</Text>
            <Text>{route.params.service_type}</Text>

            <Text>Sede</Text>
            <Text>{route.params.sede}</Text>

            <Text>Turno</Text>
            <Text>{"Turno " + route.params.turn.turn_number + " / " + route.params.turn.schedule}</Text>

            <Text>Consumirá</Text>
            {/* Tú mismo eres mi king :3 */}

            <NewButton
                width_="60%"
                content_="RESERVAR"
                link_=""
                onPress={handleSubmit}
            />
        </View>
    )
}
export default Reserve04