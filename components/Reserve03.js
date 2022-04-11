import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button } from 'react-native'
import { CheckBox } from 'react-native-elements'
import NewButton from '../components/buttons';

const Reserve03 = ({ navigation, route }) => {
    const levels = ["1", "2"]
    const [selectedLevel, setSelectedLevel] = useState(levels[0]);

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
        navigation.navigate("Reserve04",{
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
            <Text>Seleccione el nivel</Text>
            <TouchableOpacity
                onPress={() => setSelectedLevel(levels[0])}>
                <Text>Nivel 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setSelectedLevel(levels[1])}>
                <Text>Nivel 2</Text>
            </TouchableOpacity>
            <Text>Seleccione lo que consumirá</Text>
            <View>
                <CheckBox
                    checked={selectedEntree}
                    onPress={() => setSelectedEntree(!selectedEntree)}>
                </CheckBox>
                <Text>
                    Entrada
                </Text>
                <CheckBox
                    checked={selectedSecond}
                    onPress={() => setSelectedSecond(!selectedSecond)}>
                </CheckBox>
                <Text>
                    Segundo
                </Text>
                <CheckBox
                    checked={selectedDessert}
                    onPress={() => setSelectedDessert(!selectedDessert)}>
                </CheckBox>
                <Text>
                    Postre
                </Text>
                <CheckBox
                    checked={selectedDrink}
                    onPress={() => setSelectedDrink(!selectedDrink)}>
                </CheckBox>
                <Text>
                    Bebida
                </Text>
                <NewButton
                    width_="60%"
                    content_="SIGUIENTE"
                    link_=""
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}
export default Reserve03