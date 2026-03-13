//This program is called the "Zelda Glossary". It contains a list/glossary of characters from the video game series "The Lengend of Zelda" with details and a description for each character. I am the author, Zach Snyder and this was created and last updated on March 10th.

//This index.jsx file is the "main" or "home" page to this app. This includes the title of the app and the button to reach the glossary page.

import { useRouter } from "expo-router";
import { StyleSheet, Text, Pressable, ImageBackground} from "react-native";



const buttonImage = require("../assets/images/symbol.webp")

export default function Home() {
  const router = useRouter();
   
  return (
    
    <ImageBackground 
      source={require("../assets/images/background.jpg")}
      style={styles.container}
      resizeMode="cover"
      >
        <ImageBackground
          source={buttonImage}
          style={styles.buttonBackground}
          resizeMode="contain"
  >
        <Text style={styles.title}>Zelda Index</Text> 
        </ImageBackground>

        <Pressable style={styles.glossaryButton} 
        onPress={() => router.push("/glossary")}>

        <Text style={styles.buttonText}>Glossary</Text>

        </Pressable>

      </ImageBackground>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBackground: {
    position: "relative",
    width: 250,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 100,
    color: "white",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "rgba(43, 37, 47, 0.5)",
    paddingBottom: 45,
    paddingRight: 20,
    paddingLeft: 20,
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
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 20,
    width: "60%",
    alignItems: "center",
  },
});