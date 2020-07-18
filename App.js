import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name , setName] = useState('tharindu');
  const [age , setAge] = useState(10);
  const [person , setPerson] = useState({name: 'tharindu' , age: 20});

  const clickHandler = () => {
    setName('hirantha');
    setPerson({name: 'hirantha' , age: 40});
  }

  return (
    <View style={styles.container}>
        <Text>my name is {name}</Text>
        <Text>my name is {person.name} and my age is {person.age}</Text>
        <View style={styles.button}>
          <Button title='change states' onPress={clickHandler} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30
  },
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: 200
  }
});
