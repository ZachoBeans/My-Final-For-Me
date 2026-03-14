//This glossary.jsx file contains everything that is located in the "second" or "glossary" page of the app.

import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Link",
    image: require("../assets/images/link.webp"),
    info: "This is Link. He is the main protagonist in almost all of the Zelda games. He has varrying appearances througout the games. He is technically ambidextrious but usually uses his sword in his left hand and his sheild in his right hand. He has the triforce of courage.",
  },
  {
    id: "2",
    title: "Zelda",
    image: require("../assets/images/zelda.png"),
    info: "This is Zelda. She is usually the character that the game revolves around. It's not always 'save the princess' becauase she's a badass in like all of the games, but it sometimes does come down to Ganondorf kidnapping Zelda and Link having to save her. Throughout the years of the games developments, Zelda has become more of a force to rekon with. She has the triforce of wisdom.",
  },
  {
    id: "3",
    title: "Ganon",
    image: require("../assets/images/ganon.webp"),
    info: "This is Ganondorf. Also known as 'Ganon'. He is the king of the Gerudo, the only male to be born out of Gerudo in a hundred years. Ganondorf is his human form, and Ganon is also technically the same character, but in his best form. He has the triforce of power which is what gives him the ability to change into Ganon.",
  },
  {
    id: "4",
    title: "Sheik",
    image: require("../assets/images/sheik.webp"),
    info: "This is Sheik. Zelda's alias for only ONE GAME. Such an amazing character to only be used once. She appears in The Legend of Zelda Ocarina of Time. A lot of kids that were my age when we played the game thought she was a 'dude' until it was revealed later in the game that she's actually Zelda.",
  },
  {
    id: "5",
    title: "Impa",
    image: require("../assets/images/impa.webp"),
    info: "This is Impa. She has so many different roles throughout the Zelda games. She's been Zelda's personal guardian, Zelda's 'assistant', a highly ranked Sheikah member, and often acts like a ninja. She helps provide Link with guidance on his adventures into Hyrule. "
  },
];


function Panel({ character }) {
  const [isActive, setIsActive] = useState(false);

  return (

        <ImageBackground
                source={require("../assets/images/triforce.jpg")}
                style={styles.panel}
                resizeMode="cover"
        >
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

        </ImageBackground>
  );
}

export default function Accordion() {
  return (

    <ImageBackground
                source={require("../assets/images/background2.jpg")}
                style={styles.container}
                resizeMode="cover"
        >
      <Text style={styles.heading}>Glossary Screen</Text>
      <Text style={styles.subheading}>Discover more about each character in The Legend of Zelda</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Panel character={item} />}
        contentContainerStyle={{ paddingBottom: 16 }}
      />

     </ImageBackground>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "gold",
    marginHorizontal: 16,
    marginBottom: 4,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 240,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "green",
    borderRadius: 15,
  },
  subheading: {
    fontSize: 14,
    marginHorizontal: 16,
    marginBottom: 8,
    borderWidth: 2,
    marginRight: 45,
    textAlign: "center",
    color: "gold",
    borderColor: "green",
    borderRadius: 15,
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
    fontSize: 30,
    fontWeight: "600",
    flex: 1,
    color: "gold",
    backgroundColor: "green",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 15,
    textAlign: "center",
    marginLeft: -10,
    marginRight: -10,
  },
  images: {
    height: 300,
    width: 300,
    padding: 25,
  },
  button: {
    marginTop: 8,
    backgroundColor: "#660708",
    borderWidth: 2,
    boderColor: "black",
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 10,
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
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "rgba(145, 7, 7, 0.8)",
    color: "white",
    textAlign: "center",
    padding: 10,
  },
});