import { useState } from 'react';
import { Button, FlatList, RefreshControl, ScrollView, SectionList, 
  StyleSheet, Text, TextInput, TouchableWithoutFeedback,
   TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { dataList, titleList } from './mock';


export default function App() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onPressHandler = () => {
    setSubmitted(!submitted)
  }

  return (
    <View style={sx.container}>
      <Text style={sx.text}>Your name:</Text>
      <TextInput style={sx.input} cursorColor={'white'}
        placeholder='e.g. John Doe'
        placeholderTextColor={'#ffffff67'}
        onChangeText={value => setName(value.trim())}
        keyboardAppearance='dark'
        maxLength={20}
        // multiline
        // keyboardType='phone-pad'
        // editable={false}
        // secureTextEntry
      />

      <TouchableWithoutFeedback
        style={sx.buttonTO}
        onPress={onPressHandler} 
        >
          <View style={sx.button}>

              <Text>{submitted ? 'Clear' : 'Submit'}</Text>
          </View>
      </TouchableWithoutFeedback>

      {/* <TouchableHighlight
        style={sx.buttonTO}
        onPress={onPressHandler} 
        activeOpacity={0.6}
        underlayColor={'#0d046f99'}
        >
        <Text>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableHighlight> */}

      {/* <TouchableOpacity
        style={sx.buttonTO}
        onPress={onPressHandler} 
        activeOpacity={0.3}>
        <Text>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity> */}

      {/* <View style={sx.button}>
        <Button title='Submit' color={'white'}
          onPress={onPressHandler}
        />
      </View> */}
      <Text style={sx.text}>Your name is : {name}</Text>
      {submitted && name
        ? <Text key='is-submitted' style={[sx.text, {color: 'green'}]}>{name} approved!</Text>  
        : <Text key='is-submitted' style={[sx.text, {color: 'green'}]}></Text>       
      }
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
  },
  button: {
    backgroundColor: '#0d046f99',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'stretch'
  },
  buttonTO: {
    padding: 20,
    marginVertical: 10,
    borderColor: '#ffaadd54',
    backgroundColor: '#ffaadd23',
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
  }
});
