import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../utils/Colors";
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.text}>{user?.fullName}</Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color="white" />
      </View>
      {/* Search section  */}
      <View style={styles.search}>
        <TextInput placeholder="Search" style={styles.textInput}/>
        <FontAwesome name="search" size={24} color={Colors.Primary} style={styles.searchBtn} />
      </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.Primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  text: {
    color: Colors.White,
    fontSize: 20,
  },
  welcome: {
    color: Colors.White,
  },
  search:{
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  searchBtn:{
    backgroundColor: Colors.White,
    padding: 10,
    borderRadius: 8,
    borderRadius: 12,
  },
  textInput:{
    padding: 7, 
    paddingHorizontal: 16,
    backgroundColor: Colors.White,
    borderRadius: 8, 
    width: '85%',
    fontSize: 16,
  },
});
