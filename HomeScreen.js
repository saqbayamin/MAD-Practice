import React from "react";
import {View, Text, ImageBackground, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../Styles/styles";

function HomeScreen({goToProfile, goToSetting, goToContact, navigation}){
    return(
        <ImageBackground source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSjYLKH0tyAf4RUaof04J7zK3mmJeYThGf1hOFfMiSQ&s=10"}}
            style={{flex:1}}>
                <View style={styles.container}>
                  <Text style={[styles.title, {color:'white', fontFamily:"Roboto-Bold"}]}>Student App</Text>  

                  {/*Navigation to Profile*/}
                  <TouchableOpacity style={[styles.button, {backgroundColor:"lightblue"}]}onPress={goToProfile|| (() => navigation.navigate("Profile"))}>
                     <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Ionicons name="person-outline" size={22} />
                        <Text style={[styles.buttonText, {marginLeft:8}]}>Profile</Text>
                     </View>
                  </TouchableOpacity>

                  {/*Navigation to Setting*/}
                  <TouchableOpacity style={[styles.button, {backgroundColor:"lightblue"}]}onPress={goToSetting|| (() => navigation.navigate("Setting"))}>
                     <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Ionicons name="settings-outline" size={22} />
                        <Text style={[styles.buttonText, {marginLeft:8}]}>Setting</Text>
                      </View>
                  </TouchableOpacity>

                  {/*Navigation to Contact*/}
                  <TouchableOpacity style={[styles.button, {backgroundColor:"lightblue"}]}onPress={goToContact|| (() => navigation.navigate("Contact"))}>
                     <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Ionicons name="call-outline" size={22} />
                        <Text style={[styles.buttonText, {marginLeft:8}]}>Contact</Text>
                     </View>
                  </TouchableOpacity>
                </View>
        </ImageBackground>
    );
}
export default HomeScreen;