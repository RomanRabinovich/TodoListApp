import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()){
      onSubmit(value)
      setValue('')
    } else{
      Alert.alert('Nazvanie dela ne mozhet bit pustim')
    }
     
  }
  
  return(
    <View style={styles.block}>
      <TextInput 
         style={styles.input}
         onChangeText={setValue}
         value={value}
         placeholder='VVedite nazvanie dela...'
         autoCorrect={false}
         autoCapitalize='none'
          />
      <Button title='Dobavit' onPress={pressHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab'
  }
})