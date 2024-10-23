import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Text } from "react-native";

const Filter = () => {

  const [busqueda, setBusqueda] = useState("");
  const [NameMateria] = useState([
    { id: "1", maestro: "Juan Pérez", materia: "Matemáticas", horario: "10:00 - 12:00", grupo: "A1" },
    { id: "2", maestro: "María Gómez", materia: "Física", horario: "14:00 - 16:00", grupo: "B2" },
    { id: "3", maestro: "Carlos Díaz", materia: "Química", horario: "08:00 - 10:00", grupo: "C3" },
    { id: "4", maestro: "Ana López", materia: "Historia", horario: "12:00 - 14:00", grupo: "D4" },
    { id: "5", maestro: "Luis Fernández", materia: "Literatura", horario: "09:00 - 11:00", grupo: "E5" },
    { id: "6", maestro: "Laura Martínez", materia: "Inglés", horario: "13:00 - 15:00", grupo: "F6" },
  ]);

  const NameMateriaFiltradas = NameMateria.filter((materia) =>
    materia.materia.toLowerCase().includes(busqueda.toLowerCase()) ||
    materia.maestro.toLowerCase().includes(busqueda.toLowerCase())
  );


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar materias o maestros..."
        value={busqueda}
        onChangeText={(text) => setBusqueda(text)}
      />

      <FlatList
        data={NameMateriaFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MateriaCard
            maestro={item.maestro} 
            materia={item.materia}
            horario={item.horario}
            grupo={item.grupo}         
          />
        )}
        ListEmptyComponent={<Text>No se encontraron resultados</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Filter;