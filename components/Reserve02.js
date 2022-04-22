import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import NewButton from '../components/buttons'
import ProgressBar from './ProgressBar'
import { getTurns } from '../api/turns'
import { ListItem } from 'react-native-elements'

// import Card from './Card'
const Reserve02 = ({ navigation, route }) => {

    const currentServiceType = 'Almuerzo'
    // const currentServiceType = 'Cena'
    
    const [turns, setTurns] = useState([])

    const loadTurns = async () => {
        const res = await getTurns();
        if (res.ok) {
            const tempTurns = res.turns.filter(({ service_type }) => service_type === currentServiceType);
            setTurns(tempTurns)
            console.log(tempTurns)
        }

    }

    const CardImage = ({ turn }) => {
        return (
            
            <TouchableOpacity
                style={styles.turnContainer}
                onPress={() => {
                    navigation.navigate("Reserve03", {
                        student: route.params.student,
                        service_type: currentServiceType,
                        sede: route.params.sede,
                        turn: turn
                    })
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 18}}>({turn.turn_number})</Text>
                        <Text style={{fontSize: 18}}>{turn.schedule}</Text>
                    </View>
                <Text style={{fontSize: 18, marginRight: 65}}>{turn.rations_available}</Text>
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item }) => <CardImage turn={item} />;

    useEffect(() => {
        loadTurns()
    }, [])

    return (
        <View>
            <View style={styles.barContainer}>
                <ProgressBar step={1} steps={3} height={10}/>
            </View>
            <Text style={styles.tittle}>Seleccione un turno</Text>
            <View style={styles.optionsContainer}>
                <Text style={styles.tittle}>Turno</Text>
                <Text style={styles.tittle}>Tickets disponibles</Text>
            </View>
            <FlatList
                style={{ width: '80%', alignSelf: 'center' }}
                data={turns}
                keyExtractor={(item) => item._id + ''}
                renderItem={renderItem}
            />
            
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
    optionsContainer:{
        alignSelf: "center",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    turnContainer: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#B0B0B0",
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5
    },
    textOptions: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10
    }
})

export default Reserve02