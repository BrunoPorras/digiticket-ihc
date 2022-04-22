import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image, Modal, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import eyeIcon from '../assets/icons-tab-nav/eye.png'
import { CheckBox } from 'react-native-elements'
import NewButton from './buttons'

export const Home = () => {

    const [modalView, setModalView] = useState(false)

    const closeModal = () => {
        setModalView(false)
    }

    const openModal = () => {
        setModalView(true)
        return true
    }

    const [colors, setColors] = useState({
        color1: "#FF7A00",
        color2: "#9D9D9D",
        color3: "#9D9D9D"
    })

    const [foodFocus, setFoodFocus] = useState(0)

    //  Array of the menu
    const foods = [
        {
            appetizer: {
                name: "Avena con manzana",
                proteins: "535 g",
                carbohydrates: "190 g",
                fats: "65 g"
            },
            main_dish: {
                name: "Pan con lomo",
                proteins: "535 g",
                carbohydrates: "190 g",
                fats: "65 g"
            },
            desert: {
                name: "Pan con palta",
                proteins: "535 g",
                carbohydrates: "190 g",
                fats: "65 g"
            },
            drink: {
                name: "Jugo de naranja",
                proteins: "535 g",
                carbohydrates: "190 g",
                fats: "0"
            }
        },
        {
            appetizer: {
                name: "Sopa de fideos",
                proteins: "535 g",
                carbohydrates: "190 g",
                fats: "65 g"
            },
            main_dish: {
                name: "Arroz chaufa de pollo",
                proteins: "535 g",
                carbohydrates: "190 g",
                fats: "65 g"
            },
            desert: {
                name: "Manzana",
                proteins: "535 g",
                carbohydrates: "190 g",
                fats: "65 g"
            },
            drink: {
                name: "Agua de maracuyá",
                proteins: "535 g",
                carbohydrates: "190 g",
                fats: "65 g"
            }
        },
        {
            appetizer: {
                name: "Sopa de sémola",
                proteins: "505 g",
                carbohydrates: "100 g",
                fats: "95 g"
            },
            main_dish: {
                name: "Tallarín verde",
                proteins: "295 g",
                carbohydrates: "90 g",
                fats: "75 g"
            },
            desert: {
                name: "Naranja",
                proteins: "535 g",
                carbohydrates: "190 g",
                fats: "65 g"
            },
            drink: {
                name: "Agua de caño",
                proteins: "0 g",
                carbohydrates: "0 g",
                fats: "0 g"
            }
        }
    ]

    const breakfastSelect = () => {
        setColors({
            color1: "#FF7A00",
            color2: "#9D9D9D",
            color3: "#9D9D9D"
        })
        setFoodFocus(0)
    }

    const lunchSelect = () => {
        setColors({
            color1: "#9D9D9D",
            color2: "#FF7A00",
            color3: "#9D9D9D"
        })
        setFoodFocus(1)
    }

    const dinnerSelect = () => {
        setColors({
            color1: "#9D9D9D",
            color2: "#9D9D9D",
            color3: "#FF7A00"
        })
        setFoodFocus(2)
    }
    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <Modal
                animationType="fade"
                transparent
                visible={modalView}
            >
                <View style={styles.containerModalBig}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.titleModal}>
                            Platano
                        </Text>
                        <View style={styles.propertiesContainer}>
                            <Text style={{
                                fontWeight: "bold", ...styles.foodText
                            }}>Proteínas:</Text>
                            <Text style={styles.foodText}>{foods[foodFocus]["appetizer"]["proteins"]}</Text>
                        </View>
                        <View style={styles.propertiesContainer}>
                            <Text style={{
                                fontWeight: "bold", ...styles.foodText
                            }}>Carbohidratos:</Text>
                            <Text style={styles.foodText}>{foods[foodFocus]["appetizer"]["carbohydrates"]}</Text>
                        </View>
                        <View style={styles.propertiesContainer}>
                            <Text style={{
                                fontWeight: "bold", ...styles.foodText
                            }}>Grasas:</Text>
                            <Text style={styles.foodText}>{foods[foodFocus]["appetizer"]["fats"]}</Text>
                        </View>
                        <View style={{height: 20}}/>
                        <NewButton
                            content_="Aceptar"
                            width_="40%"
                            color_="#FFA41D"
                            colorText="#FFF"
                            onPress={closeModal}
                        />
                    </View>
                </View>
            </Modal>
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
                    <Text style={styles.foodText}>{foods[foodFocus]["appetizer"]["name"]}</Text>
                    <TouchableOpacity onPress={openModal}>
                        <Image source={eyeIcon} style={{ width: 16, height: 12 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.foodOptionContainer}>
                    <Text style={{
                        fontWeight: "bold", ...styles.foodText
                    }}>Segundo:</Text>
                    <Text style={styles.foodText}>{foods[foodFocus]["main_dish"]["name"]}</Text>
                    <TouchableOpacity onPress={openModal}>
                        <Image source={eyeIcon} style={{ width: 16, height: 12 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.foodOptionContainer}>
                    <Text style={{
                        fontWeight: "bold", ...styles.foodText
                    }}>Postre:</Text>
                    <Text style={styles.foodText}>{foods[foodFocus]["desert"]["name"]}</Text>
                    <TouchableOpacity onPress={openModal}>
                        <Image source={eyeIcon} style={{ width: 16, height: 12 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.foodOptionContainer}>
                    <Text style={{
                        fontWeight: "bold", ...styles.foodText
                    }}>Bebida:</Text>
                    <Text style={styles.foodText}>{foods[foodFocus]["drink"]["name"]}</Text>
                    <TouchableOpacity onPress={openModal}>
                        <Image source={eyeIcon} style={{ width: 16, height: 12 }} />
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
                                    <Text style={{ fontWeight: "bold", ...styles.cardText }}>Desayuno:</Text>
                                    <Text style={styles.cardText}>Desde las 7:00 am (sin ticket)</Text>
                                </View>
                            </View>
                            <View style={styles.cardRow}>
                                <CheckBox></CheckBox>
                                <View>
                                    <Text style={{ fontWeight: "bold", ...styles.cardText }}>Almuerzo:</Text>
                                    <Text style={styles.cardText}>De 12:00 pm a 1:40 pm</Text>
                                </View>
                            </View>
                            <View style={styles.cardRow}>
                                <CheckBox></CheckBox>
                                <View>
                                    <Text style={{ fontWeight: "bold", ...styles.cardText }}>Cena:</Text>
                                    <Text style={styles.cardText}>De 5:00 pm a 6:00 pm</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardTittle}>HORARIO DE ENTREGA DE TICKETS</Text>
                            <View style={styles.cardRow}>
                                <CheckBox></CheckBox>
                                <View>
                                    <Text style={{ fontWeight: "bold", ...styles.cardText }}>Almuerzo:</Text>
                                    <Text style={styles.cardText}>Desde las 7:30 am</Text>
                                </View>
                            </View>
                            <View style={styles.cardRow}>
                                <CheckBox></CheckBox>
                                <View>
                                    <Text style={{ fontWeight: "bold", ...styles.cardText }}>Cena:</Text>
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
    titleModal: {
        alignSelf: "center",
        color: "#136CF1",
        fontSize: 20
    },
    textModal: {
        color: "#000",
        fontSize: 18,
        marginBottom: 20
    },
    propertiesContainer: {
        width: "60%",
        alignSelf: "center",
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
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
})

export default Home