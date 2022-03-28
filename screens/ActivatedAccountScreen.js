import React, { useState } from 'react'
import { View, Text, Button, CheckBox, StyleSheet, TextInput, Image } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const ActivatedAccountScreen = () => {
  const [isSelected, setSelection] = useState(false)
  const navigation = useNavigation()

  const handleRecoverPassword = () => {
    navigation.navigate("RecoverPasswordScreen")
  }

  return (
    <View>
      <Text>
        INICIAR SESIÓN
      </Text>
      <View>
        <TextInput
          placeholder='Constraseña'>
        </TextInput>
        <Icon
          name='rowing'
          color='#B2B2B2'>
        </Icon>
      </View>
      <View>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          disabled={false}
        />
        <Text>Ver contraseña</Text>
      </View>
      <Button
        title='INGRESAR'
        color='#136CF1'
      />
      <Text
        onPress={handleRecoverPassword}>
        ¿Olvidaste tu contraseña?

      </Text>
    </View>
  )
}

export default ActivatedAccountScreen