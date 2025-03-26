import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity  } from "react-native";

export default function coreComp() {

  const giveAlert = () => {
    alert("Hello World!")
  }

  const screenWidth = Dimensions.get("window").width;

  return (

    <View style={styles.container}>
      <Text><Text style ={styles.patika}>Patika </Text> 🧠 Mini Challenge: Core Components</Text>
      

      <Text style={styles.centeredText}>🧠 Mini Challenge: Styling</Text>

      <View style={styles.centeredView}>
        <Text style={styles.centeredText}>Centered Text</Text>
      </View>

      <TouchableOpacity style={[styles.responsiveButton, { width: screenWidth * 0.8 }]} onPress={giveAlert}>
        <Text style={styles.buttonText}>Click me!</Text>
      </TouchableOpacity>


      <View style={styles.card}>
        <Image source={{uri: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"}} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Charmander</Text>
        <Text style={styles.cardDescription}>The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.</Text>
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  patika: {
    fontWeight: "800",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f0f0f0",
    marginBottom: 20,
  },
  centeredText: {
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
  responsiveButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "tomato",
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginTop: 20,
    width: "90%",
    alignItems: "center",
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 5,
  },
  cardDescription: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    justifyContent: "center",
  },
});