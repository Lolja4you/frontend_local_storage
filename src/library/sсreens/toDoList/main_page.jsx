import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, FlatList} from 'react-native';

import Popup from '../../components/organisms/popup';
import FormItem from '../../components/organisms/formItem';
import ListItem from '../../components/organisms/listItem';


export default function ToDoMainPage() {
  const [listOfItems, setListOfItems] = useState([])
  const [editingItem, setEditingItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTextColor, setPopupTextColor] = useState('#FFFFFF');
  const [popupHeader, setPopupHeader] = useState('');
  const [popupIcon, setPopupIcon] = useState('check-circle-outline');

  const addTask = (text) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString()

    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(6), date: formattedDate },
        ...list
        ]
    })
    setShowPopup(true);
    setPopupMessage('New task added successfully!');
    setPopupTextColor('rgb(0,155,119)')
    setPopupHeader('Event: new task')
  }
  
  const deleteTask = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    
    })
    setShowPopup(true);
    setPopupMessage('Task was deleted!');
    setPopupTextColor('#FF0000')
    setPopupHeader('Event: deleted')
  }

  const updateTask = (key, newText) => {
    setListOfItems((list) => {
      return list.map((item) => {
        if (item.key === key) {
          return { ...item, text: newText };
        }
        return item;
      });
    });
    setEditingItem(null);
    setShowPopup(true);
    setPopupMessage('Record updated successfully!');
    setPopupTextColor('rgb(195, 176, 145)')
    setPopupHeader('Event: eddit')

  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FormItem
        addTask={addTask}
        style={styles.padding15px} 
      />
      <FlatList style={styles.padding15px}
          data={listOfItems}
          renderItem={({item}) => (
              <ListItem 
                el={item}
                deleteTask={deleteTask} 
                editingItem={editingItem}
                setEditingItem={setEditingItem}
                updateTask={updateTask}
                isEditing={item.key === editingItem}
              />
              )} 
              />

        {showPopup && <Popup
                        message={popupMessage}
                        onClose={closePopup} 
                        textColor={popupTextColor}
                        header={popupHeader}
                        icon={popupIcon}
                      />
        }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 15)',
  },
  text: {
    fontSize:16,
    color: '#87CEEB',
  },
  padding15px: {
    paddingLeft:15,
    paddingRight:15,
    paddingTop:15,
  },
  padding10px:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
  },
});
