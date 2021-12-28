// React Native Counter Example using Hooks!

import React, { useState } from "react";

import { View, Text, Button, StyleSheet } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me!" />
      <Cat name="Krishna Bharathula" />
      <Copy name="Copyright 2022" />
    </View>
  );
};

const Cat = (props) => {
  return <Text>Hello, I am {props.name}!</Text>;
};

const Copy = (props) => {
  return <Text>{props.name}!</Text>;
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
