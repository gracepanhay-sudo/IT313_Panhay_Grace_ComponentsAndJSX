import { View, Text, StyleSheet } from "react-native";

interface StudentCardProps {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.info}>Course: {course}</Text>

      <Text style={styles.info}>Units: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  info: {
    fontSize: 14,
    marginTop: 5,
  },

  fullLoad: {
    marginTop: 8,
    fontWeight: "bold",
  },
});