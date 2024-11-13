import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const foodPage = () => {
  //se utiliza el nombre que le diste al parametro donde lo pasaste
  const { info } = useLocalSearchParams();
  const data = Array.isArray(info) ? info[0] : info;
  const dataParser = JSON.parse(data);
  return (
    <ScrollView style={{ backgroundColor: "#fff5e0", height: "100%" }}>
      <Text style={styles.title}>{dataParser.Title}</Text>
      <View
        style={{
          paddingTop: 15,
        }}
      >
        <Text
          style={{ alignSelf: "center", fontWeight: "bold", color: "#190933" }}
        >
          Typical Meal Time: {dataParser.Typical_Meal_Time}
        </Text>
      </View>

      <Text style={styles.subtitle}>Dishes</Text>
      {dataParser.Dishes.map((dish: any, index: number) => (
        <Link
          href={{
            pathname: "/recipePage",
            params: { info: JSON.stringify(dish) },
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 5,
            marginHorizontal: 30,
            paddingVertical: 10,
            paddingLeft: 10,
            backgroundColor: "#ee9e8e",
            // backgroundColor: "#191919",
            borderRadius: 2,
          }}
          key={index}
        >
          <Text style={styles.text}>{dish.Name}</Text>
        </Link>
      ))}
      {/* <FlatList
        data={dataParser.Dishes}
        keyExtractor={(itemData) => itemData.Name}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/recipePage",
              params: { info: JSON.stringify(item) },
            }}
            style={{
              display: "flex",
              marginVertical: 5,
              marginHorizontal: 30,
              paddingVertical: 10,
              backgroundColor: "#ee9e8e",
              borderRadius: 2,
            }}
          >
            <Text style={styles.text}>{item.Name}</Text>
          </Link>
        )}
      /> */}

      <Text style={styles.subtitle}>Popular Ingredients</Text>
      {dataParser.Popular_Ingredients.map(
        (ingredient: string, index: number) => (
          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 30,
              paddingVertical: 10,
              backgroundColor: "#ffdbc3",
              borderRadius: 2,
              paddingLeft: 10,
            }}
            key={index}
          >
            <Text style={styles.text}>{ingredient}</Text>
          </View>
        )
      )}

      {/* <FlatList
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
      /> */}
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
    fontWeight: "bold",
    color: "#190933",
  },
});

export default foodPage;
