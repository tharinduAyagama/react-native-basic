import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [name , setName] = useState('tharindu');
  const [age , setAge] = useState(10);
  const [person , setPerson] = useState({name: 'tharindu' , age: 20});
  const [people , setPeople] = useState([
    {key:1 , name:'tharindu'},
    {key:2 , name:'hirantha'},
    {key:3 , name:'bandara'},
    {key:4 , name:'ayagama'},
    {key:5 , name:'saman'},
    {key:6 , name:'uku'},
    {key:7 , name:'raba'}
  ]);

  const clickHandler = () => {
    setName('hirantha');
    setPerson({name: 'hirantha' , age: 40});
  }

  return (
    // <View style={styles.container}>
    //     <Text>my name is {name}</Text>
    //     <Text>my name is {person.name} and my age is {person.age}</Text>
    //     <View style={styles.button}>
    //       <Button title='change states' onPress={clickHandler} />
    //     </View>
    // </View>

    // <View style={styles.container}>
    //   <Text>Name:</Text>
    //   <TextInput
    //     style = {styles.input}
    //     placeholder = 'mark'
    //     onChangeText = {(val) => setName(val)} />
    //   <Text>Age:</Text>
    //   <TextInput
    //     keyboardType = 'numeric' 
    //     style = {styles.input}
    //     placeholder = '23'
    //     onChangeText = {(val) => setAge(val)} />
    //   <Text>ur name is {name} and age is {age}</Text>
    // </View>

    <View>
      <ScrollView>
        {people.map(
          (item) => (
            <View key = {item.key} >
              <Text style={styles.item}>{item.name}</Text>
            </View>
        )
        )}
      </ScrollView>
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
  },
  item: {
    marginTop: 30,
    padding: 30,
    fontSize: 30,
    backgroundColor: 'orange'
  }
});
