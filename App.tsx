import { useState } from 'react';
import { FlatList, RefreshControl, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { dataList, titleList } from './mock';


export default function App() {
  const [name, setName] = useState('')

  return (
    <View style={sx.container}>
      <Text style={sx.text}>Your name:</Text>
      <TextInput style={sx.input} cursorColor={'white'}
        placeholder='e.g. John Doe'
        placeholderTextColor={'#ffffff67'}
        onChangeText={value => setName(value)}
        keyboardAppearance='dark'
        maxLength={20}
        // multiline
        // keyboardType='phone-pad'
        // editable={false}
        // secureTextEntry
      />
      <Text style={sx.text}>Your name is : {name}</Text>
    </View>
  );
}

const sx = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    // justifyContent: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#12af3d54',
    borderRadius: 15,
  },
  text: {
    fontSize: 24,
  },
  input: {
    backgroundColor: '#00004555',
    // paddingVertical: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
    color: 'white',
    fontSize: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#00006755',
    borderRadius: 20,
  }
});
