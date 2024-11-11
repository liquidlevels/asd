import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const foodPage = () => {
  //se utiliza el nombre que le diste al parametro donde lo pasaste
  const { info } = useLocalSearchParams();
  const data = Array.isArray(info) ? info[0] : info;
  const dataParser = JSON.parse(data);
  return (
    <ScrollView style={{ backgroundColor: "#fff5e0" }}>
      <Text style={styles.title}>
        {dataParser.Title}
        {/* {dataParser.Emoji} */}
      </Text>

      <View
        style={{
          paddingTop: 15,
        }}
      >
        <Text style={styles.text}>
          Typical Meal Time: {dataParser.Typical_Meal_Time}
        </Text>
      </View>

      <Text
        style={{
          fontWeight: "bold",
          color: "#190933",
          paddingHorizontal: 40,
          paddingTop: 20,
        }}
      >
        Dishes
      </Text>
      <FlatList
        data={dataParser.Dishes}
        renderItem={(itemData) => (
          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 30,
              paddingVertical: 10,
              backgroundColor: "#ee9e8e",
              borderRadius: 2,
            }}
          >
            <Link href={"/recipePage"} style={styles.text}>
              <Text>{itemData.item}</Text>
            </Link>
          </View>
        )}
      />

      <Text
        style={{
          fontWeight: "bold",
          color: "#190933",
          paddingHorizontal: 40,
          paddingTop: 20,
        }}
      >
        Popular Ingredients
      </Text>
      <FlatList
        // style={{ backgroundColor: "#f07167" }}
        data={dataParser.Popular_Ingredients}
        renderItem={(itemData) => (
          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 30,
              paddingVertical: 10,
              backgroundColor: "#ffdbc3",
              borderRadius: 2,
            }}
          >
            <Text style={styles.text}>{itemData.item}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#190933",
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#190933",
  },
});

export default foodPage;
