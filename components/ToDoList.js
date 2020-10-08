import React from 'react';
import {FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ToDoList = ({todosItem}) => (
  <FlatList
    keyExtractor={item => item.id.toString()}
    data={todosItem}
    renderItem={(item) => (
      <TouchableOpacity
        onPress={() => console.log('Click text')}
        onLongPress={() => console.log('Click text long')}
      >
        <Text style={style.text}> { item.title } </Text>
      </TouchableOpacity>
    )}
  >
  </FlatList>
);

export default ToDoList;

const style = StyleSheet.create({
  text: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    fontSize: 16,
    backgroundImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Ffootball%2F2020%2Fjul%2F31%2Fmason-mount-seven-out-of-10-chelsea-fa-cup-final-interview&psig=AOvVaw2yo0ZsswIdE9T7CAljYC6x&ust=1602093380572000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDvrYnFoOwCFQAAAAAdAAAAABAD'
  }
});
