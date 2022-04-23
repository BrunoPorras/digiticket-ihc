import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native'
import NewButton from '../components/buttons';
import { getStudent } from '../api/students'
import { reduceRations } from '../api/turns'
import { createTicket } from '../api/tickets'

import soupIcon from '../assets/icons-food/soup.png'
import dishIcon from '../assets/icons-food/dish.png'
import appleeIcon from '../assets/icons-food/apple.png'
import drinkIcon from '../assets/icons-food/drink.png'

export const Ticket = () => {
    return (
        <View>
            <Text style={styles.tittle}>RESUMEN DE RESERVA</Text>
            <Text style={styles.subtittle}>Nombres y apellidos</Text>
            <Text style={styles.text}>Bruno Franchesco Porras Muñoz</Text>

            <Text style={styles.subtittle}>Código Universitario</Text>
            <Text style={styles.text}>18200176</Text>

            <Text style={styles.subtittle}>Servicio</Text>
            <Text style={styles.text}>Almuerzo</Text>

            <Text style={styles.subtittle}>Sede</Text>
            <Text style={styles.text}>CIUDAD UNIVERSITARIA</Text>

            <Text style={styles.subtittle}>Turno</Text>
            <Text style={styles.text}>Turno 1 / 12:00 - 12:20</Text>

            <Text style={styles.subtittle}>Consumirá</Text>
            <View style={styles.iconContainer}>
                <Image source={soupIcon} style={styles.icon}/>
                <Image source={dishIcon} style={styles.icon}/>
                <Image source={appleeIcon} style={styles.icon}/>
                <Image source={drinkIcon} style={styles.icon}/>
            </View>

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

export default Ticket