import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "1",
    title: "Link",
    image: require("../assets/images/link.webp"),
    info: "This is Link. He is the main protagonist in almost all of the Zelda games. He has varrying appearances througout the games. He is technically ambidextrious but usually uses his sword in his left hand and his sheild in his right hand.",
  },
  {
    id: "2",
    title: "Zelda",
    image: require("../assets/images/zelda.png"),
    info: "This is Zelda. She is usually the character that the game revolves around. It's not always 'save the princess' becauase she's a badass in like all of the games, but it sometimes does come down to Ganondorf kidnapping Zelda and Link having to save her. Throughout the years of the games developments, Zelda has become more of a force to rekon with.",
  },
  {
    id: "3",
    title: "Sheik",
    image: require("../assets/images/sheik.webp"),
    info: "This is Sheik. Zelda's alter ego for only ONE GAME. Such a badass character for one game.",
  },
];


function Panel({ character }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.panel}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{character.title}</Text>
        <Image source={character.image} style={styles.images} resizeMode="contain"/>
      </View>

      {isActive ? (
        <Text style={styles.info}>{character.info}</Text>
      ) : (
        <Pressable style={styles.button} onPress={() => setIsActive(true)}>
          <Text style={styles.buttonText}>Info</Text>
        </Pressable>
      )}
    </View>
  );
}

export default function Accordion() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Glossary Screen</Text>
      <Text style={styles.subheading}>Discover more about each character in The Legend of Zelda</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Panel character={item} />}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  panel: {
    backgroundColor: "#f9fafb",
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#9ca3af",
    borderRadius: 6,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  images: {
    height: 300,
    width: 300,
    padding: 25,
  },
  button: {
    marginTop: 8,
    backgroundColor: "#660708",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  info: {
    marginTop: 8,
    fontSize: 14,
  },
});