import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../colors";
import { Entypo } from "@expo/vector-icons";
import { auth } from "../config/firebase";

const Home = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          color: "#000000",
          fontSize: 20,
          margin: 10,
          marginBottom: 40,
          textAlign: "center",
          fontFamily: "Verdana",
        }}
      >
        WELCOME TO ANONYMOUS CHAT ROOM
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
        style={styles.chatButton}
      >
        <Entypo name="chat" size={100} color={colors.lightGray} />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "bold",
          color: "#000000",
          fontSize: 18,
          margin: 10,
          marginBottom: 30,
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        CHAT
      </Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Entypo name="log-out" size={100} color={colors.lightGray} />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "bold",
          color: "#000000",
          fontSize: 18,
          margin: 10,
          marginBottom: 0,
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        LOG OUT
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginLeft: 15,
    marginBottom: 10,
  },
  des: {
    size: 20,
  },

  logoutButton: {
    backgroundColor: colors.red,
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.red,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 10,
  },
});
