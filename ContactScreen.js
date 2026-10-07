import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import styles from "../../Styles/styles";

function ContactScreen(){
    const [email, setEmail] = useState("");

  const submitEmail = () => {Alert.alert("Success","Email submitted successfully!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>

      <View style={{flexDirection: "row",alignItems: "center"}}>
        <Ionicons name="mail-outline" size={24} />
        <TextInput
          style={[styles.input, { flex: 1, marginLeft: 10 }]}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          inputMode="email"
        />
      </View>

      <TouchableOpacity
        style={[styles.button,{ backgroundColor: "lightblue"}]}
        onPress={submitEmail}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}
export default ContactScreen;