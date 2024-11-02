import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const EditEntryScreen = ({ route, navigation }) => {
  const { entry } = route.params; 
  const [title, setTitle] = useState(entry.title);
  const [description, setDescription] = useState(entry.description);
  const [location, setLocation] = useState(entry.location);
  const [date, setDate] = useState(entry.date); 

  const handleUpdate = async () => {
    try {
      const entryRef = doc(db, 'entries', entry.id);
      await updateDoc(entryRef, {
        title,
        description,
        location,
        date 
      });
      Alert.alert("Sucesso", "Entrada atualizada com sucesso!");
      navigation.goBack(); 
    } catch (error) {
      console.error("Erro ao atualizar entrada: ", error);
      Alert.alert("Erro", "Não foi possível atualizar a entrada.");
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <TextInput
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <TextInput
          placeholder="Localização"
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />
        <TextInput
          placeholder="Data (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  container: {
    width: '90%', 
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  button: { 
    backgroundColor: '#1E90FF', 
    paddingVertical: 12, 
    borderRadius: 8, 
    marginVertical: 10, 
    alignItems: 'center', 
  },
  buttonText: { 
    color: '#FFFFFF',
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default EditEntryScreen;

