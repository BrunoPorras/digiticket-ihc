import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { CheckBox } from 'react-native-elements'

import NewButton from '../components/buttons'
import { useNavigation } from '@react-navigation/native'

export const R = (props) => {

    const navigation = useNavigation()

    const next = () => {
        navigation.navigate("Reserve01", { student: props.route.params.student })
    }
    useEffect(() => {
        console.log(props.route.params.student)
    }, [])

    return (
        <View style={{backgroundColor: "#FFF", height: "100%"}}>
            <Text style={styles.tittle}>
                Bienvenido, estamos en horario de reserva de almuerzo
            </Text>
            <Text style={styles.foodContent}>
                Almuerzo: Arroz chaufa de pollo
            </Text>
            <View style={styles.cardContainer}>
                            <Text style={styles.cardTittle}>HORARIO DE ATENCIÓN AL COMEDOR</Text>
                            <View style={styles.cardRow}>
                                <CheckBox></CheckBox>
                                <View>
                                    <Text style={{fontWeight: "bold", ...styles.cardText}}>Almuerzo:</Text>
                                    <Text style={styles.cardText}>De 12:00 pm a 1:40 pm</Text>
                                </View>
                            </View>
                            <View style={styles.cardRow}>
                                <CheckBox></CheckBox>
                                <View>
                                    <Text style={{fontWeight: "bold", ...styles.cardText}}>Cena:</Text>
                                    <Text style={styles.cardText}>De 5:00 pm a 6:00 pm</Text>
                                </View>
                            </View>
                        </View>
            <NewButton
                content_="Iniciar reserva"
                width_="50%"
                color_="#136CF1"
                colorText="#FFF"
                onPress={next}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tittle: {
        marginVertical: 50,
        alignSelf: "center",
        width: "70%",
        textAlign: "center",
        color: "#136CF1",
        fontWeight: "bold",
        fontSize: 18
    },
    foodContent: {
        alignSelf: "center",
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        marginBottom: 40
    },
    cardContainer: {
        alignSelf: "center",
        marginHorizontal: 10,
        width: 300,
        height: 230,
        borderRadius: 10,
        backgroundColor: "#E3EEF8",
        marginBottom: 40
    },
    cardRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    cardTittle: {
        textAlign: "center",
        color: "#000",
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 25
    },
    cardText: {
        fontSize: 14
    }
})

export default R