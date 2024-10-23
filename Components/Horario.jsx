import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import MateriaCard from "./MateriaCard"; 

export default Horarios = () => {
  const materias = [
    {
      maestro: "Juan Pérez",
      materia: "Matemáticas",
      horario: "10:00 - 12:00",
      grupo: "A1",
    },
    {
      maestro: "María Gómez",
      materia: "Física",
      horario: "14:00 - 16:00",
      grupo: "B2",
    },
    {
      maestro: "Carlos Díaz",
      materia: "Química",
      horario: "08:00 - 10:00",
      grupo: "C3",
    },
    {
      maestro: "Ana López",
      materia: "Historia",
      horario: "12:00 - 14:00",
      grupo: "D4",
    },
    {
      maestro: "Luis Fernández",
      materia: "Literatura",
      horario: "09:00 - 11:00",
      grupo: "E5",
    },
    {
      maestro: "Laura Martínez",
      materia: "Inglés",
      horario: "13:00 - 15:00",
      grupo: "F6",
    },
  ];

// !TODO investigar sobre redis REDIS

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {materias.map((materia, index) => (
        <MateriaCard
          key={index}
          maestro={materia.maestro}
          materia={materia.materia}
          horario={materia.horario}
          grupo={materia.grupo}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20, 
    alignItems: "center",
  },
});


// import React from "react";
// import { ScrollView, View, StyleSheet, Text } from "react-native";
// import MateriaCard from "./MateriaCard";

// const horariosLaboratorio = {
//   "Laboratorio A": [
//     { maestro: "Juan Pérez", materia: "Matemáticas", horario: "10:00 - 12:00", grupo: "A1" },
//     { maestro: "Ana López", materia: "Historia", horario: "14:00 - 16:00", grupo: "B1" },
//   ],
//   "Laboratorio B": [
//     { maestro: "Carlos Díaz", materia: "Física", horario: "08:00 - 10:00", grupo: "B2" },
//     { maestro: "Laura Martínez", materia: "Química", horario: "12:00 - 14:00", grupo: "C1" },
//   ],
//   "Laboratorio C": [
//     { maestro: "Luis Fernández", materia: "Literatura", horario: "09:00 - 11:00", grupo: "C2" },
//     { maestro: "Juan Pérez", materia: "Matemáticas", horario: "13:00 - 15:00", grupo: "D1" },
//   ],
//   "Laboratorio F": [
//     { maestro: "Laura Martínez", materia: "Inglés", horario: "11:00 - 13:00", grupo: "D2" },
//     { maestro: "Ana López", materia: "Historia", horario: "15:00 - 17:00", grupo: "E1" },
//   ],
//   "Laboratorio Redes y Seguridad": [
//     { maestro: "Carlos Díaz", materia: "Seguridad", horario: "08:00 - 10:00", grupo: "E2" },
//     { maestro: "Luis Fernández", materia: "Redes", horario: "10:00 - 12:00", grupo: "F1" },
//   ],
//   "laboratorio Python": [
//     { maestro: "María Gómez", materia: "Python Básico", horario: "14:00 - 16:00", grupo: "F2" },
//     { maestro: "Juan Pérez", materia: "Python Avanzado", horario: "16:00 - 18:00", grupo: "G1" },
//   ],
//   "laboratorio Tesla": [
//     { maestro: "María Gómez", materia: "Python Básico", horario: "14:00 - 16:00", grupo: "F2" },
//     { maestro: "Juan Pérez", materia: "Python Avanzado", horario: "16:00 - 18:00", grupo: "G1" },
//   ],
//   "laboratorio Edison": [
//     { maestro: "María Gómez", materia: "Python Básico", horario: "14:00 - 16:00", grupo: "F2" },
//     { maestro: "Juan Pérez", materia: "Python Avanzado", horario: "16:00 - 18:00", grupo: "G1" },
//   ],
// };

// const Horarios = ({ route }) => {
//   const { laboratorio } = route.params;
//   const horarios = horariosLaboratorio[laboratorio] || [];

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <Text style={styles.header}>{laboratorio}</Text>
//       {horarios.map((materia, index) => (
//         <MateriaCard
//           key={index}
//           maestro={materia.maestro}
//           materia={materia.materia}
//           horario={materia.horario}
//           grupo={materia.grupo}
//         />
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     paddingBottom: 20,
//     alignItems: "center",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginVertical: 20,
//   },
// });

// export default Horarios;

