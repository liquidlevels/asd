import { Text } from "react-native";
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
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        textAlignVertical: "center",
        textAlign: "center",
      }}
    >
      <Text
        style={{
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
