import { Button, StyleSheet } from "react-native";

export default function TestButton() {
  return <Button title="some button" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
