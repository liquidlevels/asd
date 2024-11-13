import FoodCard from "@/components/FoodCard";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Index() {
  const [countryData, setCountryData] = useState<{ key: string; info: any }[]>(
    []
  );

  useEffect(() => {
    const fetchData = () => {
      const dataJSON = require("@/data/newcuosines.json");
      setCountryData(
        Object.keys(dataJSON).map((key) => ({
          key: key,
          info: dataJSON[key],
        }))
      );
    };
    fetchData();
  }, []); // [] = solo ejecutate una vez, al inicio del programa

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff5e0",
      }}
    >
      <FlatList
        numColumns={2} // debe tener un flex para que no truene
        data={countryData}
        renderItem={(itemData) => (
          <View
            style={{
              marginTop: 10,
              margin: 5,
              width: 180,
              height: 140,
              backgroundColor: "#ffd8c3",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <FoodCard
              title={itemData.item.info.Title}
              info={itemData.item.info}
            />
          </View>
        )}
      />
    </View>
  );
}
