import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const GameScreen = () => {

  const [count, setCount] = useState(0);
  
  return (
<ScrollView>
    <View style={styles.container}>
    <Text style={styles.text}>Bienvenue dans le jeu Loup-Garou !</Text>

    <View style={styles.counterBox}>
      <Text style={styles.counterText}>{count}</Text>
      </View>
      
    <View style={styles.buttonContainer}>
      <Button title="Cliquez pour tuer" onPress={() => setCount(count + 1)} />
      </View>
     
     <View style={styles.imageContainer}>
     <Image
       source={require('../../assets/6b6ead8e-32b3-4b52-9863-dc45cb1987b0.webp')}
       style={styles.image}
     />
     <Image
       source={require('../../assets/d8ee9d8e-f4d0-451a-afb7-7546e4b4d9c8.webp')} 
       style={styles.image}
     />
     <Image
       source={require('../../assets/LoupGarou.webp')} 
       style={styles.image}
        />
           <Image
       source={require('../../assets/e41c18e4-ebbd-4abf-aab2-7c99684c09b3.webp')}
       style={styles.image}
     />
   </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A0A0A',
  },
  text: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  counterBox: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Couleur jaune pour la case
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
});

export default GameScreen;