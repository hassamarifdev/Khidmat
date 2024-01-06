import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import BookingScreen from "../bookingScreen/BookingScreen";
import Colors from "../utils/Colors";
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.Primary }}>
      <Tab.Screen name="home" component={HomeScreen} options={{
        tabBarLabel: (color)=>(
            <Text color={color} style={styles.tabBar}>Home</Text>
        ),
        tabBarIcon:({color, size})=>(
            <FontAwesome name="home" size={size} color={color} style={styles.icon}/>
        )
      }} />
      <Tab.Screen name="booking" component={BookingScreen} options={{
        tabBarLabel: (color)=>(
            <Text color={color} style={styles.tabBar}>Booking</Text>
        ),
        tabBarIcon:({color, size})=>(
            <FontAwesome name="bookmark" size={size} color={color} style={styles.icon}/>
        )
      }} />
      <Tab.Screen name="profile" component={ProfileScreen} options={{
        tabBarLabel: (color)=>(
            <Text color={color} style={styles.tabBar}>Profile</Text>
        ),
        tabBarIcon:({color, size})=>(
            <FontAwesome name="user-circle" size={size} color={color} style={styles.icon}/>
        )
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBar: {
        fontSize: 12,
        marginBottom: 3,
    },
    icon: {
        marginTop: 4
    }
});
