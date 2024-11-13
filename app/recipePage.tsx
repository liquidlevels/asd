import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const recipePage = () => {
  const { info } = useLocalSearchParams();
  const data = Array.isArray(info) ? info[0] : info;
  const item = JSON.parse(data);

  return (
    <ScrollView style={{ backgroundColor: "#fff5e0", height: "100%" }}>
      <Text style={styles.title}>{item.Name}</Text>
      <Image
        source={{ uri: item.Image }}
        resizeMode="cover"
        style={{ width: 300, height: 200, alignSelf: "center" }}
      ></Image>
      <Text style={styles.subtitle}>Ingredients</Text>
      <View style={styles.view}>
        {item.Ingredients.map((ingredient: string, index: number) => (
          <Text key={index} style={styles.text}>
            {ingredient}
          </Text>
        ))}
      </View>
      <Text style={styles.subtitle}>Recipe</Text>
      <View style={styles.view}>
        {item.Recipe.map((recipe: string, index: number) => (
          <Text key={index} style={styles.text}>
            {recipe}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 400,
    height: "auto",
    backgroundColor: "#ffd8c3",
    alignSelf: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  title: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#190933",
  },
  subtitle: {
    paddingHorizontal: 40,
    paddingTop: 20,
    // alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#190933",
  },
  text: {
    // alignSelf: "center",
    // fontWeight: "bold",
    color: "#190933",
  },
});

export default recipePage;
