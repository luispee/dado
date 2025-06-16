import { useState } from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";

function tirarDados() {
  const dados = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
  const numero = Math.floor(Math.random() * 6);
  return dados[numero];
}

export default function Index() {
  const [numero, setNumero] = useState("∅");

  return (
    <TouchableWithoutFeedback onPress={() => setNumero(tirarDados())}>
      <View style={styles.container}>
        <Text style={styles.dado}>{numero}</Text>
      </View>
    </TouchableWithoutFeedback>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dado: {
    fontSize: 126,
  },
});