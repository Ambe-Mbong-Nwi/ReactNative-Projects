//we are receiving the item props here so we can output item.text
//we wish to use the onPress so we can delete an item when clicked. but the items were not created here, so we create a func in app.js and pass it here as a prop
//the func created for deleting is pressHandler which uses the key of a pressed item to filter it out

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';     //importing icons from the expo documentary. material bcos thats the kind of delete icon we want

//passing in destructured item and pressHandler prop
//the name 'delete' used in the icon is that gotten from the website NOT self-named.
export default function TodoItem({ item, pressHandler }) {

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={20} color='#333' />
                <Text style={styles.itemtext}>{item.text}</Text>
            </View>
            
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',       //so icon and text sit beside each other
    },

    itemtext: {
        marginLeft: 10,
    }
})