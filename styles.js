import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    justifyContent: "center",
  },

  button: {
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    width: 220,
    alignSelf: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
  },
});

export default styles;