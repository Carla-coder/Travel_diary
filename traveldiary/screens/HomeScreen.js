
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        
        <Text style={styles.title}>Bem-vindo à Travel Diary!</Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateEntry')}
        >
          <Text style={styles.buttonText}>Criar Nova Entrada</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewEntry')}
        >
          <Text style={styles.buttonText}>Ver Entradas</Text>
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
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  logo: { 
    width: 200, 
    height: 200, 
    marginBottom: 20 
  }, 
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: 20 
  },
  button: { 
    backgroundColor: '#1E90FF', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 8, 
    marginVertical: 10, 
    width: '80%', 
    alignItems: 'center'
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default HomeScreen;
