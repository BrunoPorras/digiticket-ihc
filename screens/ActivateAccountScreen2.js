import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ActivateAccountScreen2 = () => {
  const navigation = useNavigation()
  const handleNext = () => {
    navigation.navigate("ActivatedAccountScreen")
  }
  return (
    <View>
      <Text>
        Registre sus datos
      </Text>
      <TextInput
        placeholder='Correo personal'>
      </TextInput>
      <TextInput
        placeholder='Teléfono'>
      </TextInput>
      <TextInput
        placeholder='Sede preferencia'>
      </TextInput>
      <Button
        onPress={handleNext}
        title="Guardar datos"
      />
    </View>
  )
}

export default ActivateAccountScreen2