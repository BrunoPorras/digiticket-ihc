import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ActivateAccountScreen1 = () => {
  const navigation = useNavigation()
  const handleNext = () => {
    navigation.navigate("ActivateAccountScreen2")
  }
  return (
    <View>
      <Text>
        Cambie su contraseña para una mayor seguridad
      </Text>
      <TextInput
        placeholder='Código Universitario'
        value='18200066'>
      </TextInput>
      <TextInput
        placeholder='Contraseña de correo institucional'>
      </TextInput>
      <TextInput
        placeholder='Introducir nueva contraseña'>
      </TextInput>
      <TextInput
        placeholder='Confirmar nueva contraseña'>
      </TextInput>
      <Button
        onPress={handleNext}
        title="Siguiente"
      />
    </View>
  )
}

export default ActivateAccountScreen1