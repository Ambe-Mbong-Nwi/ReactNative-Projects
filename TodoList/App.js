//the second and better way to output a list is using the 'flatlist' which automatically has scroll and key
//it is self-closing and has props that control everything. high performance bcos for large list, list items are loaded as we scroll down not all at once
//data prop takes the people array, the renderItem prop equals a func to output data. first destructure item {()} instead of just ()
//KeyExtractor enables us use a different unique identifier other than the default 'key'
//numColumns enables us display list in two or more columns like a grid

//import header component and nest it where it has to be located.
//create item prop and use in todoitem component.


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import addTodo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Have a bath', key: '1' },
    { text: 'Go to school', key: '2' },
    { text: 'Come back home', key: '3' },
  ]);

  //this func takes in key of pressed todo, and returns using the filter function all todos whose keys are not equal to the pressed todo key.
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  //this func is passed to button so when someone enters new todo and click the button, the new todo is added to the array above.
  //...prevtodos is the spread operator that takes all present elements of the array and returns a new array
  //the new todo is placed in the object created below with a text. the key is randomly generated using the function changed to a string using the tosting func. u can still create a new func or import something for that.
const submitHandler = (text) => {
  setTodos((prevTodos) => {
    return [
      { text: text, key: Math.random().toString() },
      ...prevTodos
    ]
  })
}

  return (
    <View style={styles.container}>
      {/* using header component after import. */}
      <Header />
      <View style={styles.content}>
        {/* form */}
        <addTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data = {todos}
            renderItem={({ item }) => (
              // passing in pressHanler func and item as props to todoitem so it can be used it todoitem component
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,           //move it away from top of screen
  },
  list: {
    marginTop: 20,
  }
});
