import { useRouter } from "expo-router";
// import {React, useState} from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
// import { SafeAreaView} from "react-native-safe-area-context";




export default function Home() {
  const router = useRouter();
   
  return (
 
      <View style={styles.container}>

        <Text style={styles.title}>Zelda Index</Text>

        <Pressable style={styles.glossaryButton} onPress={() => router.push("/glossary")}>

          <Text style={styles.buttonText}>Glossary</Text>

          </Pressable>
          
        </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 100,
    color: "red",
    borderRadius: 15,
    backgroundColor: "grey",
    padding: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 24,
    fontWeight: "600",
  },
  glossaryButton: {
    backgroundColor: "gold",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: "70%",
    alignItems: "center",
  },
});