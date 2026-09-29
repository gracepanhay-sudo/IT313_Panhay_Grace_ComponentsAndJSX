import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { students } from "../data/student";
import StudentCard from "./StudentCard";

export default function StudentRoster() {
  const [isReversed, setIsReversed] = useState(false);

  const displayedStudents = isReversed
    ? [...students].reverse()
    : students;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Student Roster</Text>

      <Text style={styles.count}>
        {`Total Students: ${students.length}`}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => setIsReversed(!isReversed)}
      >
        <Text style={styles.buttonText}>Reverse Roster</Text>
        
      </Pressable>

      {displayedStudents.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },

  count: {
    fontSize: 18,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#284ae2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});