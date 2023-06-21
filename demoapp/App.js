import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ListMenu from './screens/ListMenu';

// import Menu from './screens/Menu';
// import CurrentOrder from './screens/CurrentOrder';
// import { useState } from 'react';

import firebase from "firebase/app";



export default function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyCv6upASkXMkRpKkeEgax6AXzBGZ4Ithh4",
  authDomain: "adminsplasher.firebaseapp.com",
  projectId: "adminsplasher",
  storageBucket: "adminsplasher.appspot.com",
  messagingSenderId: "501883015624",
  appId: "1:501883015624:web:f89f83f252cb789bb3b0fd",
  measurementId: "G-QXQX1RY85W"
  };

  const app = initializeApp(firebaseConfig);
//   if (!firebase.apps.length) {
    // firebase.initializeApp(firebaseConfig);
//  }else {
//     firebase.app(); // if already initialized, use that one
//  }
  

  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      
      <NavigationContainer style={styles.container} >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = focused ? 25 : 20;
            if (route.name === "Profile") {
              iconName = focused ? "user-circle" : "user-circle-o";
            } else if (route.name === "ListMenu") {
              iconName = focused ? "list-alt" : "list-alt";
            } else if (route.name === "Home") {
              iconName = focused ? "address-book" : "address-book-o";
            }else if (route.name === "ListPost") {
              iconName = focused ? "post" : "post-outline";
            }
    
            // You can return any component that you like here!
            return <FontIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" children={()=><Home app={app}/>} options={{
          headerShown: false,
        }} />
        <Tab.Screen name="ListMenu" children={()=><ListMenu app={app}/>} options={{
          headerShown: false,
        }} />
        {/* <Tab.Screen name="Profile" component={Profile} /> */}
      </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
