import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button } from 'react-native'
import NewButton from '../components/buttons'
import ProgressBar from './ProgressBar'

const Reserve01 = ({ navigation, route }) => {

    useEffect(() => {
    }, [])

    return (
        <View>
            <View style={styles.barContainer}>
                <ProgressBar step={0} steps={3} height={10}/>
            </View>
            <Text style={styles.tittle}>Seleccione sede del comedor</Text>
            <NewButton
                content_="SEDE CIUDAD UNIVERSITARIA"
                width_="60%"
                colorText="#000"
                extraStyle_={styles.bigBtn}
                onPress={() => navigation.navigate("Reserve02", {
                    student: route.params.student, sede: "CIUDAD UNIVERSITARIA"
                })}
            />
            <NewButton
                content_="SEDE CANGALLO" 
                width_="60%"
                colorText="#000"
                extraStyle_={styles.bigBtn}
                onPress={() => navigation.navigate("Reserve02", {
                    student: route.params.student, sede: "CANGALLO"
                })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tittle: {
        marginBottom: 40,
        alignSelf: "center",
        color: "#000",
        fontWeight: "bold",
        fontSize: 18
    },
    bigBtn: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#818CEC",
        marginVertical: 15,
        height: 150,
        width: 200,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    barContainer: {
        marginVertical: 40,
        marginHorizontal: 60
    }
})

export default Reserve01