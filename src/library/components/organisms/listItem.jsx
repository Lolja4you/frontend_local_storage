import React, {useState} from 'react';
import { StyleSheet, TouchableHighlight, Text, TextInput, View} from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';


export default function ListItem({ el, deleteTask, editingItem, setEditingItem, updateTask })
{
    const [editedText, setEditedText] = useState(el.text);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
      setEditingItem(el.key);
      setIsEditing(true); 
    };

    const handleCancel = () => {
        setIsEditing(false); // Сброс флага редактирования
        setEditedText(el.text); // Сброс текста в изначальное значение
    };

    const handleSubmit = () => {
        if (editedText.trim() !== '') {
          updateTask(el.key, editedText);
          setIsEditing(false); // Сброс флага редактирования после сохранения
        }
    };

    return (
        <View style={styles.container}>
            {!isEditing ?(<>
                <TouchableHighlight onPress={handleEdit} style={styles.iconContainer}>
                    <FontAwesome name="pencil" size={25} color="rgb(195, 176, 145)" />
                </TouchableHighlight>

                <Text style={styles.midContainer}>
                    <Text style={styles.textDate}>
                        date: {el.date}{'\n'}task:  
                    </Text>
                    <Text style={styles.text}>
                        {" "}{el.text}
                    </Text>
                </Text>

                <TouchableHighlight onPress={() => [deleteTask(el.key)]} style={styles.iconContainer}>
                    <FontAwesome name="trash-o" size={25} color="#FF0000" />
                </TouchableHighlight>

            </>) : (<>
                
                    <Text style={[styles.textDate, styles.midContainer]} marginLeft={'25%'}>task: </Text>
                    
                <TextInput 
                            style={[styles.textInput, styles.text]}
                            value={editedText}
                            onChangeText={setEditedText}
                            autoFocus
                            multiline

                />
                <TouchableHighlight onPress={handleSubmit} style={styles.iconContainer}>
                <FontAwesome 
                    name="chevron-right"
                    size={25} color="rgb(0,155,119)" 
                />
                </TouchableHighlight>
                
            </>)
            }
        
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:16,
        color: 'white',
    },
    textDate:{
        color:'silver',
        fontSize:16,
    },
    container: {
        padding:3,
        marginBottom:10,
        top: 1,
        bottom: 10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#87CEEB',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    midContainer: {
        flex:1,
        marginLeft:'10%',
    },
    textInput: {
        borderColor: '#87CEEB',
        minHeight:45,
        minWidth:'48%',
        maxWidth: '48%',
    },
    iconContainer: {
        padding:15,

    },

});
