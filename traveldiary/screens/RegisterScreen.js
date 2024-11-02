
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Conta criada com sucesso!");
      navigation.navigate('Login');
    } catch (error) {
      console.error("Erro ao registrar: ", error);

      // Tratamento de erro para e-mail já em uso
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Erro', 'Esse e-mail já está em uso. Tente outro e-mail.');
      } else {
        Alert.alert('Erro', 'Erro ao registrar: ' + error.message);
      }
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <TextInput 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail} 
          style={styles.input} 
        />
        <TextInput 
          placeholder="Senha" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry 
          style={styles.input} 
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
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
    backgroundColor: '#f9f9f9',
  },
  container: { 
    width: '90%', 
    padding: 16, 
    borderRadius: 8,
    backgroundColor: '#fff',
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
    marginBottom: 16, 
    paddingHorizontal: 12,
    borderRadius: 8
  },
  button: { 
    backgroundColor: '#1E90FF', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
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

export default RegisterScreen;

