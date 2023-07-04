import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const data = [
  {key:1, item: 'item 1'}, 
  {key:2, item: 'item 2'}, 
  {key:3, item: 'item 3'}, 
  {key:4, item: 'item 4'}, 
  {key:5, item: 'item 5'}, 
  {key:6, item: 'item 6'}, 
  {key:7, item: 'item 7'}, 
  {key:8, item: 'item 8'}, 
  {key:9, item: 'item 9'}, 
  {key:10, item: 'item 10'}, 
  {key:11, item: 'item 11'}, 
  {key:12, item: 'item 12'}, 
]

export default function App() {
  const [items, setItem] = useState(data)

  return (
    <View style={sx.container}>
      <ScrollView>

        {items.map(it =>  (
          <View style={sx.item} >
              <Text key={it.key} style={sx.text}>{it.item}</Text>
          </View>
        )
        )}
      
        </ScrollView>
    </View>
  );
}

const sx = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    // justifyContent: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#12af3d54',
  },
  text: {
    fontSize: 24,
  }
});
