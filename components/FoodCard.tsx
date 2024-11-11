import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface FoodCardProps {
  title: string;
  info: any;
}

const FoodCard: React.FC<FoodCardProps> = ({ title, info }) => {
  return (
    <Link
      href={{ pathname: "/foodPage", params: { info: JSON.stringify(info) } }}
    >
      <Text
        style={{
          alignSelf: "center",
          color: "#190933",
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </Link>
  );
};

export default FoodCard;

//rnfe
