import { StatusBar } from 'expo-status-bar';
import React, {  useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Texted from './components/Text';
import ToDoBlock from './components/ToDoBlock';
import ToDoList from './components/ToDoList';

const App = () => {
    const [ todos, setTodos ] = useState([]);

    const addToDo = (title) => {
      // const newToDo = {
      //   id: Date.now().toString(),
      //   title: title,
      // };

      setTodos(prev => [...prev, {
        id: Date.now().toString(),
        title,
      }]);
    };

    return (
      <View style={styles.container}>
        <Texted />
        <ToDoBlock onSubmit={addToDo} />

        <ToDoList todosItem={todos} />

      </View>
    );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
