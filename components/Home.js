import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image, Modal, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import eyeIcon from '../assets/icons-tab-nav/eye.png'
import { CheckBox } from 'react-native-elements'

export const Home = () => {

    const [colors, setColors] = useState({
        color1: "#FF7A00", 
        color2: "#9D9D9D", 
        color3: "#9D9D9D"
    })

    const [foodFocus, setFoodFocus] = useState(1)

    const breakfastSelect = () => {
        setColors({
            color1: "#FF7A00",
            color2: "#9D9D9D",
            color3: "#9D9D9D"
        })
    }

    const lunchSelect = () => {
        setColors({
            color1: "#9D9D9D",
            color2: "#FF7A00",
            color3: "#9D9D9D"
        })
    }

    const dinnerSelect = () => {
        setColors({
            color1: "#9D9D9D",
            color2: "#9D9D9D",
            color3: "#FF7A00"
        })
    }
    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }} colors={["#1A69DF", "#FF7A00"]} style={styles.tittleContainer}>
                <Text style={styles.tittleStyler}>
                    BIENVENIDO A DIGITICKET OGBU
                </Text>
            </LinearGradient>
            <Text style={styles.subTittle}>
                Información nutricional del menú de hoy
            </Text>
            <View style={styles.timeContainer}>
                <TouchableOpacity
                    onPress={breakfastSelect}
                    >
                    <Text style={{
                        color: colors.color1, 
                        borderBottomColor: colors.color1,
                        ...styles.tittleOptions
                    }}>Desayuno</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={lunchSelect}>
                    <Text style={{
                        color: colors.color2, 
                        borderBottomColor: colors.color2,
                        ...styles.tittleOptions
                    }}>Almuerzo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={dinnerSelect}>
                    <Text style={{
                        color: colors.color3, 
                        borderBottomColor: colors.color3,
                        ...styles.tittleOptions
                    }}>Cena</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.foodOptionsContainer}>
                <View style={styles.foodOptionContainer}>
                    <Text style={{
                        fontWeight: "bold", ...styles.foodText
                        }}>Entrada:</Text>
                    <Text style={styles.foodText}>Sopa de fideos</Text>
                    <TouchableOpacity>
                        <Image source={eyeIcon} style={{width: 16, height: 12}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.foodOptionContainer}>
                    <Text style={{
                        fontWeight: "bold", ...styles.foodText
                        }}>Segundo:</Text>
                    <Text style={styles.foodText}>Arroz chaufa de pollo</Text>
                    <TouchableOpacity>
                        <Image source={eyeIcon} style={{width: 16, height: 12}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.foodOptionContainer}>
                    <Text style={{
                        fontWeight: "bold", ...styles.foodText
                        }}>Postre:</Text>
                    <Text style={styles.foodText}>Manzana</Text>
                    <TouchableOpacity>
                        <Image source={eyeIcon} style={{width: 16, height: 12}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.foodOptionContainer}>
                    <Text style={{
                        fontWeight: "bold", ...styles.foodText
                        }}>Bebida:</Text>
                    <Text style={styles.foodText}>Agua de maracuyá</Text>
                    <TouchableOpacity>
                        <Image source={eyeIcon} style={{width: 16, height: 12}}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.scrollViewContainer}>
                <ScrollView horizontal={true}>
                    <View style={styles.cardsContainer}>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardTittle}>HORARIO DE ATENCIÓN AL COMEDOR</Text>
                            <View style={styles.cardRow}>
                                <CheckBox></CheckBox>
                                <View>
                                    <Text style={{fontWeight: "bold", ...styles.cardText}}>Desayuno:</Text>
                                    <Text style={styles.cardText}>Desde las 7:00 am (sin ticket)</Text>
                                </View>
                            </View>
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
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardTittle}>HORARIO DE ENTREGA DE TICKETS</Text>
                            <View style={styles.cardRow}>
                                <CheckBox></CheckBox>
                                <View>
                                    <Text style={{fontWeight: "bold", ...styles.cardText}}>Almuerzo:</Text>
                                    <Text style={styles.cardText}>Desde las 7:30 am</Text>
                                </View>
                            </View>
                            <View style={styles.cardRow}>
                                <CheckBox></CheckBox>
                                <View>
                                    <Text style={{fontWeight: "bold", ...styles.cardText}}>Cena:</Text>
                                    <Text style={styles.cardText}>Desde las 2:30 pm</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tittleContainer: {
        height: 65
    },
    tittleStyler: {
        paddingVertical: 20,
        textAlign: "center",
        fontSize: 18,
        color: "#FFF"
    },
    subTittle: {
        color: "#136CF1",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 25,
    },
    timeContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    tittleOptions: {
        fontSize: 18,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        borderBottomWidth: 2,
    },
    foodOptionsContainer: {
        marginTop: 10,
        width: "80%",
        alignSelf: "center"
    },
    foodOptionContainer: {
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    foodText: {
        fontSize: 16
    },
    scrollViewContainer: {
        marginTop: 20,
        alignSelf: "center",
        width: "85%"
    },
    cardsContainer: {
        display: "flex",
        flexDirection: "row"
    },
    cardContainer: {
        marginHorizontal: 10,
        width: 300,
        height: 230,
        borderRadius: 10,
        backgroundColor: "#F0F0F0"
    },
    cardRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    cardTittle: {
        textAlign: "center",
        color: "#136CF1",
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 25
    },
    cardText: {
        fontSize: 14
    }
})

export default Home