import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const giveAlert = () => {
    alert("Hello World!")
  }


  return (
    <View style={styles.container}>
      <Text><Text style ={styles.patika}>Patika </Text> 🧠 Mini Challenge: Core Components</Text>
      <Button title='Click me!' onPress={giveAlert}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  patika: {
    fontWeight: "800",
  }
});
