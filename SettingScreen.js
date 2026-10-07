import React, {useState} from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../Styles/styles";
function SettingScreen(){
   const [darkMode, setDarkMode] = useState(false);
    return(
        <View style={[styles.container, {backgroundColor:darkMode? "black":"white"}]}>
            <Text style={[styles.title, {color:darkMode?"white":"black"}]}>Settings</Text>
           <View style={{flexDirection:"row", alignItems:"center"}}>
                <Ionicons name={darkMode ? "moon" : "sunny"}size={24}color={darkMode ? "white" : "black"}/>
                <Text style={{color:darkMode?"white":"black", fontSize:18, marginLeft:10}}>{darkMode ? "Dark Mode" : "Light Mode"}</Text>
            </View>

            <Switch value={darkMode} onValueChange={setDarkMode}/>
        </View>
    )
}
export default SettingScreen;