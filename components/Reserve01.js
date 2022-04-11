import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button } from 'react-native'
import NewButton from '../components/buttons'

const Reserve01 = ({ navigation, route }) => {

    useEffect(() => {
    }, [])

    return (
        <View>
            <Text>Seleccione sede del comedor</Text>
            <NewButton
                width_="60%"
                content_="SEDE CIUDAD UNIVERSITARIA"
                link_=""
                onPress={() => navigation.navigate("Reserve02", {
                    student: route.params.student, sede: "CIUDAD UNIVERSITARIA"
                })}
            />
            <NewButton
                width_="60%"
                content_="SEDE CANGALLO"
                link_=""
                onPress={() => navigation.navigate("Reserve02", {
                    student: route.params.student, sede: "CANGALLO"
                })}
            />
        </View>
    )
}
export default Reserve01