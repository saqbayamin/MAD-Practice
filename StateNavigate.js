import React, {useState} from "react"; 
import {View,Text,TouchableOpacity} from "react-native";

import HomeScreen from "../screens/HomeScreen"; 
import ProfileScreen from "../screens/ProfileScreen"; 
import SettingScreen from "../screens/SettingScreen"; 
import ContactScreen from "../screens/ContactScreen"; 
function StateNavigation() { 
  {/*State Navigator*/}
  const [screen, setScreen] = useState("home");
  if (screen === "home") {
    return (
      <HomeScreen
        goToProfile={() => setScreen("profile")}
        goToSetting={() => setScreen("setting")}
        goToContact={() => setScreen("contact")}
      />
    );
  }
  if (screen === "profile"){ 
    return(
    <View style={{ flex: 1 }}>
        <ProfileScreen />
        <TouchableOpacity onPress={() => setScreen("home")}
          style={{alignSelf: "center",backgroundColor: "blue",
          paddingVertical: 12,paddingHorizontal: 25,
          borderRadius: 8,marginBottom: 30}}>
          <Text style={{color: "white",fontWeight: "bold",fontSize: 16,textAlign: "center"}}>⬅ Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (screen === "setting"){
    return (
      <View style={{ flex: 1 }}>
        <SettingScreen />
        <TouchableOpacity onPress={() => setScreen("home")}
          style={{alignSelf: "center",backgroundColor: "blue",paddingVertical: 12,paddingHorizontal: 25,borderRadius: 8,marginBottom: 30}}>
          <Text style={{color: "white",fontWeight: "bold",fontSize: 16,textAlign: "center"}}>⬅ Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (screen === "contact"){
    return (
      <View style={{ flex: 1 }}>
        <ContactScreen />
        <TouchableOpacity onPress={() => setScreen("home")}
          style={{alignSelf: "center",backgroundColor: "blue",
          paddingVertical: 12,paddingHorizontal: 25,
          borderRadius: 8,marginBottom: 30}}>
          <Text style={{color: "white",fontWeight: "bold",fontSize: 16,textAlign: "center"}}>⬅ Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
}
}
export default StateNavigation;