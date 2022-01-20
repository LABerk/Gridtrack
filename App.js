import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEILUclFx1rSNcaJiouDc90ZWzXqVuWHl1Q&usqp=CAU",
};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>GRIDTRACK</Text>
        <Text>TRACKING GRID SHOULD GO HERE</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#85a8e6",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: 200,
    opacity: 2,
  },
  text: {
    color: "#5f78d9",
    fontSize: 50,
    lineHeight: 600,
    fontWeight: "bold",
    textAlign: "center",
  },
});
