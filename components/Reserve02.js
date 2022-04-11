import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import NewButton from '../components/buttons'
import { getTurns } from '../api/turns'
import { ListItem } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-web'
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
                onPress={() => {
                    navigation.navigate("Reserve03", {
                        student: route.params.student,
                        service_type: currentServiceType,
                        sede: route.params.sede,
                        turn: turn
                    })
                }}>
                <Text>{turn.turn_number}</Text>
                <Text>{turn.schedule}</Text>
                <Text>{turn.rations_available}</Text>
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item }) => <CardImage turn={item} />;

    useEffect(() => {
        loadTurns()
    }, [])

    return (
        <View>
            <FlatList
                style={{ width: '100%' }}
                data={turns}
                keyExtractor={(item) => item._id + ''}
                renderItem={renderItem}
            />
            <Text>Seleccionar turno</Text>
        </View>
    )
}
export default Reserve02