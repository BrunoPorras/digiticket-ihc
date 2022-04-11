import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
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
        <View>
            <NewButton
                width_="60%"
                content_="INICIAR RESERVA"
                link_=""
                onPress={next}
            />
        </View>
    )
}
export default R