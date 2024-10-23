import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Buscador from './Components/Filter.jsx';
import Dias from './Components/Days.jsx';

function HomeScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Dias')}>
        <Text style={styles.buttonText}>Laboratorio A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Dias')}>
        <Text style={styles.buttonText}>Laboratorio B</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Dias')}>
        <Text style={styles.buttonText}>Laboratorio C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Dias')}>
        <Text style={styles.buttonText}>Laboratorio F</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Dias')}>
        <Text style={styles.buttonText}>Laboratorio Redes y Seguridad</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Dias')}>
        <Text style={styles.buttonText}>Laboratorio Python</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Dias')}>
        <Text style={styles.buttonText}>Laboratorio Tesla</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Dias')}>
        <Text style={styles.buttonText}>Laboratorio Edison</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Dias navigation = {navigation} />
    </View> 
  );
}

function OverScreen({ navigation }){
  return(
    <View style={styles.container}>
      <Buscador></Buscador>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lista de laboratorios" component={HomeScreen} />
        <Tab.Screen name="Dias" component={SettingsScreen} />
        <Tab.Screen name="Horarios" component={OverScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'stretch',
  },
  Button: {
    borderRadius: 10,
    padding: 16,
    backgroundColor: '#1e90ff',
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
// import Days from './Components/Days';
// import Horarios from './Components/Horario';

// const Tab = createBottomTabNavigator();

// function HomeScreen({ navigation }) {
//   const laboratorios = [
//     'Laboratorio A',
//     'Laboratorio B',
//     'Laboratorio C',
//     'Laboratorio F',
//     'Laboratorio Redes y Seguridad',
//     'Laboratorio Python',
//     'Laboratorio Tesla',
//     'Laboratorio Edison',
//   ];

//   return (
//     <View style={styles.container}>
//       {laboratorios.map((lab, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.button}
//           onPress={() => navigation.navigate('Dias', { laboratorio: lab })}
//           >
//           <Text style={styles.buttonText}>{lab}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Lista de laboratorios" component={HomeScreen} />
//         <Tab.Screen name="Dias" component={Days} />
//         <Tab.Screen name="Horarios" component={Horarios} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     padding: 16,
//   },
//   button: {
//     borderRadius: 10,
//     padding: 16,
//     backgroundColor: '#1e90ff',
//     marginVertical: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
// });
