import React, {useState} from "react";
import{View, Text, Image, TextInput}from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../Styles/styles";

function ProfileScreen(){

      const[name, setname]=useState("");
      const[age, setage]= useState("");
    return(
        <View style={[styles.container, {justifyContent:"flex-start", paddingTop:30}]}>
            <Text style={styles.title}>Profile</Text>

            {/*Profile Image*/}
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQmCUGzTCGAua6fS2wEI_du1rJG584aKy4I4FEyK7EA&s=10"}}
               style={{width:150, height:150, borderRadius:75, alignSelf:"center", marginBottom:20,}}/>
               
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Ionicons name="person-outline" size={22} />
            <Text style={{fontSize:18, marginLeft:8}}>Name</Text>
          </View> 
            {/*User Input*/}
            <TextInput style={styles.input} 
              placeholder="Enter your Name"
              value={name}
              onChangeText={setname}
              inputMode="text"
            />

          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Ionicons name="calendar-outline" size={22} />
            <Text style={{fontSize:18, marginLeft:8}}>Age</Text>
          </View>
             {/*User Input For Age*/}
            <TextInput style={styles.input} 
              placeholder="Enter your Age"
              value={age}
              onChangeText={setage}
              keyboardType="numeric"
              inputMode="numeric"
            />
             {/*Display the Screen*/}
            <Text style={{fontSize:18, marginTop:10}}>👤 Name: {name}</Text>
            <Text style={{fontSize:18}}>📅 Age: {age}</Text>
        </View>
    );
}
export default ProfileScreen;