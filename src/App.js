// React Native Counter Example using Hooks!

import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Counter />
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

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter(counter + 1);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);

  return <h1>{counter}</h1>;
};

export default App;
