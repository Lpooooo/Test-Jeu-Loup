import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
    source={require('../../assets/LoupFond.webp')} // Ajoute une image de fond immersive
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Loup-Garou</Text>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttonText}>Lancer le jeu</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100 %',
    height : '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#B89F65',
    textShadowColor: '#6A1A1A',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 250,
  },
  subtitle: {
    fontSize: 18,
    color: '#F5F5F5',
    marginBottom: 30,
  },
  button: {
    marginBottom: 100,
    backgroundColor: '#B89F65',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#0A0A0A',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
