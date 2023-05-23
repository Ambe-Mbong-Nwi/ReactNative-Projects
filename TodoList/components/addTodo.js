//this component enable users add new todos 
//onChangeText prop ensures that when you input a new todo, it passes the value to the changeHandler func
//the multiline prop in the input field enables users to enter multiple lines
//KeyboardType eg ='numeric' shows a numeric keyboard when user clicks on input field.
//the changeHandler func receives the val from the textinput and sets it as new text using setText(val)
//the button is used to add the inputed todo text to the old array and display it.
//this array is located in app.js so we need to create the func in app and use it as a prop here.

import React, { useState }  from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function addTodo({submitHandler}) {
    const [text, setText] = useState('');       //present text='', to change text, use func setText

    const changeHandler = (val) => {
        setText(val)
    }
    return(
        <View>
            <TextInput 
            style={StyleSheet.input}
            placeholder='wowww new todoo'
            multiple
            onChangeText={changeHandler}
           // onChangeText={(val) => changeHandler(val)}   same as above
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        color: '#ddd',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
    }
})