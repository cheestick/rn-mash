import { useState } from 'react';
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { dataList, titleList } from './mock';


export default function App() {
  const [items, setItems] = useState(dataList)
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    const newItemCounter = (items.length + 1).toString()
    setTimeout(() => {
      setItems([...items, {id: newItemCounter, text: `item ${newItemCounter}`}])
      setRefreshing(false)
    }, 1000)
  }

  return (
    <View style={sx.container}>

      <FlatList
        data={items}
        // numColumns={2}
        horizontal={false}
        // inverted
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => (
          <View style={sx.item} >
              <Text  style={sx.text}>{item.text}</Text>
          </View>
        )}
        refreshControl={<RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh}
          tintColor={'#ff00ff45'}
          />}
      />

      {/* <ScrollView 
        horizontal={false} 
        refreshControl={<RefreshControl 
        refreshing={refreshing} 
        onRefresh={onRefresh}
        colors={['#ff00ff']}
        />}>

        {items.map(it =>  (
          <View style={sx.item} key={it.id}>
              <Text  style={sx.text}>{it.text}</Text>
          </View>
        )
        )}
      
        </ScrollView> */}
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
    paddingHorizontal: 25,
    backgroundColor: '#12af3d54',
    borderRadius: 15,
  },
  text: {
    fontSize: 24,
  }
});
