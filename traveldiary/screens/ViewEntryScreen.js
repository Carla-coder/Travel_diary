import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { db } from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// Obter as dimensões da tela
const screenHeight = Dimensions.get("window").height;

const ViewEntryScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  // Função para buscar as entradas
  const fetchEntries = async () => {
    try {
      const entriesCollection = collection(db, "entries");
      const entrySnapshot = await getDocs(entriesCollection);
      const entryList = entrySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEntries(entryList);
    } catch (error) {
      console.error("Erro ao buscar entradas: ", error);
      setError("Erro ao carregar entradas.");
    }
  };

  // Função para excluir uma entrada
  const deleteEntry = async (entryId) => {
    try {
      await deleteDoc(doc(db, "entries", entryId));
      setEntries(entries.filter((entry) => entry.id !== entryId));
      Alert.alert("Sucesso", "Entrada excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir entrada: ", error);
    }
  };

  // Atualiza as entradas ao focar na tela
  useFocusEffect(
    React.useCallback(() => {
      fetchEntries();
    }, [])
  );

  // Renderização da imagem
  const renderImage = (item) => {
    let uri;
    if (item.imageUrl === "villa") {
      uri = require("../assets/images/villa.png");
    } else {
      uri = { uri: item.imageUrl };
    }
    return <Image source={uri} style={styles.image} />;
  };

  // Função para navegar à tela de edição
  const navigateToEdit = (entry) => {
    navigation.navigate("EditEntryScreen", { entry });
  };

  // Verifica erro e exibe a mensagem de erro
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Entradas</Text>
      <View style={styles.listContainer}>
        {" "}
        {/* Limita a altura do FlatList */}
        <FlatList
          data={entries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.entryContainer}>
              {item.imageUrl && renderImage(item)}
              <View style={styles.textContainer}>
                <Text style={styles.entryTitle}>{item.title}</Text>
                <Text style={styles.entryDescription}>{item.description}</Text>
                <Text style={styles.entryDate}>{item.date}</Text>
                {item.location && (
                  <Text style={styles.entryLocation}>
                    Localização: {item.location}
                  </Text>
                )}
              </View>
              <TouchableOpacity
                onPress={() => navigateToEdit(item)}
                style={styles.editButton}
              >
                <Text style={styles.editButtonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteEntry(item.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 - Desenvolvido por Carla Coder
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
    color: "#333",
  },
  listContainer: {
    maxHeight: screenHeight * 0.7, // Ajuste automático para 70% da altura da tela
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 5,
    overflow: "hidden",
  },
  entryContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  entryTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
  },
  entryDescription: {
    color: "#666",
    fontSize: 14,
    marginTop: 4,
  },
  entryDate: {
    color: "#999",
    fontSize: 12,
    marginTop: 2,
  },
  entryLocation: {
    color: "#666",
    fontSize: 12,
    marginTop: 2,
  },
  editButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#ff5c5c",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#1e90ff",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    color: "#FFF",
    fontSize: 14,
  },
});

export default ViewEntryScreen;
