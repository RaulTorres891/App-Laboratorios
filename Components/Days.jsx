import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default Days = ({ navigation }) => { 
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Horarios')}>
                <Text style={styles.buttonText}>Lunes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Horarios')}>
                <Text style={styles.buttonText}>Martes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Horarios')}>
                <Text style={styles.buttonText}>Miercoles</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Horarios')}>
                <Text style={styles.buttonText}>Jueves</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Horarios')}>
                <Text style={styles.buttonText}>Viernes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
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
        fontSize: 30,
    },
});


// import React from "react";
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// const Days = ({ route, navigation }) => {
//   const { laboratorio } = route.params;

//   return (
//     <View style={styles.container}>
//       {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map((dia, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.button}
//           onPress={() => navigation.navigate('Horarios', { dia, laboratorio })}
//         >
//           <Text style={styles.buttonText}>{dia}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
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
//     fontSize: 30,
//   },
// });

// export default Days;
