import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import UserIcon from '../assets/user.png'

export const Profile = () => {
    return (
        <>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.headerText}>Hola</Text>
                    <Text style={{...styles.headerText, fontWeight: "bold"}}>CRISTHIAN</Text>
                </View>
                <Image source={UserIcon}/>
            </View>
            <View style={styles.listContainer}>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={UserIcon}/>
                    <Text style={styles.listText}>Actualizar datos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={UserIcon}/>
                    <Text style={styles.listText}>Historial de tickets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={UserIcon}/>
                    <Text style={styles.listText}>Enviar comentarios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={UserIcon}/>
                    <Text style={styles.listText}>Ver horario semanal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={UserIcon}/>
                    <Text style={styles.listText}>Cancelar mi reserva</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <Image source={UserIcon}/>
                    <Text style={styles.listText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#136CF1",
        width: "100%",
        height: "25%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    headerText: {
        color: "#FFF",
        fontSize: 16
    },
    listContainer: {
        width: "80%",
        marginVertical: 30,
        alignSelf: "center"
    },
    listItem:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    listText: {
        fontSize: 18,
        marginLeft: 20
    }
})

export default Profile