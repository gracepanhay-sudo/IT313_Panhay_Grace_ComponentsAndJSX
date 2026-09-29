import { StyleSheet, View } from "react-native";
import StudentRoster from "../components/StudentRoster";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StudentRoster />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})