import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';

export default MateriaCard = ({maestro, materia, horario, grupo}) => {
  return (
    <TouchableOpacity>
       <View style={styles.cardContainer}>
      {/* Imagen de la carta
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.cardImage}
      /> */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{materia}</Text>
        <Text style={styles.cardDescription}>{maestro}</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.cardHour}>{horario}</Text>
        <Text style={styles.cardGroup}>{grupo}</Text>
      </View>
      <View style={styles.buttonEdit}>
        
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#90CAF9',
  },
  // cardImage: {
    //   width: 150,
    //   height: 150,
    //   borderRadius: 10,
    // },
    
    cardContent: {
      marginTop: 10,
      alignItems: 'baseline',
    },
    cardTitle: {
      fontSize: 18,
      color:"#0D47A1",
      fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#212121',
    textAlign: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  cardHour: {
    fontSize: 16,
    color: '#666',
  },
  cardGroup: {
    fontSize: 16,
    color: '#666',
  },
  buttonEdit: {

  },
});
