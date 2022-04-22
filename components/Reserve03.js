import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button } from 'react-native'
import { CheckBox } from 'react-native-elements'
import NewButton from '../components/buttons';
import ProgressBar from './ProgressBar'

const Reserve03 = ({ navigation, route }) => {
    const levels = ["1", "2"]
    const [selectedLevel, setSelectedLevel] = useState(levels[0]);
    
    const [colors, setColors] = useState({
        color1: "#FF5C00", 
        color2: "#9D9D9D"
    })

    const level1Click = () => {
        setColors({
            color1: "#FF5C00", 
            color2: "#9D9D9D"
        })
    }

    const level2Click = () => {
        setColors({
            color1: "#9D9D9D", 
            color2: "#FF5C00"
        })
    }

    const [selectedEntree, setSelectedEntree] = useState(false)
    const [selectedSecond, setSelectedSecond] = useState(false)
    const [selectedDessert, setSelectedDessert] = useState(false)
    const [selectedDrink, setSelectedDrink] = useState(false)

    const handleSubmit = () => {
        const foods = {
            entree: selectedEntree,
            second: selectedSecond,
            dessert: selectedDessert,
            drink: selectedDrink,
        }
        navigation.navigate("Reserve04", {
            student: route.params.student,
            service_type: route.params.service_type,
            sede: route.params.sede,
            turn: route.params.turn,
            level: selectedLevel,
            foods: foods
        })
    }

    useEffect(() => {
    }, [])

    return (
        <View>
            <View style={styles.barContainer}>
                <ProgressBar step={2} steps={3} height={10} />
            </View>
            <Text style={styles.tittle}>Seleccione el nivel</Text>
            <View style={styles.levelContainer}>
                <TouchableOpacity
                    style={{...styles.level, borderColor: colors.color1}}
                    onPress={() => {
                        setSelectedLevel(levels[0])
                        level1Click()
                    }}>
                    <Text style={{...styles.levelText, color: colors.color1}}>Nivel 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{...styles.level, borderColor: colors.color2}}
                    onPress={() => {
                        setSelectedLevel(levels[1])
                        level2Click()
                    }}>
                    <Text style={{...styles.levelText, color: colors.color2}}>Nivel 2</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.tittle}>Seleccione lo que consumirá</Text>
            <View style={{alignSelf: "center", width: "100%"}}>
                <View style={styles.selectContainer}>
                    <CheckBox
                        checked={selectedEntree}
                        onPress={() => setSelectedEntree(!selectedEntree)}>
                    </CheckBox>
                    <Text>
                        Entrada
                    </Text>
                </View>
                <View style={styles.selectContainer}>
                    <CheckBox
                        checked={selectedSecond}
                        onPress={() => setSelectedSecond(!selectedSecond)}>
                    </CheckBox>
                    <Text>
                        Segundo
                    </Text>
                </View>
                <View style={styles.selectContainer}>
                    <CheckBox
                        checked={selectedDessert}
                        onPress={() => setSelectedDessert(!selectedDessert)}>
                    </CheckBox>
                    <Text>
                        Postre
                    </Text>
                </View>
                <View style={styles.selectContainer}>
                    <CheckBox
                        checked={selectedDrink}
                        onPress={() => setSelectedDrink(!selectedDrink)}>
                    </CheckBox>
                    <Text>
                        Bebida
                    </Text>
                </View>
                <View style={{height: 20}}/>
                <NewButton
                    content_="SIGUIENTE"
                    width_="60%"
                    color_="#136CF1"
                    colorText="#FFF"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    barContainer: {
        marginVertical: 40,
        marginHorizontal: 60
    },
    tittle: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 20
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

export default Reserve03